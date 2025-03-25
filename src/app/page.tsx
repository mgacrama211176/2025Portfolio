"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
      </main>
    </div>
  );
}
