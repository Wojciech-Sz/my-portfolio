"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Copy, CopyCheck } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import MyButton from "@/components/MyButton";
import { stack } from "@/constants";

import grid1 from "../../../public/assets/grid1.png";
import grid3 from "../../../public/assets/grid3.png";
import grid4 from "../../../public/assets/grid4.png";

const DynamicGlobe = dynamic(() => import("react-globe.gl"), { ssr: false });

gsap.registerPlugin(useGSAP);

const About = () => {
  const rotate = useRef<gsap.core.Timeline>(undefined);
  useGSAP(() => {
    rotate.current = gsap
      .timeline({
        repeat: -1,
        defaults: {
          duration: 20,
          ease: "none",
        },
      })
      .to(".li", {
        rotation: "+=360",
      })
      .to(
        ".icon",
        {
          rotation: "-=360",
        },
        "<"
      );
  });

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("wsz.socials.contact@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <section id="about" className="c-space py-20">
      <h2 className="head-text">
        Few words<span className="text-cosmic-blue_gradient"> about Me</span>
      </h2>
      <div
        className={
          "mt-12 grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6"
        }
      >
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container group">
            <Image
              src={grid1}
              alt="grid-1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <h3 className="grid-header">Hi, I am Wojtek</h3>
              <p className="grid-subtext">
                With many projects and courses completed, I have honed my skills
                in frontend and backend development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container group">
            <ul
              className="relative flex h-[276px] w-full"
              onMouseEnter={() => rotate.current?.pause()}
              onMouseLeave={() => rotate.current?.resume()}
            >
              {stack.map(({ img, name }, i) => (
                <li
                  key={name}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className={`li rotate-${i * 60} absolute left-1/2 top-0 h-1/2 origin-bottom -translate-x-1/2`}
                >
                  <Image
                    src={img}
                    alt={name}
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className={`icon -rotate-${i * 60} size-10`}
                  />
                </li>
              ))}
              <li className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={1024}
                  height={1024}
                  className="object-contain"
                />
              </li>
            </ul>
            <div>
              <h3 className="grid-header">Tech Stack</h3>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container group">
            <div
              className={
                "flex h-fit w-full cursor-grab items-center justify-center rounded-3xl sm:h-[326px]"
              }
            >
              <DynamicGlobe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div className="h-full">
              <h3 className="grid-header">
                I work remotely across most timezones.
              </h3>
              <p className="grid-subtext">
                I&apos;m based in Poland, with remote work available.
              </p>
              <Link href="/#contact">
                <MyButton
                  name="Get in touch"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container group">
            <Image
              src={grid3}
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[326px]"
            />
            <div>
              <h3 className="grid-header">My Passion for Coding</h3>
              <p className="grid-subtext text-balance">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-1 xl:row-span-2">
          <div className="grid-container group">
            <Image
              src={grid4}
              alt="grid-4"
              className={
                "h-fit w-full object-contain sm:h-[276px] sm:object-top xl:h-[126px] xl:object-cover"
              }
            />
            <div className="flex flex-col gap-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div
                className={
                  "copy-container flex flex-wrap-reverse text-[#afb0b6]"
                }
                onClick={handleCopy}
              >
                {hasCopied ? <CopyCheck /> : <Copy />}
                <h3 className="font-medium text-foreground md:text-xl lg:text-2xl">
                  wsz.socials.contact@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
