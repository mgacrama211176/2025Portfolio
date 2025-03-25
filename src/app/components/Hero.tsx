"use client";
import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import VectorAnimations from "./VectorAnimations";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Parallax speed={-25}>
      <VectorAnimations />

      <div className="h-screen w-full max-w-7xl mx-auto pt-20 -z-10 flex items-center justify-center text-gray-800">
        <div className="text-8xl font-null upercase flex flex-col">
          <h1 className="text-2xl">I AM A</h1>
          <h1 className="leading-none">Full STACK</h1>
          <h1 className="text-4xl leading-none">WEB DEVELOPER</h1>
        </div>

        <div className="relative text-3xl flex flex-col items-center gap-4  p-4 max-w-[473px]">
          <div>
            <Image
              src="/dev.jpg"
              alt="hero"
              width={400}
              height={400}
              className="rounded-full"
            />{" "}
          </div>
          <h1 className="text-center cursor-pointer">
            <span className="font-light hover:font-bold transition-all">
              Creating Modern
            </span>
            ,{" "}
            <span className="font-light hover:font-bold transition-all">
              Scalable
            </span>
            ,{" "}
            <span className="font-light hover:font-bold transition-all">
              Impactful Solutions
            </span>
          </h1>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
