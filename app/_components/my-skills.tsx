"use client";
import React, { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const skills = [
  { name: "ReactJS", tech: "front-end", logo: "/icons/react.svg" },
  {
    name: "React Native",
    tech: "front-end",
    logo: "/icons/create-react-app.svg",
  },
  { name: "NextJS", tech: "front-end", logo: "/icons/nextjs-icon.svg" },
  { name: "TailwindCSS", tech: "front-end", logo: "/icons/tailwindcss.svg" },
  { name: "NodeJS", tech: "back-end", logo: "/icons/nodejs.svg" },
  { name: "Django", tech: "back-end", logo: "/icons/django-icon.svg" },
  { name: "Laravel", tech: "back-end", logo: "/icons/laravel.svg" },
  { name: "Postgres", tech: "Base de données", logo: "/icons/postgresql.svg" },
  { name: "MongoDB", tech: "Base de données", logo: "/icons/mongodb.svg" },
  { name: "MySQL", tech: "Base de données", logo: "/icons/mysql.svg" },
];

const typeTech = ["front-end", "back-end", "Base de données"];
const groupByTech = (tech: string) => {
  return skills.filter((skill) => skill.tech === tech);
};
// console.log(groupByTech("front-end"));
const _MySkills = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  // Animation de transition de page
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    });

    return () => ctx.revert(); // Nettoyage de GSAP
  }, []);
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      duration: 0.3,
      ease: "power3.out",
    });
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return (
    <div className="relative w-full h-screen overflow-hidden" id="skills">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video_animate/bg_skills.mp4"
        autoPlay
        loop
        muted
      ></video>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative p-6 h-full flex flex-col justify-center gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Compétences
        </h1>
        <div className="flex flex-row gap-4 justify-evenly">
          {typeTech.map((tech) => (
            <div key={tech} className="mb-8 gap-4">
              <h2 className="text-xl font-semibold text-white dark:text-gray-300 mb-4 text-center">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </h2>
              {groupByTech(tech)
                .reduce((rows, skill, index) => {
                  if (index % 4 === 0) rows.push([]);
                  rows[rows.length - 1].push(skill);
                  return rows;
                }, [] as Array<Array<(typeof skills)[0]>>)
                .map((group, groupindex) => (
                  <div
                    key={groupindex}
                    className="grid grid-cols-2 grid-rows-2 gap-4"
                  >
                    {group.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-30 items-center justify-center p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="w-16 h-16">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default _MySkills;
