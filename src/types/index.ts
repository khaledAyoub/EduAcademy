export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  thumbnail: string;
  audioUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
}