"use client";

import React from "react";
import LandingNavbar from "./components/landing-navbar";
import LandingFooter from "./components/landing-footer";
import { ParallaxProvider } from "react-scroll-parallax";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ParallaxProvider>
      <main className="min-h-screen bg-slate-900 overflow-clip">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          <LandingNavbar />
          {children}
          <LandingFooter />
        </div>
      </main>
    </ParallaxProvider>
  );
};

export default LandingLayout;
