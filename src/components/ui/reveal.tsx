"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  immediate?: boolean;
}) {
  const motionProps = immediate
    ? {
        initial: { opacity: 0, y: 26, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      }
    : {
        initial: { opacity: 0, y: 26, filter: "blur(8px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <motion.div
      {...motionProps}
      transition={{ duration: 0.75, ease: [0.21, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
