import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' }
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isTranslateReady, setIsTranslateReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize Google Translate
    const initializeGoogleTranslate = () => {
      // Remove existing Google Translate elements
      const existingFrame = document.querySelector('.goog-te-banner-frame');
      const existingElement = document.getElementById('google_translate_element');
      
      if (existingFrame) {
        existingFrame.remove();
      }
      
      if (existingElement) {
        existingElement.innerHTML = '';
      }

      // Set up the initialization function
      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, 'google_translate_element');
          
          setIsTranslateReady(true);
          
          // Hide Google's UI elements
          setTimeout(() => {
            const googleElements = document.querySelectorAll('.goog-te-gadget, .goog-te-combo, .goog-te-banner-frame');
            googleElements.forEach(el => {
              (el as HTMLElement).style.display = 'none';
            });
          }, 1000);
          
        } catch (error) {
          console.error('Google Translate initialization failed:', error);
        }
      };

      // Load Google Translate script if not already loaded
      if (!window.google || !window.google.translate) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else {
        // Let Google Translate script call googleTranslateElementInit automatically
        // when the API is fully loaded
      }
    };

    initializeGoogleTranslate();

    return () => {
      // Cleanup
      setIsTranslateReady(false);
    };
  }, []);

  const translatePage = (languageCode: string) => {
    if (!isTranslateReady) {
      console.log('Google Translate not ready yet');
      return;
    }

    try {
      if (languageCode !== 'en') {
        const currentUrl = window.location.href.split('#')[0];
        const translateUrl = `https://translate.google.com/translate?sl=en&tl=${languageCode}&u=${encodeURIComponent(currentUrl)}`;
        window.location.href = translateUrl;
      }

    } catch (error) {
      console.error('Translation failed:', error);
      // Method 2: Fallback to URL-based translation
    }
  };

  const handleLanguageChange = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    // Store selected language
    localStorage.setItem('selectedLanguage', JSON.stringify(language));

    if (language.code === 'en') {
      // Reset to English
      window.location.reload();
      return;
    }

    // Translate to selected language
    if (isTranslateReady) {
      translatePage(language.code);
    } else {
      // Wait for Google Translate to be ready
      const checkReady = setInterval(() => {
        if (isTranslateReady) {
          clearInterval(checkReady);
          translatePage(language.code);
        }
      }, 500);

      // Clear interval after 10 seconds
      setTimeout(() => clearInterval(checkReady), 10000);
    }
  };

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      try {
        const parsedLanguage = JSON.parse(savedLanguage);
        const foundLanguage = languages.find(lang => lang.code === parsedLanguage.code);
        if (foundLanguage) {
          setSelectedLanguage(foundLanguage);
          
          // Auto-translate if not English
          if (foundLanguage.code !== 'en' && isTranslateReady) {
            setTimeout(() => translatePage(foundLanguage.code), 2000);
          }
        }
      } catch (error) {
        console.error('Error loading saved language:', error);
      }
    }
  }, [isTranslateReady]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Custom Language Selector */}
      <div className="relative">
        <button
          aria-controls="language-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Current language: ${selectedLanguage.name}. Click to change language`}
          className="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{selectedLanguage.flag} {selectedLanguage.name}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <div 
          className={`absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-h-80 overflow-y-auto transition-all duration-200 ${
            isOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-2'
          }`}
          id="language-menu"
          role="menu"
          aria-labelledby="language-button"
        >
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">
                Select Language
              </div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  role="menuitem"
                  aria-label={`Switch to ${language.name}`}
                  onClick={() => handleLanguageChange(language)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none rounded-lg transition-colors duration-150 ${
                    selectedLanguage.code === language.code ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                  {!isTranslateReady && language.code !== 'en' && (
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">Loading...</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}