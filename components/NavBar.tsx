"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { MAX_FREE_COUNTS, routes } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

const Navbar = ({
  isPro = false,
  apiLimitCount,
}: {
  isPro: boolean;
  apiLimitCount: number;
}) => {
  const pathname = usePathname();

  return (
    <nav className="mb-14 drop-shadow-xl">
      <div className="navbar bg-slate-900">
        <div className="navbar-start">
          <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
          <Link href={"/dashboard"} className="flex items-center max-lg:ml-2">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="logo" src={"/logo.png"} />
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex text-sm items-center">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-1 text-sm  text-muted-foreground font-semibold hover:text-white hover:bg-slate-800 transition-all btn btn-ghost btm-sm mx-0 px-2 xl:px-4",
                  route.href === pathname && "text-white"
                )}
              >
                <route.icon style={{ color: route.color }} />
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {!isPro && (
            <div className="hidden lg:dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                className="radial-progress mr-3 text-slate-200 my-1 text-xs cursor-pointer"
                style={{
                  // @ts-ignore
                  "--value": (apiLimitCount / MAX_FREE_COUNTS) * 100,
                  "--size": "38px",
                  "--thickness": "3px",
                }}
              >
                {apiLimitCount} / {MAX_FREE_COUNTS}
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] p-0 mt-3 w-72"
              >
                <FreeCounter
                  apiLimitCount={apiLimitCount}
                  isPro={isPro}
                  className="bg-slate-800"
                />
              </div>
            </div>
          )}

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
