import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code2, ImageIcon, MessageSquare, Music, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Conversation Generator",
    description: "Start a conversation with Genius and ask whatever you want!",
    icon: MessageSquare,
    bgColor: "bg-info",
  },
  {
    title: "Image Generator",
    description:
      "Descript the image to Genius and it will generate the image for you!",
    icon: ImageIcon,
    bgColor: "bg-primary",
  },
  {
    title: "Video Generator",
    description: "Tell Genius anything to generate a video for you!",
    icon: Video,
    bgColor: "bg-orange-500",
  },
  {
    title: "Music Generator",
    description: "Tell Genius anything to generate a music!",
    icon: Music,
    bgColor: "bg-emerald-500",
  },
  {
    title: "Code Generator",
    description: "Generate a code snippet for you, or explain a code snippet!",
    icon: Code2,
    bgColor: "bg-pink-500",
  },
];

const MobileFeatures = () => {
  return (
    <section className="lg:hidden grid grid-cols-3 gap-4">
      <div className="col-span-3 relative w-full aspect-square">
        <Image src={"/empty.png"} alt={"image"} fill />
      </div>

      {features.map((item) => (
        <Card
          key={item.description}
          className={cn("col-span-3 sm:col-span-1 border-none", item.bgColor)}
        >
          <CardHeader className="space-y-4">
            <CardTitle className="flex gap-4 items-center text-white leading-snug">
              <item.icon className="w-10 h-10" />
              {item.title}
            </CardTitle>
            <CardDescription className="text-slate-200">
              {item.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
};

export default MobileFeatures;
