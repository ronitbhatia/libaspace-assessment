'use client';

import { useState, useRef, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import { Send, Mic, MicOff, Video, VideoOff, Loader2 } from 'lucide-react';
import { getLiveKitToken, sendAvatarSpeech } from '@/lib/api';

export default function AvatarPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    initializeLiveKit();
  }, []);

  const initializeLiveKit = async () => {
    try {
      setIsLoading(true);
      const roomName = `avatar-room-${Date.now()}`;
      const participantName = `user-${Math.random().toString(36).substr(2, 9)}`;
      
      const { token, url } = await getLiveKitToken(roomName, participantName);
      
      // TODO: Initialize LiveKit connection with token and url
      // This requires LiveKit client SDK setup
      console.log('LiveKit token received:', { token, url });
      
      setIsConnected(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Error initializing LiveKit:', error);
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isSpeaking) return;

    const userMessage = message.trim();
    setMessage('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    
    setIsSpeaking(true);
    
    try {
      // Send to avatar API
      const response = await sendAvatarSpeech(userMessage);
      
      // Add assistant response
      setMessages(prev => [...prev, { role: 'assistant', text: userMessage }]);
      
      // Play audio/video response
      if (response.audioUrl && audioRef.current) {
        audioRef.current.src = response.audioUrl;
        audioRef.current.play();
      }
      
      if (response.videoUrl && videoRef.current) {
        videoRef.current.src = response.videoUrl;
        videoRef.current.play();
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsSpeaking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <MobileNav />

      <main className="lg:pl-72 pt-16 lg:pt-0 pb-20 lg:pb-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Career Advisor</h1>
            <p className="text-gray-600">
              Chat with your personal AI career coach in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Video Area */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden mb-4">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-12 w-12 text-white animate-spin" />
                  </div>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      playsInline
                      muted={!audioEnabled}
                    >
                      <source src="/avatar-placeholder.mp4" type="video/mp4" />
                    </video>
                    
                    {!isConnected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                        <div className="text-center text-white">
                          <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg">Connecting to avatar...</p>
                        </div>
                      </div>
                    )}
                    
                    {isSpeaking && (
                      <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Speaking...
                      </div>
                    )}
                  </>
                )}
                
                <audio ref={audioRef} className="hidden" />
              </div>

              {/* Video Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className={`p-3 rounded-full transition ${
                    audioEnabled
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                  title={audioEnabled ? 'Mute' : 'Unmute'}
                >
                  {audioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </button>
                
                <button
                  onClick={() => setVideoEnabled(!videoEnabled)}
                  className={`p-3 rounded-full transition ${
                    videoEnabled
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                  title={videoEnabled ? 'Disable Video' : 'Enable Video'}
                >
                  {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </button>
              </div>

              {/* Status */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isConnected ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                  <span className="text-sm text-gray-600">
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="bg-white rounded-xl border border-gray-200 flex flex-col h-[600px]">
              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Start a Conversation
                      </h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        Ask me anything about your career, job search, or interview preparation!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-3 ${
                            msg.role === 'user'
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-end gap-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    rows={2}
                    className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled={!isConnected || isSpeaking}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || !isConnected || isSpeaking}
                    className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isSpeaking ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </div>
          </div>

          {/* Quick Questions */}
          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                'How do I prepare for interviews?',
                'What are the best skills to learn?',
                'How do I negotiate salary?',
                'Tips for resume writing?',
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(question)}
                  className="text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm"
                  disabled={!isConnected || isSpeaking}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

