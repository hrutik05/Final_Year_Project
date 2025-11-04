import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Scale, ChevronDown, User, Settings } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalAreasOpen, setIsLegalAreasOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChatClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/chat');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">LegalAI</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">Indian Law Assistant</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
            <div 
              className="relative"
              onMouseEnter={() => setIsLegalAreasOpen(true)}
              onMouseLeave={() => setIsLegalAreasOpen(false)}
            >
              <button 
                aria-controls="legal-areas-menu"
                aria-expanded={isLegalAreasOpen}
                aria-haspopup="true"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                <span>Legal Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLegalAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 transition-all duration-200 ${
                  isLegalAreasOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
                id="legal-areas-menu"
              >
                <div 
                  className="py-2"
                  role="menu"
                  aria-labelledby="legal-areas-button"
                >
                  <Link 
                    to="/constitutional-law" 
                    role="menuitem"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none border-b border-gray-200 dark:border-gray-700 transition-colors duration-150"
                  >
                    Constitutional Law
                  </Link>
                  <Link 
                    to="/criminal-law" 
                    role="menuitem"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none border-b border-gray-200 dark:border-gray-700 transition-colors duration-150"
                  >
                    Criminal Law
                  </Link>
                  <Link 
                    to="/civil-law" 
                    role="menuitem"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none border-b border-gray-200 dark:border-gray-700 transition-colors duration-150"
                  >
                    Civil Law
                  </Link>
                
                  <Link 
                    to="/property-law" 
                    role="menuitem"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none transition-colors duration-150"
                  >
                    Property Law
                  </Link>
                </div>
              </div>
            </div>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
            <Link to="/project-info" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center space-x-1">
              <span>Project Info</span>
            </Link>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <div 
              className="relative"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <button
                aria-controls="profile-menu"
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 transition-all duration-200 ${
                  isProfileOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
                id="profile-menu"
              >
                <div 
                  className="py-2"
                  role="menu"
                  aria-labelledby="profile-button"
                >
                  {user ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                        Welcome, {user.fullName}
                      </div>
                      <button
                        onClick={() => {
                          localStorage.removeItem('user');
                          setUser(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:text-red-800 transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        role="menuitem"
                        className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none border-b border-gray-200 dark:border-gray-700 transition-colors duration-150"
                      >
                        <User className="w-4 h-4 inline mr-2" />
                        Sign In
                      </Link>
                      <Link 
                        to="/signup" 
                        role="menuitem"
                        className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none transition-colors duration-150"
                      >
                        <Settings className="w-4 h-4 inline mr-2" />
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button 
              onClick={handleChatClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
              Start Chat
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <a href="#home" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Home</a>
            <a href="#legal-areas" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Legal Areas</a>
            <a href="#about" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">About</a>
            <a href="#contact" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Contact</a>
            <div className="flex flex-col space-y-2 px-3 py-3">
              <div className="mb-2">
                <DarkModeToggle />
              </div>
              {user ? (
                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  <span>Welcome, {user.fullName}</span>
                  <button
                    onClick={() => {
                      localStorage.removeItem('user');
                      setUser(null);
                    }}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
              <button 
                onClick={handleChatClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}