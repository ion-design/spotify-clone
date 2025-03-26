
import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Heart,
  Repeat,
  Shuffle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const [hover, setHover] = useState(false);
  
  // Demo track information
  const trackInfo = {
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    coverUrl: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    duration: 180, // seconds
  };
  
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Simulate progress for demo purposes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / trackInfo.duration / 10);
          return newProgress > 100 ? 0 : newProgress;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, trackInfo.duration]);
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newProgress = (clickPosition / rect.width) * 100;
    
    setProgress(Math.max(0, Math.min(100, newProgress)));
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const currentTime = (trackInfo.duration * progress) / 100;
  
  return (
    <div 
      className={cn(
        "backdrop-blur-md bg-sidebar/90 text-sidebar-foreground border-t border-sidebar-border py-3 px-4 transition-all duration-300 ease-in-expo",
        hover ? "bg-sidebar" : "bg-sidebar/90",
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center justify-between">
        {/* Track info */}
        <div className="flex items-center w-1/4">
          <div className="relative h-14 w-14 rounded overflow-hidden shadow-lg">
            <img 
              src={trackInfo.coverUrl} 
              alt={trackInfo.title} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3 truncate">
            <h4 className="text-sm font-medium truncate">{trackInfo.title}</h4>
            <p className="text-xs text-sidebar-foreground/70 truncate">{trackInfo.artist}</p>
          </div>
          <button 
            className={cn(
              "ml-4 text-sidebar-foreground/70 hover:text-primary transition-colors",
              isLiked && "text-primary"
            )}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </button>
        </div>
        
        {/* Player controls */}
        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-center justify-center space-x-4">
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
              <Shuffle size={18} />
            </button>
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
              <SkipForward size={20} />
            </button>
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
              <Repeat size={18} />
            </button>
          </div>
          
          <div className="w-full flex items-center mt-1 px-6">
            <span className="text-xs text-sidebar-foreground/70 w-8">
              {formatTime(currentTime)}
            </span>
            <div 
              ref={progressBarRef}
              className="flex-grow mx-2 h-1 bg-sidebar-accent rounded-full overflow-hidden cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-primary rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div 
                  className={cn(
                    "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-md transition-opacity",
                    hover ? "opacity-100" : "opacity-0"
                  )}
                ></div>
              </div>
            </div>
            <span className="text-xs text-sidebar-foreground/70 w-8">
              {formatTime(trackInfo.duration)}
            </span>
          </div>
        </div>
        
        {/* Volume controls */}
        <div className="flex items-center justify-end w-1/4">
          <button 
            className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <div className="w-24 h-1 mx-3 bg-sidebar-accent rounded-full overflow-hidden">
            <div 
              className="h-full bg-sidebar-foreground/70 rounded-full"
              style={{ width: `${isMuted ? 0 : volume}%` }}
            ></div>
          </div>
          {/* Music wave animation for playing state */}
          <div className={cn(
            "flex items-center h-4 space-x-0.5 ml-3",
            !isPlaying && "opacity-0"
          )}>
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="music-wave"
              >
                <span style={{ '--i': i } as React.CSSProperties}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;