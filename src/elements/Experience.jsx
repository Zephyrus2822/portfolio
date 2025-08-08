import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";
import CursorTrail from '../components/ui/cursor-trail';
import { AnimatePresence } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";

export default function Experience() {
  const [showTrail, setShowTrail] = useState(false);

  return (
    <section
      id="experience"
      className="py-17 px-6 bg-black text-white cursor-none"
      onMouseEnter={() => setShowTrail(true)}
      onMouseLeave={() => setShowTrail(false)}
    >
      <AnimatePresence>{showTrail && <CursorTrail />}</AnimatePresence>

      <h2 className="block text-5xl mt-0 font-bold mb-12 text-center">Experience</h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative border border-white/10 rounded-lg p-6 shadow-lg backdrop-blur-md hover:shadow-white/10 hover:border-white/20"
          >
            {/* Glowing effect on hover */}
            <GlowingEffect
              spread={20}
              glow={true}
              disabled={false}
              proximity={32}
              inactiveZone={0.01}
            />

            <p className="text-lg font-semibold mb-2 text-gray-400">{job.date}</p>
            <h3 className="block text-3xl font-semibold">{job.role}</h3>
            <p className="text-lg text-gray-400">{job.company}</p>

            <ul className="text-lg mt-4 space-y-2 list-disc list-inside">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {job.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((tag, i) => (
                  <span
  key={i}
  className="bg-white/10 px-3 py-1 border border-white rounded-full text-lg"
>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
