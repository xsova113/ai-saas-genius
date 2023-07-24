import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

interface ChatBubbleProps {
  className?: string;
  title: string;
  description: string;
  chatBubbleColor:
    | "chat-bubble-accent"
    | "chat-bubble-primary"
    | "chat-bubble-secondary"
    | "chat-bubble-info";
  icon: LucideIcon;
}

const ChatBubble = ({
  title,
  className,
  description,
  chatBubbleColor,
  icon: Icon,
}: ChatBubbleProps) => {
  return (
    <div className={cn("chat", className)}>
      <div className={cn("chat-bubble p-4", chatBubbleColor)}>
        <h1 className="chat-header text-xl text-slate-200 font-black mb-4 flex items-center gap-4">
          <Icon className={cn("w-14 h-14")} />
          {title}
        </h1>
        <p className="text-sm text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
