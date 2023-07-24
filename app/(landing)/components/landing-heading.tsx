import React from "react";

interface LandingHeadingProps {
  title: string;
  subtitle: string;
  paragraph?: string;
  className?: string;
}

const LandingHeading = ({
  title,
  subtitle,
  paragraph,
  className,
}: LandingHeadingProps) => {
  return (
    <div className={className}>
      <h1 className="font-bold md:text-5xl text-3xl mb-8 text-white">
        {title}
      </h1>
      <h3 className="mb-12 leading-relaxed">{subtitle}</h3>
      <p className="w-2/3 leading-relaxed mx-auto">{paragraph}</p>
    </div>
  );
};

export default LandingHeading;
