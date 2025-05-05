"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import banner from "../../public/images/banner.jpg";
import { motion } from "framer-motion";

gsap.registerPlugin(SplitText);

export default function _Accueil() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: "words,chars" });

      gsap.from(split.chars, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.05,
        ease: "power2.out",
      });

      // Cleanup to avoid memory leaks
      return () => split.revert();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      id="accueil"
    >
      <main
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center min-h-screen bg-cover bg-center h-full"
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h1
            ref={textRef}
            className="text-4xl font-bold text-white text-center"
          >
            Je suis Hasina RAKOTOARISOA, Bienvenue sur mon Portfolio
          </h1>
          <p className="mt-4 text-2xl text-green-600 text-center">
            Un développeur passionné par la technologie.
          </p>
        </div>
      </main>
    </motion.div>
  );
}
