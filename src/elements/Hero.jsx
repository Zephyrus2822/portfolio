import {motion} from 'motion/react';
import { ColourfulText } from '../components/ui/colourful-text';
import { VscGithub } from "react-icons/vsc";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <section
      id="home"
      className=" text-center py-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
        Hi! My Name is <ColourfulText text="Rudranil" /> 
      
      </h1>

      <p className="text-gray-500 mb-6 text-base max-w-xl mx-auto px-4">
        Engineer. Builder. Problem solver. I help turn ideas into scalable,
        production-ready software.
      </p>

    <div className="flex justify-center items-center space-x-8 mb-6 text-2xl text-white">
  <a href="https://github.com/Zephyrus2822" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition">
   <i><VscGithub /></i>
  </a>
  <a href="https://discord.gg/vBHcYC3T" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
    <i><BsDiscord /></i>
  </a>
  <a href="https://www.linkedin.com/in/rudranilchowdhury28/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
    <i><AiFillLinkedin /></i>
  </a>
</div>


      <a
        href="#"
        className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-lg transition-all duration-200"
      >
        Write To Me
      </a>
    </section>
  );
}
