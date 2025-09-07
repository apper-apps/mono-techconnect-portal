import React, { useState, useEffect } from 'react';
import Input from '@/components/atoms/Input';
import VoiceSearchButton from '@/components/atoms/VoiceSearchButton';
import { toast } from 'react-toastify';

const VoiceSearchInput = ({ 
  value, 
  onChange, 
  placeholder = "Search...",
  className,
  onVoiceComplete,
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  const handleVoiceResult = (result) => {
    const newValue = result.trim();
    setInputValue(newValue);
    
    // Update parent component
    if (onChange) {
      onChange({ target: { value: newValue } });
    }
    
    // Call completion callback if provided
    if (onVoiceComplete) {
      onVoiceComplete(newValue);
    }
    
    toast.success(`Voice input: "${newValue}"`);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`pr-12 ${className}`}
        {...props}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <VoiceSearchButton
          onResult={handleVoiceResult}
          size="sm"
          variant="ghost"
          className="h-8 px-2 hover:bg-slate-100"
        />
      </div>
    </div>
  );
};

export default VoiceSearchInput;