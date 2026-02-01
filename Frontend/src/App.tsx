import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ToastContainer from './components/ToastContainer';
import OfflineIndicator from './components/OfflineIndicator';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatInterface from './components/ChatInterface';
import LegalAreas from './components/LegalAreas';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TranslationNotice from './components/TranslationNotice';
import ConstitutionalLaw from './pages/ConstitutionalLaw';
import CriminalLaw from './pages/CriminalLaw';
import CivilLaw from './pages/CivilLaw';
import PropertyLaw from './pages/PropertyLaw';
import ApiReference from './pages/ApiReference';
import UserGuide from './pages/UserGuide';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProjectInfo from './pages/ProjectInfo';
import Documentation from './pages/Documentation';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import { useToast } from './hooks/useToast';
import { useOnlineStatus } from './hooks/useOnlineStatus';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { toasts, removeToast } = useToast();
  const isOnline = useOnlineStatus();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // Scroll to chat section when opened
    if (!isChatOpen) {
      setTimeout(() => {
        const chatSection = document.getElementById('chat');
        if (chatSection) {
          chatSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <SkipLink href="#main-content">Skip to main content</SkipLink>
          <OfflineIndicator isOnline={isOnline} />
          <TranslationNotice />
          
          <ErrorBoundary fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Navigation Error</h2>
                <p className="text-gray-600 mb-4">There was an issue loading the navigation.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Reload Page
                </button>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={
                <ErrorBoundary>
                  <Header onChatToggle={toggleChat} />
                  <main id="main-content">
                    <Hero onChatToggle={toggleChat} />
                    {isChatOpen && (
                      <ErrorBoundary fallback={
                        <div className="py-20 text-center">
                          <p className="text-gray-600">Chat is temporarily unavailable.</p>
                        </div>
                      }>
                        <ChatInterface />
                      </ErrorBoundary>
                    )}
                    <LegalAreas />
                    <Features />
                    <About />
                    <Contact />
                  </main>
                  <Footer />
                </ErrorBoundary>
              } />
              <Route path="/constitutional-law" element={
                <ErrorBoundary>
                  <Header onChatToggle={toggleChat} />
                  <main id="main-content"><ConstitutionalLaw /></main>
                  <Footer />
                </ErrorBoundary>
              } />
              <Route path="/criminal-law" element={
                <ErrorBoundary>
                  <Header onChatToggle={toggleChat} />
                  <main id="main-content"><CriminalLaw /></main>
                  <Footer />
                </ErrorBoundary>
              } />
              <Route path="/civil-law" element={
                <ErrorBoundary>
                  <Header onChatToggle={toggleChat} />
                  <main id="main-content"><CivilLaw /></main>
                  <Footer />
                </ErrorBoundary>
              } />
              <Route path="/property-law" element={
                <ErrorBoundary>
                  <Header onChatToggle={toggleChat} />
                  <main id="main-content"><PropertyLaw /></main>
                  <Footer />
                </ErrorBoundary>
              } />
              <Route path="/api-reference" element={
                <ErrorBoundary>
                  <ApiReference />
                </ErrorBoundary>
              } />
              <Route path="/user-guide" element={
                <ErrorBoundary>
                  <UserGuide />
                </ErrorBoundary>
              } />
              <Route path="/faq" element={
                <ErrorBoundary>
                  <FAQ />
                </ErrorBoundary>
              } />
              <Route path="/support" element={
                <ErrorBoundary>
                  <Support />
                </ErrorBoundary>
              } />
              <Route path="/documentation" element={
                <ErrorBoundary>
                  <Documentation />
                </ErrorBoundary>
              } />
              <Route path="/project-info" element={
                <ErrorBoundary>
                  <ProjectInfo />
                </ErrorBoundary>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/server-error" element={<ServerError />} />
              <Route path="/chat" element={<ChatInterface />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
          
          <ToastContainer toasts={toasts} onClose={removeToast} />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;