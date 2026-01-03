import { Router, Request, Response } from 'express';
import axios from 'axios';
import { TavusSpeakRequest, ApiResponse, TavusSpeakResponse } from '@libaspace/shared';

const router = Router();

// Send text to Tavus for avatar speech
router.post('/speak', async (req: Request, res: Response) => {
  try {
    const { text, personaId }: TavusSpeakRequest = req.body;
    
    if (!text) {
      return res.status(400).json({
        success: false,
        error: 'Text is required'
      });
    }
    
    const tavusApiKey = process.env.TAVUS_API_KEY;
    const tavusApiUrl = process.env.TAVUS_API_URL;
    const defaultPersonaId = process.env.TAVUS_PERSONA_ID;
    
    if (!tavusApiKey || !tavusApiUrl) {
      console.error('Tavus API credentials not configured');
      return res.status(500).json({
        success: false,
        error: 'Tavus API not configured on server'
      });
    }
    
    // TODO: Replace with actual Tavus API endpoint when available
    // This is a placeholder implementation
    
    try {
      // Example Tavus API call (adjust based on actual API documentation)
      const response = await axios.post(
        `${tavusApiUrl}/speak`,
        {
          persona_id: personaId || defaultPersonaId,
          text: text,
          // Additional parameters based on Tavus API docs
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.75
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${tavusApiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 second timeout
        }
      );
      
      const tavusResponse: TavusSpeakResponse = {
        audioUrl: response.data.audio_url,
        videoUrl: response.data.video_url,
        duration: response.data.duration
      };
      
      res.json({
        success: true,
        data: tavusResponse
      });
    } catch (apiError: any) {
      console.error('Tavus API error:', apiError.response?.data || apiError.message);
      
      // Return mock response for development
      const mockResponse: TavusSpeakResponse = {
        audioUrl: 'https://example.com/mock-audio.mp3',
        videoUrl: 'https://example.com/mock-video.mp4',
        duration: 3.5
      };
      
      res.json({
        success: true,
        data: mockResponse,
        message: 'Using mock data (Tavus API not available)'
      });
    }
  } catch (error) {
    console.error('Error processing speech request:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process speech request'
    });
  }
});

// Get persona info
router.get('/persona/:personaId', async (req: Request, res: Response) => {
  try {
    const { personaId } = req.params;
    const tavusApiKey = process.env.TAVUS_API_KEY;
    const tavusApiUrl = process.env.TAVUS_API_URL;
    
    if (!tavusApiKey || !tavusApiUrl) {
      return res.status(500).json({
        success: false,
        error: 'Tavus API not configured'
      });
    }
    
    // TODO: Implement persona info retrieval using Tavus API
    // For now, return mock data
    res.json({
      success: true,
      data: {
        id: personaId,
        name: 'AI Assistant',
        description: 'Professional digital human for job interviews',
        thumbnailUrl: '/avatars/default.jpg'
      }
    });
  } catch (error) {
    console.error('Error fetching persona info:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch persona info'
    });
  }
});

// List available personas
router.get('/personas', async (req: Request, res: Response) => {
  try {
    // TODO: Implement using Tavus API
    res.json({
      success: true,
      data: {
        personas: [
          {
            id: 'default',
            name: 'AI Career Advisor',
            description: 'Your personal AI career coach',
            thumbnailUrl: '/avatars/default.jpg'
          }
        ]
      }
    });
  } catch (error) {
    console.error('Error fetching personas:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch personas'
    });
  }
});

export default router;

