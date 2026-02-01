import React, { useEffect, useState } from 'react';
import { Scale, MessageSquare, Users, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onChatToggle: () => void;
}

export default function Hero({ onChatToggle }: HeroProps) {
  const [user, setUser] = useState(null);
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-8 border border-blue-200 dark:border-blue-700">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Legal Assistant for Indian Laws
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LegalAI
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-normal text-gray-700 dark:text-gray-300">
              Your Legal Knowledge Companion
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get instant answers to your legal questions with our AI assistant trained on Indian laws. 
            From constitutional rights to corporate regulations, we make legal knowledge accessible to everyone.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleChatClick}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Legal Chat
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#legal-areas"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Legal Areas
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">Legal Questions Answered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Available Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}