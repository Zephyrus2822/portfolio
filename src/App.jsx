import { useState } from "react";
import Navbar from "./elements/Navbar";
import Hero from "./elements/Hero";
import Experience from "./elements/Experience";
import CursorTrail from "./components/ui/cursor-trail";
import Projects from "./elements/Projects";
import Footer from "./elements/Footer";

export default function App() {
  const [showTrail, setShowTrail] = useState(false);

  return (
    <div className="App w-full h-full relative">
      <Navbar />
      <Hero />

      <div
        onMouseEnter={() => setShowTrail(true)}
        onMouseLeave={() => setShowTrail(false)}
        className="relative z-10"
      >
        <Experience />
      </div>

      <CursorTrail active={showTrail} />
      <Projects />

      <Footer />
    </div>
  );
}
