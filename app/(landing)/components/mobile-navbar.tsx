"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "../constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <SheetTrigger>
        <label className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-slate-800">
        <SheetHeader>
          <Link
            href={"/"}
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative h-8 w-8 mr-4">
              <Image src={"/logo.png"} alt={"logo"} fill />
            </div>
            <h1
              className={cn(
                "text-2xl font-bold text-white",
                montserrat.className
              )}
            >
              Genius
            </h1>
          </Link>
        </SheetHeader>
        <ul className="flex flex-col gap-y-6 mt-14">
          {routes.map((route) => (
            <li
              key={route.pathname}
              className={cn(
                "text-slate-200 font-semibold hover:text-slate-400 hover:scale-105 transition",
                route.pathname === pathname && "text-white"
              )}
            >
              <Link href={route.pathname} onClick={() => setIsOpen(false)}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
