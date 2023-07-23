import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "skyblue",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "violet",
  },
  {
    label: "Image",
    icon: ImageIcon,
    href: "/image",
    color: "pink",
  },
  {
    label: "Video",
    icon: VideoIcon,
    href: "/video",
    color: "orange",
  },
  {
    label: "Music",
    icon: MusicIcon,
    href: "/music",
    color: "lightgreen",
  },
  {
    label: "Code",
    icon: CodeIcon,
    href: "/code",
    color: "darkred",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "violet",
    bgColor: "#e7d5e7",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "green",
    bgColor: "#c9e3c9",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "pink",
    bgColor: "#fdecec",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "orange",
    bgColor: "#f2e1c2",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    color: "darkred",
    bgColor: "#ffa5a5",
    href: "/code",
  },
];

export const MAX_FREE_COUNTS = 5;
