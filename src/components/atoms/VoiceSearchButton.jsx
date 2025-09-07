import React, { useState, useEffect } from 'react';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import { cn } from '@/utils/cn';

const VoiceSearchButton = ({ 
  onResult, 
  onError, 
  className,
  size = "sm",
  variant = "ghost",
  continuous = false,
  placeholder = "Speak your search...",
  commands = {}
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // Check if Speech Recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      
      // Configure recognition settings
      recognition.continuous = continuous;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      
      // Handle results
      recognition.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        const currentTranscript = finalTranscript || interimTranscript;
        setTranscript(currentTranscript);
        
        if (finalTranscript) {
          processVoiceCommand(finalTranscript.trim().toLowerCase());
          if (onResult) {
            onResult(finalTranscript.trim());
          }
        }
      };
      
      // Handle errors
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        if (onError) {
          onError(event.error);
        }
      };
      
      // Handle end
      recognition.onend = () => {
        setIsListening(false);
        setTranscript('');
      };
      
      setRecognition(recognition);
    }
  }, [continuous, onResult, onError]);

  const processVoiceCommand = (command) => {
    // Process navigation commands
    if (command.includes('go to dashboard') || command.includes('show dashboard')) {
      window.location.href = '/dashboard';
      return;
    }
    
    if (command.includes('go to tickets') || command.includes('show tickets')) {
      window.location.href = '/tickets';
      return;
    }
    
    if (command.includes('go to documents') || command.includes('show documents')) {
      window.location.href = '/documents';
      return;
    }
    
    if (command.includes('contact support') || command.includes('go to contact')) {
      window.location.href = '/contact';
      return;
    }
    
    if (command.includes('create ticket') || command.includes('new ticket')) {
      window.location.href = '/tickets';
      return;
    }
    
    // Process custom commands if provided
    if (commands) {
      Object.keys(commands).forEach(key => {
        if (command.includes(key.toLowerCase())) {
          commands[key](command);
        }
      });
    }
  };

  const toggleListening = () => {
    if (!isSupported || !recognition) return;
    
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Failed to start speech recognition:', error);
        if (onError) {
          onError('Failed to start speech recognition');
        }
      }
    }
  };

  if (!isSupported) {
    return null; // Hide button if not supported
  }

  return (
    <div className="relative">
      <Button
        variant={isListening ? "primary" : variant}
        size={size}
        onClick={toggleListening}
        className={cn(
          "transition-all duration-200",
          isListening && "animate-pulse",
          className
        )}
        title={isListening ? "Stop listening" : "Start voice search"}
        aria-label={isListening ? "Stop voice recognition" : "Start voice recognition"}
      >
        <ApperIcon 
          name={isListening ? "MicOff" : "Mic"} 
          className={cn(
            "w-4 h-4",
            size === "sm" && "w-4 h-4",
            size === "md" && "w-5 h-5",
            size === "lg" && "w-6 h-6"
          )} 
        />
        {isListening && (
          <span className="ml-2 text-sm">Listening...</span>
        )}
      </Button>
      
      {/* Show transcript while listening */}
      {isListening && transcript && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-lg p-3 z-50 min-w-64">
          <div className="text-sm text-slate-600 mb-1">You said:</div>
          <div className="text-sm font-medium text-slate-900">
            {transcript}
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceSearchButton;