"use client";
import { motion, useReducedMotion } from "framer-motion";
const stats = [["2+", "Years of\nExperience"], ["50+", "Projects\nCompleted"], ["20+", "Worldwide\nClients"]];
export function Stats() { const reduceMotion = useReducedMotion(); return <div className="stats">{stats.map(([value, label], index) => <motion.div key={value} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .42, delay: reduceMotion ? 0 : .18 + index * .12, ease: [0.22, 1, 0.36, 1] }}><strong>{value}</strong><span>{label}</span></motion.div>)}</div>; }
