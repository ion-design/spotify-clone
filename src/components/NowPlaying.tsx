
import React from 'react';
import { cn } from '@/lib/utils';

interface NowPlayingProps {
  isVisible: boolean;
  album: {
    title: string;
    artist: string;
    coverUrl: string;
  };
  className?: string;
}

const NowPlaying: React.FC<NowPlayingProps> = ({
  isVisible,
  album,
  className
}) => {
  return (
    <div 
      className={cn(
        "fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-700 ease-in-expo overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"
        ></div>
        <img
          src={album.coverUrl}
          alt={album.title}
          className="w-full h-full object-cover scale-110 blur-xl"
        />
      </div>
    </div>
  );
};

export default NowPlaying;
