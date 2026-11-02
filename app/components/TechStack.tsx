"use client";

import { motion, useReducedMotion } from "framer-motion";
import { technologies } from "../data/tech-stack";

export function TechStack() {
  const reduceMotion = useReducedMotion();
  return <section className="tech-stack" aria-labelledby="tech-stack-title">
    <div className="tech-atmosphere" aria-hidden="true" />
    <div className="tech-content">
      <motion.p className="tech-kicker" initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}>Tools I Use to Build</motion.p>
      <motion.h2 id="tech-stack-title" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .48, delay: reduceMotion ? 0 : .08, ease: [0.22, 1, 0.36, 1] }}>Tech Stack</motion.h2>
      <motion.p className="tech-summary" initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .42, delay: reduceMotion ? 0 : .15, ease: [0.22, 1, 0.36, 1] }}>I build modern, scalable web applications with clean architecture, thoughtful interfaces, and reliable backend systems.</motion.p>
      <div className="tech-constellation" role="list" aria-label="Technology stack">
        {technologies.map(({ name, group, icon: Icon, color }, index) => <motion.div key={name} className={`tech-tile tech-${group.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`} role="listitem" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .35, delay: reduceMotion ? 0 : Math.min(index * .035, .45) }}>
          <Icon aria-hidden="true" style={{ color }} /><span>{name}</span>
        </motion.div>)}
      </div>
    </div>
  </section>;
}
