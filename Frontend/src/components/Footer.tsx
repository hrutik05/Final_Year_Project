import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">LegalAI</span>
                <div className="text-xs text-gray-400 dark:text-gray-500">Indian Law Assistant</div>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              AI-powered legal assistant for Indian laws. A final year project aimed at making legal knowledge accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal Areas</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link to="/constitutional-law" className="hover:text-white dark:hover:text-gray-300 transition-colors">Constitutional Law</Link></li>
              <li><Link to="/criminal-law" className="hover:text-white dark:hover:text-gray-300 transition-colors">Criminal Law</Link></li>
              <li><Link to="/civil-law" className="hover:text-white dark:hover:text-gray-300 transition-colors">Civil Law</Link></li>
              <li><Link to="/property-law" className="hover:text-white dark:hover:text-gray-300 transition-colors">Property Law</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <Link 
                  to="/api-reference"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors flex items-center group"
                >
                  <span className="group-hover:underline">Documentation</span>
                  <ExternalLink className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform" />
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link 
                  to="/user-guide"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors group"
                >
                  <span className="group-hover:underline">User Guide</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors group"
                >
                  <span className="group-hover:underline">FAQ</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors group"
                >
                  <span className="group-hover:underline">Support</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Project Info</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="#about" className="hover:text-white dark:hover:text-gray-300 transition-colors">About the Project</a></li>
              <li>
                <Link 
                  to="/project-info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors flex items-center"
                >
                  Project Information <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </li>
              <li><Link 
                  to="/documentation"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors flex items-center group"
                >
                  <span className="group-hover:underline">Full Documentation</span>
                  <ExternalLink className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform" />
                </Link></li>
              {/* <li><a href="#tech-stack" className="hover:text-white dark:hover:text-gray-300 transition-colors">Technology Stack</a></li> */}
              {/* <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Contribute</a></li> */}
              {/* <li><a href="#contact" className="hover:text-white dark:hover:text-gray-300 transition-colors">Contact Us</a></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              <p>&copy; 2025 LegalAI Project.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
