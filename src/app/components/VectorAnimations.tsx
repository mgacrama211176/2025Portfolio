"use client";

import React, { useState, useEffect } from "react";

const VectorAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute bg-gray-800/30 rounded-full w-[300px] h-[300px] blur-[80px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 150}px, ${
            mousePosition.y - 150
          }px)`,
          willChange: "transform",
        }}
      />
      <div
        className="absolute bg-gray-800/30 rounded-full w-[200px] h-[200px] blur-[60px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 100}px, ${
            mousePosition.y - 100
          }px)`,
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default VectorAnimations;
