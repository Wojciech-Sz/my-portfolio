"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import Cube from "@/components/models/Cube";
import HackerRoom from "@/components/models/HackerRoom";
import ReactLogo from "@/components/models/ReactLogo";
import Rings from "@/components/models/Rings";
import Target from "@/components/models/Target";
import MyButton from "@/components/MyButton";
import CanvasLoader from "@/components/scenes/CanvasLoader";
import HeroCamera from "@/components/scenes/HeroCamera";
import { calculateSizes } from "@/lib/utils";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes({ isSmall, isMobile, isTablet });

  return (
    <section
      id="home"
      className="relative flex h-[900px] min-h-screen w-full flex-col"
    >
      <div className="c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-28">
        <h1 className="text-center font-sans text-2xl font-medium text-foreground md:text-3xl">
          Hi, I am <span className="text-gradient-red-wine">Wojtek</span>{" "}
          <span className="waving-hand">👋</span>
          <br />
          Next.js Developer and SEO based in Poland
        </h1>
        <p className="hero_tag text-gradient-red-wine">
          Building Products & Brands
        </p>
      </div>

      <div className="absolute inset-0 size-full">
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

      <div className="c-space absolute inset-x-0 bottom-7 z-10 w-full">
        <Link href="/#about" scroll>
          <MyButton
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};
export default Hero;
