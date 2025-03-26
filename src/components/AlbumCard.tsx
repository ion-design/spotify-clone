import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlbumCardProps {
  title: string;
  artist: string;
  coverUrl: string;
  className?: string;
  onClick?: () => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  artist,
  coverUrl,
  className,
  onClick
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={cn(
        "group flex flex-col w-full transition-all duration-300 ease-in-expo",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="album-cover aspect-square mb-3 rounded-md">
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted/50 to-muted/30 animate-shimmer rounded-md" />
        )}
        <img
          src={coverUrl}
          alt={`${title} by ${artist}`}
          className={cn(
            "w-full h-full object-cover rounded-md shadow-md transition-all duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setIsLoading(false)}
        />
        <div className="album-overlay">
          <button 
            className={cn(
              "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl transition-all duration-300 ease-in-expo",
              isHovered 
                ? "scale-100 opacity-100 translate-y-0" 
                : "scale-75 opacity-0 translate-y-2"
            )}
          >
            <Play size={18} fill="currentColor" className="ml-1" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
