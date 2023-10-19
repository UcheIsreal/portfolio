"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "NextJS Dashboard Demo",
    description: "Dashboard built with NextJS/TailwindCSS",
    image: "/images/projects/DashboardDemo.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "WordPress Website",
    description: "Website built with WordPress/Divi",
    image: "/images/projects/bostonrealtyinstitute.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Homesmart Website Clone",
    description: "Web clone built with TailwindCSS",
    image: "/images/projects/homesmartfullpage.png",
    tag: ["All", "Clones",],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Weather App Built with Javascript and Axios API",
    image: "/images/projects/weatherapp.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Incept Website",
    description: "Group website project built with TailwindCSS",
    image: "/images/projects/incept.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <>
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb-8 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row items-center justify-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Clones"
          isSelected={tag === "Clones"}
        />
      </div>
      <div className=" grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
