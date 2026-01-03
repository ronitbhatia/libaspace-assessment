// Job Types
export interface Job {
  id: string;
  title: string;
  company: Company;
  location: string;
  locationType: 'Remote' | 'Hybrid' | 'On-site';
  matchScore: number;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  tags: string[];
  posted: string;
  status: JobStatus;
  overview: string;
  qualifications: string[];
  required: string[];
  preferred: string[];
  responsibilities: string[];
  benefits: string[];
}

export interface Company {
  name: string;
  logo: string;
  location: string;
  size: string;
  description: string;
}

export type JobStatus = 'matched' | 'liked' | 'applied';

export interface JobListResponse {
  jobs: Job[];
  total: number;
  page: number;
  pageSize: number;
}

// User Types
export interface UserPreferences {
  roles: string[];
  locations: string[];
  salaryMin: number;
  workType: string[];
  skills: string[];
}

// Avatar Types
export interface AvatarMessage {
  text: string;
  timestamp: number;
}

export interface LiveKitTokenRequest {
  roomName: string;
  participantName: string;
}

export interface LiveKitTokenResponse {
  token: string;
  url: string;
}

export interface TavusSpeakRequest {
  text: string;
  personaId?: string;
}

export interface TavusSpeakResponse {
  audioUrl?: string;
  videoUrl?: string;
  duration?: number;
}

// Recommendation Types
export interface Recommendation {
  type: 'job' | 'insight' | 'tip';
  title: string;
  description: string;
  action?: string;
  data?: any;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

