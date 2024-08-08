import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedin") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  if (isAuthenticated === null) {
    // Optionally, return a loading spinner or some other UI while checking auth status
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
