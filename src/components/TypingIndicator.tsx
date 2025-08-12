import React from 'react';

interface TypingIndicatorProps {
  sender: string;
  role: 'human' | 'ai' | 'system';
  isVisible: boolean;
  scenarioId?: number;
}

export default function TypingIndicator({
  sender,
  role,
  isVisible,
  scenarioId = 1,
}: TypingIndicatorProps) {
  if (!isVisible) return null;

  const getIndicatorStyle = () => {
    switch (role) {
      case 'ai':
        return 'bg-white/10 text-white/70 border-white/10';
      case 'system':
        return 'bg-white/10 text-white/70 border-white/10';
      default: // human
        return 'bg-white/5 text-white border-white/10';
    }
  };

  const getDisplayName = (username: string, scenarioId: number) => {
    // Map Trish to the correct person for each scenario
    if (username === 'Trish') {
      switch (scenarioId) {
        case 1: return 'Trish Hartman'; // Original scenario
        case 2: return 'Trish Hartman'; // Original scenario  
        case 3: return 'Scott Wu'; // Cognition CEO
        case 4: return 'Jeff Wang'; // Windsurf Interim CEO
        case 5: return 'Mike Krieger'; // Anthropic CPO
        case 6: return 'Kevin Weil'; // OpenAI CPO
        default: return 'Trish Hartman';
      }
    }
    
    // Map Sam to the correct person for each scenario
    if (username === 'Sam') {
      switch (scenarioId) {
        case 1: return 'Sam'; // Original scenario
        case 2: return 'Sam'; // Original scenario
        case 3: return 'Walden Yan'; // Cognition CPO
        case 4: return 'Kevin Lu'; // Windsurf CTO
        case 5: return 'Daniela Amodei'; // Anthropic President
        case 6: return 'Kate Rouch'; // OpenAI CMO
        default: return 'Sam';
      }
    }
    
    // Handle specific participants that should keep their names from scenarios
    const keepAsIs = [
      'Steven Hao', 'Walden Yan', // Cognition
      'Dario Amodei', 'Daniela Amodei', // Anthropic  
      'Brad Lightcap', 'Kate Rouch', // OpenAI
    ];
    
    if (keepAsIs.includes(username)) {
      return username; // Keep these names as-is from the scenarios
    }
    
    return username;
  };

  const getSenderLabel = () => {
    if (role === 'system') return 'System';
    return getDisplayName(sender, scenarioId);
  };

  return (
    <div
      className={`flex ${role === 'human' && sender === 'Trish' ? 'justify-end' : 'justify-start'} mb-2`}
    >
      <div
        className={`max-w-[280px] md:max-w-md px-4 py-3 rounded-[20px] border ${getIndicatorStyle()} animate-pulse`}
      >
        <div className="flex items-center gap-2">
          <span className="app-paragraph2 font-medium opacity-70">
            {getSenderLabel()}
          </span>
          <div className="flex gap-1">
            <div
              className="w-1 h-1 rounded-full bg-current animate-bounce"
              style={{ animationDelay: '0ms', animationDuration: '1000ms' }}
            />
            <div
              className="w-1 h-1 rounded-full bg-current animate-bounce"
              style={{ animationDelay: '200ms', animationDuration: '1000ms' }}
            />
            <div
              className="w-1 h-1 rounded-full bg-current animate-bounce"
              style={{ animationDelay: '400ms', animationDuration: '1000ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
