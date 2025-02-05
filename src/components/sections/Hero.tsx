"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useProgress } from "@react-three/drei";
import HackerRoom from "@/components/models/HackerRoom";
import CanvasLoader from "@/components/scenes/CanvasLoader";
import Target from "@/components/models/Target";
import { Suspense } from "react";

import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/lib/utils";
import ReactLogo from "@/components/models/ReactLogo";
import Cube from "@/components/models/Cube";
import Rings from "@/components/models/Rings";
import HeroCamera from "@/components/scenes/HeroCamera";
import Link from "next/link";
import MyButton from "@/components/MyButton";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes({ isSmall, isMobile, isTablet });

  return (
    <section className="min-h-screen h-[900px] w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white sm:text-3xl text-2xl font-medium text-center font-sans">
          Hi, I am Wojtek <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="size-full absolute inset-0">
        <Canvas className="size-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 22]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Link href="/#about" scroll>
          <MyButton
            name={"Let's work together"}
            isBeam
            containerClass={"sm:w-fit w-full sm:min-w-96"}
          />
        </Link>
      </div>
    </section>
  );
};
export default Hero;
