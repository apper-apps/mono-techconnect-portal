import React from "react";
import { cn } from "@/utils/cn";
import VoiceSearchButton from "./VoiceSearchButton";
const Input = React.forwardRef(({ 
  className, 
  type, 
  enableVoiceSearch = false,
  onVoiceResult,
  voiceCommands,
  ...props 
}, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
          enableVoiceSearch && "pr-12",
          className
        )}
        ref={ref}
        {...props}
      />
      {enableVoiceSearch && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <VoiceSearchButton
            onResult={onVoiceResult}
            size="sm"
            variant="ghost"
            commands={voiceCommands}
            className="h-8 px-2"
          />
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;