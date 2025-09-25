"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  AlignJustify,
  WandSparklesIcon,
  BookMarkedIcon,
  Contact2Icon,
  Sun,
  Moon,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
//import Link from "next/link";
import dynamic from "next/dynamic";
//import { Link as ScrollLink } from "react-scroll";
import ProfilePhoto from "./hero-forms";
import { SkillTechnoLang } from "./skill-techno-lang";
import {
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiPhpFill,
} from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiPython,
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
} from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import _Contact from "./contact";
import { useEffect, useState } from "react";
import _DrawerContact from "./drawer_contact";

// import { IconType } from "react-icons/lib";
// type techitem = {
//   title: string;
//   icon: IconType;
// };

// type skillitem = {
//   items: techitem[];
// };

const itemsMenu = [
  {
    title: "Accueil",
    url: "#accueil",
    icon: Home,
  },
  {
    title: "A propos",
    url: "#apropos",
    icon: AlignJustify,
  },
  {
    title: "Compétences",
    url: "#skills",
    icon: WandSparklesIcon,
  },
  {
    title: "Projets",
    url: "#projets",
    icon: BookMarkedIcon,
  },
  {
    title: "Contacts",
    url: "#contact",
    icon: Contact2Icon,
  },
];

const skillLanguages = [
  {
    title: "JavaScript",
    icon: RiJavascriptFill,
    niveau: 70,
  },
  {
    title: "PHP",
    icon: RiPhpFill,
    niveau: 70,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    niveau: 30,
  },
  {
    title: "Python",
    icon: SiPython,
    niveau: 60,
  },
];

const skillFrameworks = [
  {
    title: "ReactJS",
    icon: RiReactjsFill,
    niveau: 70,
  },
  {
    title: "React Native",
    icon: TbBrandReactNative,
    niveau: 70,
  },
  {
    title: "NextJS",
    icon: RiNextjsFill,
    niveau: 50,
  },
  {
    title: "Django",
    icon: SiDjango,
    niveau: 50,
  },
  {
    title: "Node.JS",
    icon: SiNodedotjs,
    niveau: 50,
  },
  {
    title: "Laravel",
    icon: SiLaravel,
    niveau: 50,
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
    niveau: 40,
  },
];

const skillDatabase = [
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    niveau: 40,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    niveau: 10,
  },
  {
    title: "MySQL",
    icon: GrMysql,
    niveau: 50,
  },
];

const langues = [
  {
    title: "Malagasy",
    icon: "mg",
    niveau: 100,
  },
  {
    title: "Français",
    icon: "fr",
    niveau: 70,
  },
  {
    title: "Anglais",
    icon: "en",
    niveau: 50,
  },
];

const ScrollLink = dynamic(
  () => import("react-scroll").then((mod) => mod.Link),
  {
    ssr: false,
  }
);
export function AppSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // État pour contrôler l'ouverture du Drawer
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour le mode sombre
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // État pour la Sidebar réduite
  // Appliquer ou retirer la classe "dark" sur le <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);
  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);
  return (
    <>
      <Sidebar variant="inset" className={isSidebarCollapsed ? "w-16" : "w-64"}>
        <SidebarContent>
          <SidebarGroup>
            <SidebarHeader className="items-center mb-5">
              <ProfilePhoto alt="profil pic" />
              <h3 className="text-foreground text-sm">
                {isSidebarCollapsed ? "HE" : "Hasina Eric RAKOTOARISOA"}
              </h3>
              <h4 className="text-xs">
                {isSidebarCollapsed ? "" : "[Développeur web fullstack]"}
              </h4>
            </SidebarHeader>
            {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {itemsMenu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      {item.title === "Contacts" ? (
                        <button
                          onClick={handleDrawerOpen} // Ouvre le Drawer
                          className="flex items-center gap-2"
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </button>
                      ) : (
                        <Link
                          href={item.url}
                          className="flex items-center gap-2"
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SkillTechnoLang
                    items={skillLanguages}
                    header="Langage de programmation"
                  />
                  <SkillTechnoLang
                    items={skillFrameworks}
                    header="Frameworks et bibliothèques"
                  />
                  <SkillTechnoLang
                    items={skillDatabase}
                    header="Base de données"
                  />
                  <SkillTechnoLang items={langues} header="Langues parlées" />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          {/* Bouton pour activer/désactiver le mode sombre */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            {isDarkMode ? "Mode clair" : "Mode sombre"}
          </Button>
        </SidebarFooter>
      </Sidebar>
      {/* Bouton flottant pour le contact */}
      {isSidebarCollapsed && (
        <Button
          variant="default"
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2"
          onClick={handleDrawerOpen}
        >
          <Contact2Icon className="w-4 h-4" />
          Contactez-moi
        </Button>
      )}
      {/* Drawer pour le contact */}
      <_DrawerContact
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <div className="p-4">
            <_Contact />
          </div>
          <DrawerFooter>
            <Button variant="outline" onClick={handleDrawerClose}>
              Fermer
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </>
  );
}

// {itemsMenu.map((item) => (
//   <SidebarMenuItem key={item.title}>
//     <SidebarMenuButton asChild>
//       if (item.title === "contact"){" "}
//       {
//         <Drawer>
//           <DrawerTrigger>{item.title}</DrawerTrigger>
//           <DrawerContent>
//             <DrawerHeader>
//               <DrawerTitle>Contactez-moi</DrawerTitle>
//             </DrawerHeader>
//             <DrawerFooter>
//               <_Contact />
//               <DrawerClose>
//                 <Button variant="outline">Cancel</Button>
//               </DrawerClose>
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       }
//       else
//       {
//         <Link href={item.url}>
//           <item.icon />
//           <span>{item.title}</span>
//         </Link>
//       }
//     </SidebarMenuButton>
//   </SidebarMenuItem>
// ))}
