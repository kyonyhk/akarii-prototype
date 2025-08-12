import { Logo } from '../atoms';
import MarkdownContent from './MarkdownContent';

interface AkariiMessageProps {
  time: string;
  akariiMessage: string;
}

export default function AkariiMessage({
  time,
  akariiMessage,
}: AkariiMessageProps) {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="max-w-[500px] md:max-w-[600px] w-fit flex flex-col gap-3 p-4 bg-white/10 border border-white/20 rounded-3xl">
        <div className="flex flex-row gap-2">
          <Logo size={24} />
          <div className="flex flex-1 flex-row justify-between items-center gap-10">
            <div className="app-subheading text-white">
              Akarii
            </div>
            <div className="app-eyebrow text-white/50">
              {time}
            </div>
          </div>
        </div>
        <div>
          <MarkdownContent content={akariiMessage} />
        </div>
      </div>
    </div>
  );
}
