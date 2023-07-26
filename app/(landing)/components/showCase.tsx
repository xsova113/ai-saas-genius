"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const images = ["/conversation.png", "/image.png", "/video.png", "/code.png"];

const Showcase = () => {
  const { isSignedIn } = useAuth();
  const element = useRef<HTMLDivElement>(null);

  const onRightClick = () => {
    element.current?.scrollBy({ behavior: "smooth", left: 200 });
  };

  const onLeftClick = () => {
    element.current?.scrollBy({ behavior: "smooth", left: -200 });
  };

  return (
    <Parallax
      speed={20}
      className="flex flex-col md:px-14 px-8 bg-gradient-to-r from-blue-800 to-emerald-800 mt-24 md:mt-32 items-center"
    >
      <div
        ref={element}
        className="relative gap-4 w-full carousel carousel-center transition-all md:bottom-32 bottom-8 py-24 md:py-36 rounded-xl"
      >
        {images.map((image, index) => (
          <Parallax speed={-15} key={image}>
            <div
              id={index.toString()}
              className="relative w-full md:h-[600px] h-[330px] carousel-item aspect-square"
            >
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
      <button
        className={cn("btn btn-circle absolute top-1/3 right-5 opacity-80")}
        onClick={onRightClick}
      >
        <ChevronRight />
      </button>
      <button
        className={cn("btn btn-circle absolute top-1/3 left-5 opacity-80")}
        onClick={onLeftClick}
      >
        <ChevronLeft />
      </button>
      <Link
        href={isSignedIn ? "/dashboard" : "/sign-up"}
        className="relative bottom-6 md:bottom-24"
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
