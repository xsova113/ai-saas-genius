"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className="relative text-white font-bold md:py-36 pt-20 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold transition-all">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text pb-8 bg-gradient-to-r from-purple-400 to-pink-600">
          <Typewriter
            options={{
              strings: [
                "Chatbot.",
                "Image Generation.",
                "Music Generation.",
                "Video Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-slate-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="md:text-lg p-4 md:p-6 rounded-full hover:scale-105 font-semibold active:scale-95 transition"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-slate-400 text-xs md:text-sm font-normal">
        No credit required.
      </div>
      <div className="absolute w-64 h-64 rounded-full bg-orange-500/20 blur-3xl md:-top-0 max-md:bg-transparent max-md:top-10 md:right-10" />
      <div className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl md:top-52 max-md:top-40 md:left-60" />
      <div className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl md:-top-10 max-md:-top-20 left-96" />
    </section>
  );
};

export default LandingHero;
