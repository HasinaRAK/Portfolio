"use client";
import Image from "next/image";
import _Header from "./_components/header";
import _Accueil from "./_components/accueil";
import _Apropos from "./_components/apropos";
import _MySkils from "./_components/my-skills";
// import _ProjectTabs from "./_components/project";
import _ProjectTabs from "./_components/project_tabs";
import _Contact from "./_components/contact";
import _Contact_flottant from "./_components/contact_flottant";
import { useState } from "react";

export default function Home() {
  const sections = [
    _Accueil,
    _Apropos,
    _MySkils,
    _ProjectTabs,
    _Contact_flottant,
  ];
  const [page, setPage] = useState(0);
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((_, i) => (
          <button
            key={i}
            hidden
            onClick={() => setPage(i)}
            aria-label={`Aller à la section ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              page === i ? "scale-125" : ""
            } bg-gray-400`}
          />
        ))}
      </aside>

      {/* Conteneur qui se translate */}
      <div
        className="h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${page * 100}vh)` }}
      >
        {sections.map((SectionComponent, idx) => (
          <section key={idx} className="h-screen w-full">
            <SectionComponent />
          </section>
        ))}
      </div>
    </div>
    // <main className="overflow-hidden">
    //   {/* <_Header /> */}
    //   <_Accueil />
    //   <_Apropos />
    //   <_MySkils />
    //   <_ProjectTabs />
    //   <_Contact_flottant />
    //   {/* <_ProjectTabs /> */}
    //   {/* <_Contact /> */}
    // </main>
  );
}
