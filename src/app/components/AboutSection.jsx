"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>NextJS</li>
        <li>TailwindCSS</li>
        <li>Javascript</li>
        <li>ReactJS</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>WordPress</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>LearnFactory</li>
        <li>Nupat Technologies</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Ebonyi State University</li>
        <li>LearnFactory</li>
        <li>SkillShare</li>
        <li>Forage Internship</li>
      </ul>
    )
  },

]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8  items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0\ ">
        <Image src="/images/purple-laptop.jpg" width={700} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mb-4 mt-4 sm:mt-0 text-4xl font-bold text-white">
            About Me
          </h2>
          <p className="text-base md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi iure
            non possimus assumenda nihil eveniet aspernatur quia vel iusto
            similique! 
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id ===tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
