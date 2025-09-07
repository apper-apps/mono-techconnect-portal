import React, { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import Error from "@/components/ui/Error";

const VoiceSearchContext = createContext({});

export const useVoiceSearch = () => {
  const context = useContext(VoiceSearchContext);
  if (!context) {
    throw new Error('useVoiceSearch must be used within a VoiceSearchProvider');
  }
  return context;
};

export const VoiceSearchProvider = ({ children }) => {
  const [isGlobalListening, setIsGlobalListening] = useState(false);
  const [lastQuery, setLastQuery] = useState('');

  const handleVoiceResult = useCallback((result) => {
    setLastQuery(result);
    toast.success(`Voice search: "${result}"`);
// Broadcast the result to any listening components
    if (typeof window !== 'undefined' && window.CustomEvent) {
      window.dispatchEvent(new window.CustomEvent('voiceSearchResult', {
        detail: { query: result }
      }));
    }
  }, []);

  const handleVoiceError = useCallback((error) => {
    console.error('Voice search error:', error);
    
    let errorMessage = 'Voice search failed';
    switch (error) {
      case 'not-allowed':
        errorMessage = 'Microphone access denied. Please allow microphone access to use voice search.';
        break;
      case 'no-speech':
        errorMessage = 'No speech detected. Please try again.';
        break;
      case 'audio-capture':
        errorMessage = 'No microphone found. Please check your microphone connection.';
        break;
      case 'network':
        errorMessage = 'Network error occurred. Please check your internet connection.';
        break;
      default:
        errorMessage = `Voice search error: ${error}`;
    }
    
    toast.error(errorMessage);
    setIsGlobalListening(false);
  }, []);

  const startGlobalListening = useCallback(() => {
    setIsGlobalListening(true);
  }, []);

  const stopGlobalListening = useCallback(() => {
    setIsGlobalListening(false);
  }, []);

  const value = {
    isGlobalListening,
    lastQuery,
    startGlobalListening,
    stopGlobalListening,
    handleVoiceResult,
    handleVoiceError
  };

  return (
    <VoiceSearchContext.Provider value={value}>
      {children}
    </VoiceSearchContext.Provider>
  );
};

export default VoiceSearchProvider;