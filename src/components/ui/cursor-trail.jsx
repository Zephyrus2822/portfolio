import { useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CursorTrail({ active }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (active) {
      document.body.style.cursor = "none";
      window.addEventListener("mousemove", move);
    } else {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", move);
    }

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "default";
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed top-0 left-0 w-[100px] h-[100px] bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            translateX: smoothX,
            translateY: smoothY,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
        />
      )}
    </AnimatePresence>
  );
}
