import React from "react";
import LandingNavbar from "./components/landing-navbar";
import LandingFooter from "./components/landing-footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <LandingNavbar />
        {children}
        <LandingFooter />
      </div>
    </main>
  );
};

export default LandingLayout;
