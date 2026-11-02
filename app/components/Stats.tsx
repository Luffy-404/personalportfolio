"use client";
import { motion } from "framer-motion";
const stats = [["2+", "Years of\nExperience"], ["50+", "Projects\nCompleted"], ["20+", "Worldwide\nClients"]];
export function Stats() { return <div className="stats">{stats.map(([value, label], index) => <motion.div key={value} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}><strong>{value}</strong><span>{label}</span></motion.div>)}</div>; }
