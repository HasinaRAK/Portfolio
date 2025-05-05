import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiPython } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { log } from "console";
import { Niveau_skills } from "./niveau_skills";

type techitem = {
  title: string;
  icon: IconType;
  niveau?: number; // 0 à 100
};

type skillitem = {
  items: techitem[];
  header: string;
};

export function SkillTechnoLang({ items, header }: skillitem) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-ms hover:no-underline">
          {/* Langage de programmation */}
          {header}
          {/* <span className="text-xs text-muted-foreground">
            {" "}
            (Cliquer pour voir)
          </span> */}
        </AccordionTrigger>
        <AccordionContent className="text-sm text-muted-foreground">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <item.icon size={16} className="text-foreground" />
                  <span>{item.title}</span>
                </div>
                <Niveau_skills level={item.niveau || 0} />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
