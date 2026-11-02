"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  amount?: number;
};

export function ScrollReveal({ children, className, delay = 0, distance = 20, amount = 0.18 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return <motion.div
    className={className}
    initial={reduceMotion ? false : { opacity: 0, y: distance }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: .48, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}
