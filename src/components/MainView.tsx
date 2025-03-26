
import React from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MainViewProps {
  children: React.ReactNode;
  className?: string;
}

const MainView: React.FC<MainViewProps> = ({ children, className }) => {
  const location = useLocation();

  // This setup adds page transition animations when location changes
  const [displayLocation, setDisplayLocation] = React.useState(location);
  return (
    <div 
      className={cn(
        "flex-1 h-full overflow-y-auto pt-6 pb-20",
        className
      )}
    >
      <div >
        {children}
      </div>
    </div>
  );
};

export default MainView;
