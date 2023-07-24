"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

const images = ["/conversation.png", "/image.png", "/video.png", "/code.png"];

const Showcase = () => {
  const { isSignedIn } = useAuth();

  return (
    <Parallax
      speed={20}
      className="flex flex-col md:px-14 px-8 bg-gradient-to-r from-violet-300 to-emerald-300 mt-32 items-center"
    >
      <div className="relative gap-4 w-full carousel carousel-center transition-all bottom-32 py-32 rounded-xl">
        {images.map((image) => (
          <Parallax speed={-15} key={image}>
            <div className="relative w-full h-[600px] carousel-item aspect-square">
              <Image
                src={image}
                alt={"image"}
                fill
                className="rounded-xl drop-shadow-lg"
              />
            </div>
          </Parallax>
        ))}
      </div>
      <Link
        href={isSignedIn ? "/dashboard" : "/sign-up"}
        className="relative bottom-24"
      >
        <Button
          variant={"premium"}
          className="md:text-lg p-4 md:p-6 rounded-full hover:scale-105 font-semibold active:scale-95 transition"
        >
          Start Generating For Free
        </Button>
      </Link>
    </Parallax>
  );
};

export default Showcase;
