
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sidebar p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="h-16 w-16 text-primary"
          >
            <path 
              fill="currentColor" 
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8Z M12,18.5C10,18.5 8.2,17.4 7.2,16H16.8C15.8,17.4 14,18.5 12,18.5Z" 
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-sidebar-foreground animate-fade-in">Track Not Found</h1>
        <p className="text-xl text-sidebar-foreground/70 mb-8 animate-fade-in">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-white text-sidebar hover:bg-white/90 transition-colors shadow-lg animate-scale-in"
        >
          <HomeIcon size={18} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;