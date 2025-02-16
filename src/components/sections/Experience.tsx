"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { Suspense, useState } from "react";

import Developer from "@/components/models/Developer";
import CanvasLoader from "@/components/scenes/CanvasLoader";
import { workExperiences } from "@/constants";

const Experience = () => {
  const [animation, setAnimation] = useState("idle");

  return (
    <section id="experience" className="c-space py-20">
      <div className="w-full text-card-foreground">
        <h2 className="head-text">
          My Work <span className="text-cosmic-blue_gradient">Experience</span>
        </h2>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animation}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map(
                ({ id, name, pos, duration, title, icon, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimation(animation.toLowerCase())}
                    onPointerOver={() => setAnimation(animation.toLowerCase())}
                    onPointerOut={() => setAnimation("idle")}
                  >
                    <div
                      className={
                        "flex h-full flex-col items-center justify-start py-2"
                      }
                    >
                      <div className="work-content_logo">
                        <Image
                          src={icon}
                          alt={name}
                          width={50}
                          height={50}
                          className="size-full"
                        />
                      </div>
                      <div className="work-content_bar" />
                    </div>

                    <div className="px-2.5 py-5 sm:p-5">
                      <p className="font-bold text-accent-foreground">{name}</p>
                      <p className="mb-5 text-sm">{pos}</p>
                      <p
                        className={
                          "transition-colors duration-500 ease-in-out group-hover:text-foreground"
                        }
                      >
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
