import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

export function AudioPlayer({ audioUrl, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <audio ref={audioRef} src={audioUrl} />
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center space-x-2">
          <Volume2 className="h-5 w-5 text-gray-600" />
          <select
            value={playbackRate}
            onChange={(e) => handlePlaybackRateChange(Number(e.target.value))}
            className="bg-gray-100 rounded px-2 py-1 text-sm"
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <SkipBack className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={togglePlayback}
          className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <SkipForward className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}