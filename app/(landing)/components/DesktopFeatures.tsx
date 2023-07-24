import ChatBubble from "./ChatBubble";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Code2, ImageIcon, MessageSquare, Music, Video } from "lucide-react";
import { useParallax } from "react-scroll-parallax";

const DesktopFeatures = () => {
  const firstBubble = useParallax<HTMLDivElement>({
    scale: [0.9, 1.2, "easeInQuad"],
  });

  const image = useParallax<HTMLDivElement>({
    scaleX: [0.8, 1.2, "easeInQuad"],
  });

  const secondBubble = useParallax<HTMLDivElement>({
    scale: [1.2, 0.9, "easeInQuad"],
  });

  return (
    <div className="hidden lg:grid grid-cols-12">
      <div
        className="flex flex-col col-span-3 h-64 gap-20"
        ref={firstBubble.ref}
      >
        <ChatBubble
          description="Start a conversation with Genius and ask whatever you want!"
          title="Conversation Generator"
          className="chat-end"
          chatBubbleColor="chat-bubble-accent"
          icon={MessageSquare}
        />

        <ChatBubble
          title={"Image Generator"}
          description={
            "Descript the image to Genius and it will generate the image for you!"
          }
          chatBubbleColor={"chat-bubble-primary"}
          className="chat-end"
          icon={ImageIcon}
        />
      </div>

      <div className="flex flex-col items-center col-span-6" ref={image.ref}>
        <AspectRatio ratio={15 / 12}>
          <Image
            src={"/empty.png"}
            alt={"image"}
            fill
            className="object-cover"
          />
        </AspectRatio>

        <div className="card bg-purple-500 text-slate-200 w-68 mt-8">
          <div className="card-body items-start p-3">
            <h1 className="card-title font-black gap-4">
              <Video className="h-14 w-14" />
              Video Generator
            </h1>
            <p className="text-sm">
              Tell Genius anything to generate a video for you!
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col col-span-3 h-64 gap-20"
        ref={secondBubble.ref}
      >
        <ChatBubble
          title={"Music Generator"}
          description={"Tell Genius anything to generate a music!"}
          chatBubbleColor={"chat-bubble-secondary"}
          className="chat-start"
          icon={Music}
        />
        <ChatBubble
          title={"Code Generator"}
          description={
            "Generate a code snippet for you, or explain a code snippet!"
          }
          chatBubbleColor={"chat-bubble-info"}
          className="chat-start"
          icon={Code2}
        />
      </div>
    </div>
  );
};

export default DesktopFeatures;
