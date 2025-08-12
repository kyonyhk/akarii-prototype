interface UserMessageProps {
  username: string;
  time: string;
  userMessage: string;
  isTyping?: boolean;
  displayedContent?: string;
  scenarioId?: number;
}

export default function UserMessage({
  username,
  time,
  userMessage,
  isTyping = false,
  displayedContent,
  scenarioId = 1,
}: UserMessageProps) {
  const content = isTyping ? displayedContent || '' : userMessage;

  const getDisplayName = (username: string, scenarioId: number) => {
    // Map Trish to the correct person for each scenario
    if (username === 'Trish') {
      switch (scenarioId) {
        case 1:
          return 'Trish Hartman'; // Original scenario
        case 2:
          return 'Trish Hartman'; // Original scenario
        case 3:
          return 'Scott Wu'; // Cognition CEO
        case 4:
          return 'Jeff Wang'; // Windsurf Interim CEO
        case 5:
          return 'Mike Krieger'; // Anthropic CPO
        case 6:
          return 'Kevin Weil'; // OpenAI CPO
        default:
          return 'Trish Hartman';
      }
    }

    // Map Sam to the correct person for each scenario
    if (username === 'Sam') {
      switch (scenarioId) {
        case 1:
          return 'Sam'; // Original scenario
        case 2:
          return 'Sam'; // Original scenario
        case 3:
          return 'Walden Yan'; // Cognition CPO
        case 4:
          return 'Kevin Lu'; // Windsurf CTO
        case 5:
          return 'Daniela Amodei'; // Anthropic President
        case 6:
          return 'Kate Rouch'; // OpenAI CMO
        default:
          return 'Sam';
      }
    }

    return username;
  };
  return (
    <div className="w-full flex flex-col items-end ">
      <div className="max-w-[300px] md:max-w-[400px] w-fit flex flex-col gap-1 p-4 border border-white/10 rounded-3xl">
        <div className="flex flex-row gap-2">
          <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-[40px]"></div>
          <div className="flex flex-1 flex-row justify-between items-center gap-10">
            <div className="app-subheading text-white">
              {getDisplayName(username, scenarioId)}
            </div>
            <div className="app-eyebrow text-white/50">{time}</div>
          </div>
        </div>
        <div className="app-paragraph2 text-white/80">
          {content}
          {isTyping && <span className="animate-pulse">|</span>}
        </div>
      </div>
    </div>
  );
}
