interface UserMessageProps {
  username: string;
  time: string;
  userMessage: string;
}

export default function UserMessage({
  username,
  time,
  userMessage,
}: UserMessageProps) {
  return (
    <div className="w-full flex flex-col items-end ">
      <div className="max-w-[300px] md:max-w-[400px] w-fit flex flex-col gap-1 p-4 border border-white/10 rounded-3xl">
        <div className="flex flex-row gap-2">
          <div className="w-6 h-6 bg-red-500 rounded-[40px]"></div>
          <div className="flex flex-1 flex-row justify-between items-center gap-10">
            <div className="app-subheading text-white">
              {username}
            </div>
            <div className="app-eyebrow text-white/50">
              {time}
            </div>
          </div>
        </div>
        <div className="app-paragraph2 text-white/80">
          {userMessage}
        </div>
      </div>
    </div>
  );
}
