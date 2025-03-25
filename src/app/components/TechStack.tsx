import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { technologies } from "./data";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <Parallax speed={-25}>
      <div className="min-h-[80rem] h-full w-full mx-auto pb-56 z-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-7xl ">
          <h1 className="text-7xl font-null uppercase leading-14 text-gray-800 py-10">
            My Tech Stack
          </h1>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="text-gray-800 text-left max-w-3xl font-light flex flex-col gap-2">
              <h1>
                Over the years, I've mastered a comprehensive suite of modern
                web technologies, constantly expanding my expertise to stay at
                the cutting edge of development. While my toolkit spans across
                the full stack, my core specialization centers around:{" "}
                <span className="hover:font-bold transition-all underline hover:cursor-pointer hover:text-xl">
                  React
                </span>{" "}
                for building dynamic user interfaces,{" "}
                <span className="hover:font-bold transition-all underline hover:cursor-pointer hover:text-xl">
                  NEXTJS
                </span>{" "}
                for performance-optimized applications,{" "}
                <span className="hover:font-bold transition-all underline hover:cursor-pointer hover:text-xl">
                  TypeScript
                </span>{" "}
                for type-safe, maintainable code,{" "}
                <span className="hover:font-bold transition-all underline hover:cursor-pointer hover:text-xl">
                  NodeJS
                </span>{" "}
                for scalable backend solutions, and{" "}
                <span className="hover:font-bold transition-all underline hover:cursor-pointer hover:text-xl">
                  TailwindCSS
                </span>{" "}
                for creating pixel-perfect, responsive designs.
              </h1>

              <h1>
                This powerful combination enables me to deliver exceptional
                full-stack solutions that are not only technically robust but
                also provide exceptional user experiences.
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 py-10 max-w-4xl">
            {technologies.map((stack, index) => (
              <div
                key={index}
                className="hover:scale-125 transition-all duration-200"
              >
                <Image
                  src={stack.image}
                  alt={stack.name}
                  width={75}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default TechStack;
