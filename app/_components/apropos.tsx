"use client";
import React, { useEffect, useRef } from "react";
import _CardAbout from "./card-about";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const _Apropos = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   if (cardsRef.current) {
  //     const validRefs = cardsRef.current.filter((el) => el !== null);
  //     gsap.from(validRefs, {
  //       x: -100,
  //       duration: 0.8,
  //       opacity: 0,
  //       stagger: 1,
  //       ease: "power2.out",
  //     });
  //   }
  // }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation GSAP lorsque la carte entre dans la vue
            gsap.fromTo(
              cardsRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
              }
            );
            // observer.unobserve(entry.target); // Arrête d'observer après l'animation
          }
        });
      },
      { threshold: 0.4 } // Déclenche l'animation lorsque 20% de la carte est visible
    );

    // Observer chaque carte
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Nettoyage de l'observer
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video_animate/bg_apropos.mp4"
        autoPlay
        loop
        muted
      ></video>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="relative p-6 h-full flex flex-col gap-6 justify-center items-center"
        transition={{ duration: 0.6 }}
        id="apropos"
      >
        <h1 className="text-3xl font-bold text-center text-white dark:text-white mb-8">
          À propos de moi
        </h1>
        <div className="flex md:flex-row gap-6">
          {/* Formation */}
          <div ref={(el) => el && (cardsRef.current[0] = el)}>
            <_CardAbout
              title="Ma Formation"
              description="J'ai suivi une formation approfondie en informatique et en
            ingénierie des systèmes, avec un accent sur les technologies
            modernes et les meilleures pratiques."
            />
          </div>

          {/* Expérience */}
          <div ref={(el) => (cardsRef.current[1] = el!)}>
            <_CardAbout
              title="Mon Expérience"
              description="J'ai travaillé sur divers projets, allant du développement
            d'applications web à la gestion de systèmes complexes, en
            collaborant avec des équipes multidisciplinaires."
            />
          </div>

          {/* Objectif */}
          <div ref={(el) => (cardsRef.current[2] = el!)}>
            <_CardAbout
              title="Mon Objectif"
              description="Mon but est de continuer à apprendre et à innover, tout en
            contribuant à des projets qui ont un impact positif dans le domaine
            de l'informatique et de l'ingénierie des systèmes."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default _Apropos;

{
  /* <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Ma Formation</h2>
          <p>
            J'ai suivi une formation approfondie en informatique et en
            ingénierie des systèmes, avec un accent sur les technologies
            modernes et les meilleures pratiques.
          </p>
        </div> */
}
