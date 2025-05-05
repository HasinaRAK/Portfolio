"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    category: "Web",
    description: "A portfolio website to showcase my work",
  },
  {
    id: 2,
    name: "Atero livraison",
    category: "Mobile",
    description: "A mobile app for delivery services",
  },
  {
    id: 3,
    name: "R&C Royal Design",
    category: "Web",
    description: "A web application for a design company",
  },
];

const categories = ["Tous", "Web", "Mobile"];

export default function _ProjectTabs() {
  // const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = (category: string) => {
    return category === "Tous"
      ? projects
      : projects.filter((project) => project.category === category);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video_animate/bg_project.mp4"
        autoPlay
        loop
        muted
      ></video>
      <motion.div
        id="projets"
        className="relative z-10 p-6 h-full flex flex-col justify-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-white">
          Mes Projets
        </h1>
        <Tabs defaultValue="Tous" className="w-full">
          <TabsList className="flex w-full md:flex-row  md:justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="w-full md:w-auto md:mr-2 text-center text-white sele:text-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent value={category} className="mt-4" key={category}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects(category).map((project) => (
                  <div key={project.id} className="w-full">
                    <Card className="w-full bg-white dark:text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.category}</CardDescription>
                      </CardHeader>
                      <CardContent>{project.description}</CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">View Code</Button>
                        <Button variant="outline">View Demo</Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
}

{
  /* Example tabs */
}
{
  /* <TabsTrigger value="all">Tous</TabsTrigger>
        <TabsTrigger value="web">Web</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger> */
}
{
  /* <Card className="w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>Project Description</CardDescription>
            </CardHeader>
            <CardContent>Project Content</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Code</Button>
              <Button variant="outline">View Demo</Button>
            </CardFooter>
          </Card> */
}
{
  /* /* Example project card * projects.map((project) => (
            <div key={project.id} className="w-full">
              <Card className="w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent>Project Content</CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button variant="outline">View Demo</Button>
                </CardFooter>
              </Card>
            </div>
          ))
        }
      </div> */
}
