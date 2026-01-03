import axios from 'axios';
import type { 
  Job, 
  JobListResponse, 
  ApiResponse, 
  LiveKitTokenRequest, 
  LiveKitTokenResponse,
  TavusSpeakRequest,
  TavusSpeakResponse 
} from '@libaspace/shared';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Job API
export async function fetchJobs(status?: string, page = 1, pageSize = 10): Promise<JobListResponse> {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  
  const response = await api.get<ApiResponse<JobListResponse>>(`/jobs?${params.toString()}`);
  return response.data.data!;
}

export async function fetchJobById(id: string): Promise<Job> {
  const response = await api.get<ApiResponse<Job>>(`/jobs/${id}`);
  return response.data.data!;
}

export async function saveJob(id: string): Promise<void> {
  await api.post(`/jobs/${id}/save`);
}

export async function applyToJob(id: string): Promise<void> {
  await api.post(`/jobs/${id}/apply`);
}

// LiveKit API
export async function getLiveKitToken(
  roomName: string, 
  participantName: string
): Promise<LiveKitTokenResponse> {
  const payload: LiveKitTokenRequest = { roomName, participantName };
  const response = await api.post<ApiResponse<LiveKitTokenResponse>>('/livekit/token', payload);
  return response.data.data!;
}

// Avatar API
export async function sendAvatarSpeech(text: string, personaId?: string): Promise<TavusSpeakResponse> {
  const payload: TavusSpeakRequest = { text, personaId };
  const response = await api.post<ApiResponse<TavusSpeakResponse>>('/avatar/speak', payload);
  return response.data.data!;
}

export async function getPersonas() {
  const response = await api.get('/avatar/personas');
  return response.data.data;
}

