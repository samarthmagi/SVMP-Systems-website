import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="paper-hero flex min-h-screen items-center justify-center px-6">
      <div className="surface max-w-lg p-8 text-center">
        <p className="meta-line mb-4">404</p>
        <h1 className="display-title mb-4 text-6xl text-foreground">Page not found</h1>
        <p className="mb-6 text-muted-foreground">That route is not part of the system map.</p>
        <a href="/" className="text-link">
          Return to Home <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
