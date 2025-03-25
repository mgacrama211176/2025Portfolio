import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen w-full mx-auto pt-20 z-0 flex flex-col items-center justify-center bg-gray-800">
      <div className="flex flex-col items-center justify-center max-w-7xl ">
        <h1 className="text-7xl font-null uppercase leading-14 text-white py-10">
          About the dev
        </h1>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex items-center justify-between gap-10">
            <div className="w-full rounded-full overflow-hidden">
              <Image
                src="/About.jpg"
                alt="profile"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-justify max-w-2xl font-light">
              <h1>
                Hello! I'm Marlon Gacrama Jr., a passionate full stack web
                developer from the Philippines. I've been immersed in the world
                of web development since my third year of college, focusing on
                development as a one-man team on many projects. My journey—from
                freelancing to joining digital marketing agencies—has been
                marked by a constant drive to learn, innovate, and deliver
                exceptional results.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
