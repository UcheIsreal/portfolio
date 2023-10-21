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
    <section id="about" className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8  items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0\ ">
        <Image src="/images/purple-laptop.jpg" width={700} height={700} />
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mb-4 mt-4 sm:mt-0 text-4xl font-bold text-white">
            About Me
          </h2>
          <p className="text-base md:text-lg">
            I am passionate about creating functional, user-friendly and
            visually appealing websites. I am constantly learning and improving
            my skills to stay up to date with the latest industry trends. In
            addition to frontend development, I am also interested in backend
            technologies like Node.js and databases like MongoDB. I enjoy
            working collaboratively with a team to bring ideas to life.
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
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
