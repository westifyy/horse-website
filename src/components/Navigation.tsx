import React from 'react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-serif">Equestrian Services</h1>
          {isAuthenticated ? (
            <Button onClick={logout} variant="secondary">
              Logout
            </Button>
          ) : (
            <Button variant="secondary">
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;