"use client";

import { Center, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { Suspense, useState } from "react";

import DemoComputer from "@/components/models/DemoComputer";
import CanvasLoader from "@/components/scenes/CanvasLoader";
import { myProjects } from "@/constants";

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
    <section id="projects" className="c-space py-20">
      <h2 className="head-text">A small selection of recent projects</h2>
      <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div
          className={
            "relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-card sm:p-10"
          }
        >
          <div className="absolute right-0 top-0">
            <Image
              src={currentProject.spotlight}
              alt="spotlight"
              width={1000}
              height={1000}
              className="h-96 w-full rounded-xl object-cover"
            />
          </div>

          <div
            className="w-fit rounded-lg p-3 backdrop-blur-3xl"
            style={currentProject.logoStyle}
          >
            <Image
              src={currentProject.logo}
              alt="logo"
              width={70}
              height={70}
              className="size-10 shadow-sm"
            />
          </div>

          <div className="my-5 flex flex-col gap-5 text-card-foreground">
            <p className="text-2xl font-semibold text-foreground">
              {currentProject.title}
            </p>
            <p>{currentProject.desc}</p>
            <p>{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, i) => (
                <div key={i} className="tech-logo">
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
              target="_blank"
              rel="noreferrer"
              className={
                "flex cursor-pointer items-center gap-2 text-card-foreground"
              }
            >
              <p>Check Live Site</p>
              <ArrowUpRight size={25} color="orange" />
            </a>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("prev")}
            >
              <ArrowLeft size={20} color="white" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <ArrowRight size={20} color="white" />
            </button>
          </div>
        </div>

        <div
          className={
            "bg-frosty-mist_gradient h-96 rounded-lg border border-border md:h-full"
          }
        >
          <Canvas className="size-full" style={{ minHeight: "300px" }}>
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
