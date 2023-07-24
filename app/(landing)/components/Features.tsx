"use client";

import DesktopFeatures from "./DesktopFeatures";
import MobileFeatures from "./MobileFeatures";

const Features = () => {
  return (
    <section className="px-4 md:px-10 my-8 md:my-10 pb-10 text-slate-200">
      <DesktopFeatures />
      <MobileFeatures />
    </section>
  );
};

export default Features;
