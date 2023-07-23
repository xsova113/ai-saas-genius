"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { routes } from "../constants";
import { usePathname } from "next/navigation";
import MobileNavbar from "./mobile-navbar";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="navbar bg-transparent text-white">
          <div className="navbar-start">
            <MobileNavbar />
            <Link href={"/"} className="flex items-center">
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
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-x-10">
              {routes.map((route) => (
                <li
                  key={route.pathname}
                  className={cn(
                    "text-slate-300 font-semibold text-base hover:text-white hover:-translate-y-1 transition",
                    route.pathname === pathname && "text-white"
                  )}
                >
                  <Link href={route.pathname}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                variant={"outline"}
                className="rounded-full text-slate-800 active:scale-95 transition"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LandingNavbar;
