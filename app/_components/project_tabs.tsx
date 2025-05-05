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
import { useState } from "react";

type project = {
  id: number;
  name: string;
  category: string;
  description: string;
  codeSrc?: string;
  videoSrc?: string;
};

const projects: project[] = [
  {
    id: 1,
    name: "Mon Portfolio",
    category: "Web",
    description: "Mon portfolio personnel pour présenter mes projets",
    codeSrc: "https://github.com/HasinaRAK/Portfolio.git",
    videoSrc: "/video_demo/demo-portfolio.mp4",
  },
  {
    id: 2,
    name: "Atero livraison",
    category: "Mobile",
    description: "Application de livraison pour Atero",
  },
  {
    id: 3,
    name: "R&C Royal Design",
    category: "Web",
    description: "Site e-commerce pour R&C Royal Design",
  },
];

const categories = ["Tous", "Web", "Mobile"];

export default function _ProjectTabs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleOpenModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const filteredProjects = (category: string) => {
    return category === "Tous"
      ? projects
      : projects.filter((project) => project.category === category);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden" id="projets">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video_animate/bg_project.mp4"
        autoPlay
        loop
        muted
      ></video>
      <motion.div
        className="relative p-6 h-full flex flex-col justify-center gap-6"
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
                className="w-full md:w-auto md:mr-2 text-center text-white aria-selected:text-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
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
                        <Button variant="outline">
                          <a
                            href={project.codeSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Voir le code
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() =>
                            handleOpenModal(project.videoSrc || "")
                          }
                        >
                          Voir un démo
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white rounded-lg p-4 shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              className="w-full max-w-3xl rounded"
            ></video>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleCloseModal}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
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
