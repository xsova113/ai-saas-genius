"use client";

import { routes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

const Sidebar = ({
  apiLimitCount,
  isPro = false,
  setIsOpen,
}: {
  apiLimitCount: number;
  isPro: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={"/logo.png"} />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                route.href === pathname ? "bg-white/10" : "text-zinc-400"
              )}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn("h-5 w-5 mr-3", route.color)}
                  style={{ color: route.color }}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
