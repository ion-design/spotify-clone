
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, Library, Plus, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        'flex flex-col h-full bg-sidebar transition-all duration-300 ease-in-expo',
        collapsed ? 'w-[70px]' : 'w-[240px]',
        className
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          <svg 
            viewBox="0 0 24 24" 
            className={cn("h-8 w-8 text-primary transition-all duration-300", 
              collapsed ? "w-10 h-10" : ""
            )}
          >
            <path 
              fill="currentColor" 
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8Z M12,18.5C10,18.5 8.2,17.4 7.2,16H16.8C15.8,17.4 14,18.5 12,18.5Z" 
            />
          </svg>
          <span className={cn(
            "ml-2 font-semibold text-sidebar-foreground text-lg tracking-tight transition-all duration-200", 
            collapsed ? "opacity-0 w-0 absolute" : "opacity-100"
          )}>
            Spotify
          </span>
        </div>
        <button 
          onClick={toggleSidebar}
          className={cn(
"text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors p-1 rounded-full hover:bg-sidebar-accent",{
    "hidden":collapsed
}
          )}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <div className="mt-6 px-3">
        <nav className="space-y-1.5">
          <NavItem 
            to="/" 
            icon={<Home size={22} />} 
            label="Home" 
            collapsed={collapsed} 
          />
          <NavItem 
            to="/search" 
            icon={<Search size={22} />} 
            label="Search" 
            collapsed={collapsed} 
          />
          <NavItem 
            to="/library" 
            icon={<Library size={22} />} 
            label="Your Library" 
            collapsed={collapsed} 
          />
        </nav>
      </div>

          {!collapsed && (
      <div className="mt-8 px-3">
        <div className={cn(
          "bg-sidebar-accent rounded-md p-4 transition-all duration-300",
          collapsed ? "p-2" : ""
        )}>
          <div className={cn(
            "flex items-center justify-between mb-4",
            collapsed && "mb-2 justify-center"
          )}>
            <span className={cn(
              "font-medium text-sm text-sidebar-foreground transition-all duration-200",
              collapsed ? "opacity-0 w-0 absolute" : "opacity-100"
            )}>
              Playlists
            </span>
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors p-1 rounded-full hover:bg-sidebar-accent-foreground/10">
              <Plus size={collapsed ? 18 : 16} />
            </button>
          </div>
          
            <div className="space-y-1 overflow-y-auto max-h-[200px] pr-1">
              <PlaylistItem name="Chill Mix" />
              <PlaylistItem name="Focus Flow" />
              <PlaylistItem name="Discover Weekly" />
              <PlaylistItem name="Release Radar" />
              <PlaylistItem name="Summer Vibes" />
            </div>
        </div>
      </div>
          )}
      
      <div className="mt-auto p-4">
        <div className={cn(
          "text-xs text-sidebar-foreground/50 transition-all duration-200",
          collapsed ? "opacity-0" : "opacity-100"
        )}>
          © 2023 Spotify
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, collapsed }) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center h-10 px-3 rounded-md text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200",
        collapsed ? "justify-center" : "",
        to === "/" && "bg-sidebar-accent text-sidebar-foreground" // Active state
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className={cn(
        "ml-3 transition-all duration-200",
        collapsed ? "opacity-0 w-0 absolute" : "opacity-100"
      )}>
        {label}
      </span>
    </Link>
  );
};

interface PlaylistItemProps {
  name: string;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ name }) => {
  return (
    <Link
      to="#"
      className="flex items-center h-8 px-2 rounded text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent-foreground/10 transition-colors"
    >
      <span className="truncate text-sm">{name}</span>
    </Link>
  );
};

export default Sidebar;