"use client"; // useStateを使うため

import { useState } from "react";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion"; // motionを削除

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact size={40} /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} /> },
      { name: "TypeScript", icon: <SiTypescript size={40} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs size={40} /> },
      { name: "Python", icon: <SiPython size={40} /> },
      { name: "Django", icon: <SiDjango size={40} /> },
    ],
  },
  {
    category: "Infrastructure & Others",
    items: [
      { name: "Docker", icon: <FaDocker size={40} /> },
      { name: "AWS", icon: <FaAws size={40} /> },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">スキル</h2>
        <div className="flex justify-center border-b border-slate-700 mb-8">
          {skills.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(category.category)}
              className={`px-6 py-3 text-lg font-semibold transition-colors relative ${
                activeTab === category.category
                  ? "text-sky-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {category.category}
              {activeTab === category.category && (
                <motion.div
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-sky-400"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-12 py-8"
          >
            {skills
              .find((cat) => cat.category === activeTab)
              ?.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="text-slate-300 ">{skill.icon}</div>
                  <p className="font-semibold text-slate-300">{skill.name}</p>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Skills;
