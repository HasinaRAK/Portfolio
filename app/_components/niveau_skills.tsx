import { Progress } from "@/components/ui/progress";
type SkillBarProps = {
  level: number; // 0 à 100
};

export function Niveau_skills({ level }: SkillBarProps) {
  const label =
    level > 80 ? "Expert" : level > 50 ? "Intermédiaire" : "Débutant";
  return (
    <div className="flex items-center gap-4">
      <Progress className="h-2 w-35" value={level} max={100} />
      <span className="w-8 text-right">{level}%</span>
      {/* <span className="w-32">({label})</span> */}
    </div>
  );
}
