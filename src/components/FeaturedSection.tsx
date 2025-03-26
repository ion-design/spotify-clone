
import React from 'react';
import AlbumCard from './AlbumCard';
import { cn } from '@/lib/utils';

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  items: {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
  }[];
  className?: string;
  style?: React.CSSProperties;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  subtitle,
  items,
  className,
  style
}) => {
  return (
    <section className={cn("mb-8", className)} style={style}>
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {items.length > 4 && (
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item.id}>
            <AlbumCard
              title={item.title}
              artist={item.artist}
              coverUrl={item.coverUrl}
              onClick={() => console.log(`Playing ${item.title}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;