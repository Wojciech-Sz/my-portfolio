"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import { myProjects } from "@/constants";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useProgress } from "@react-three/drei";
import CanvasLoader from "@/components/scenes/CanvasLoader";
import DemoComputer from "@/components/models/DemoComputer";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const projectsCount = myProjects.length;

  const handleNavigation = (direction: "next" | "prev") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
      }
    });
  };
  return (
    <section id={"projects"} className={"c-space py-20"}>
      <p className={"head-text"}></p>
      <div className={"w-full grid lg:grid-cols-2 mt-12 gap-5 grid-cols-1"}>
        <div
          className={
            "flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"
          }
        >
          <div className={"absolute top-0 right-0"}>
            <Image
              src={currentProject.spotlight}
              alt={"spotlight"}
              width={1000}
              height={1000}
              className={"w-full h-96 object-cover rounded-xl"}
            />
          </div>

          <div
            className={"p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"}
            style={currentProject.logoStyle}
          >
            <Image
              src={currentProject.logo}
              alt={"logo"}
              width={70}
              height={70}
              className={"size-10 shadow-sm"}
            />
          </div>

          <div className={"flex flex-col gap-5 text-white-600 my-5"}>
            <p className={"text-white text-2xl font-semibold animatedText"}>
              {currentProject.title}
            </p>
            <p className={"animatedText"}>{currentProject.desc}</p>
            <p className={"animatedText"}>{currentProject.subdesc}</p>
          </div>

          <div className={"flex items-center justify-between flex-wrap gap-5"}>
            <div className={"flex items-center gap-3"}>
              {currentProject.tags.map((tag, i) => (
                <div key={i} className={"tech-logo"}>
                  {
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={36}
                      height={32}
                    />
                  }
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target={"_blank"}
              rel={"noreferrer"}
              className={
                "flex items-center gap-2 cursor-pointer text-white-600"
              }
            >
              <p>Check Live Site</p>
              <ArrowUpRight size={25} color={"orange"} />
            </a>
          </div>

          <div className={"flex justify-between items-center mt-7"}>
            <button
              className={"arrow-btn"}
              onClick={() => handleNavigation("prev")}
            >
              <ArrowLeft size={20} color={"white"} />
            </button>
            <button
              className={"arrow-btn"}
              onClick={() => handleNavigation("next")}
            >
              <ArrowRight size={20} color={"white"} />
            </button>
          </div>
        </div>

        <div
          className={
            "border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"
          }
        >
          <Canvas className={"size-full"} style={{ minHeight: "300px" }}>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
export default Projects;
