import React, { useState, useEffect } from 'react';
import { Info, X, Globe } from 'lucide-react';

export default function TranslationNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Check if page is being translated
    const checkTranslation = () => {
      // Check for Google Translate indicators
      const bodyClass = document.body.className;
      const isTranslated = bodyClass.includes('translated-') || 
                          bodyClass.includes('goog-te-') ||
                          document.querySelector('.goog-te-banner-frame') !== null;
      
      // Check saved language preference
      const savedLanguage = localStorage.getItem('selectedLanguage');
      let currentLanguage = 'en';
      
      if (savedLanguage) {
        try {
          const parsedLanguage = JSON.parse(savedLanguage);
          currentLanguage = parsedLanguage.code;
        } catch (error) {
          console.error('Error parsing saved language:', error);
        }
      }
      
      setCurrentLang(currentLanguage);
      
      // Show notice if translated or non-English language selected
      if (isTranslated || currentLanguage !== 'en') {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check immediately
    checkTranslation();

    // Check periodically for translation changes
    const interval = setInterval(checkTranslation, 2000);
    
    // Listen for DOM changes
    const observer = new MutationObserver(checkTranslation);
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'],
      subtree: true 
    });
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const resetToEnglish = () => {
    // Clear saved language preference
    localStorage.removeItem('selectedLanguage');
    
    // Reload page to reset translation
    window.location.reload();
  };

  if (!isVisible || currentLang === 'en') return null;

  return (
    <div className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-lg z-50">
      <div className="flex items-start space-x-3">
        <div className="bg-amber-100 p-1 rounded-full">
          <Globe className="w-4 h-4 text-amber-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-semibold text-amber-900">Page Translated</h4>
            <button
              onClick={() => setIsVisible(false)}
              className="text-amber-600 hover:text-amber-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-amber-800 mb-2">
            This page can't be translated. Legal terms may have specific meanings in their original language.
          </p>
          <div className="mt-2">
            <button
              onClick={resetToEnglish}
              className="text-xs bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition-colors"
            >
              View Original (English)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}