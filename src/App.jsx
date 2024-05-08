"use client";
import { useState } from "react";
import styles from "./App.module.scss";
import useMousePosition from "./hooks/useMousePosition";
import { motion } from "framer-motion";

function App() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const maskSize = isHovered ? 400 : 40; // use this to center the mask image for the cursor and change the size on mouse event
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <motion.div className={styles.body}>
        <p>
          I'm a <span>selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience.
        </p>
      </motion.div>
    </main>
  );
}

export default App;
