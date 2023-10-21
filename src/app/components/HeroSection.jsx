"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-slate-400 to-pink-600">
              Hello, I&apos;m Uche
            </span>{" "}
            <div className="flex items-center">
              <div className="sm:text-xs text-[8px] mx-auto sm:mx-0 flex items-center justify-center mt-2">
                <TypeAnimation
                  sequence={[
                    "I'm a Front-End Web Developer",
                    1000,
                    "I'm an aspiring FullStack software developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </h1>
          <p className="text-[#adb7be] text-base lg:text-xl  mb-6 sm:text-lg ">
            My goal is to become one of the best developers in the world for
            real with skills in both frontend and backend development.
          </p>
          <div className="flex flex-col sm:flex-row">
            <button className="  px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500   hover:bg-slate-200 text-white">
              <a href="https://wa.me/+2348164277071" target="blank">
                Hire Me
              </a>
            </button>
            <button className="px-1 py-1 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800 text-white  mt-3 sm:mt-0">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 sm:mt-0 ">
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/portfolio-image2.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 "
              width={300}
              alt="Portfolio image"
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
