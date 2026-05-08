import About from "./portfolio/About";
import Chat from "./portfolio/Chat";
import Contact from "./portfolio/Contact";
import Evolution from "./portfolio/Evolution";
import Experience from "./portfolio/Experience";
import Footer from "./portfolio/Footer";
import Hero from "./portfolio/Hero";
import Loader from "./portfolio/Loader";
import MotionRoot from "./portfolio/MotionRoot";
import Nav from "./portfolio/Nav";
import Stack from "./portfolio/Stack";
import Strengths from "./portfolio/Strengths";
import Work from "./portfolio/Work";

export default function Portfolio() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Work />
        <Experience />
        <Stack />
        <Evolution />
        <Contact />
      </main>
      <Footer />
      <Chat />
      <MotionRoot />
    </>
  );
}
