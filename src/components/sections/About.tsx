"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import grid1 from "../../../public/assets/grid1.png";
import { stack } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DynamicGlobe = dynamic(() => import("react-globe.gl"), { ssr: false });
import MyButton from "@/components/MyButton";
import grid3 from "../../../public/assets/grid3.png";
import grid4 from "../../../public/assets/grid4.png";
import { Copy, CopyCheck } from "lucide-react";

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
    <section id={"about"} className={"c-space py-20"}>
      <div
        className={
          "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-6 gap-5 h-full"
        }
      >
        <div className={"col-span-1 xl:row-span-3"}>
          <div className={"grid-container"}>
            <Image
              src={grid1}
              alt={"grid-1"}
              className={"w-full sm:h-[276px] h-fit object-contain"}
            />
            <div>
              <p className={"grid-header"}>Hi, I am Wojtek</p>
              <p className={"grid-subtext"}>
                With 1 year of experience, I have honed my skills in frontend
                and backend development, with a focus on animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className={"col-span-1 xl:row-span-3"}>
          <div className="grid-container">
            <ul
              className={"flex h-[276px] w-full relative"}
              onMouseEnter={() => rotate.current?.pause()}
              onMouseLeave={() => rotate.current?.resume()}
            >
              {stack.map(({ img, name }, i) => (
                <li
                  key={name}
                  className={`li absolute top-0 left-1/2 h-1/2 -translate-x-1/2 origin-bottom rotate-${i * 60}`}
                >
                  <Image
                    src={img}
                    alt={name}
                    className={`icon size-10 -rotate-${i * 60}`}
                  />
                </li>
              ))}
            </ul>
            <div>
              <p className={"grid-header"}>Tech Stack</p>
              <p className={"grid-subtext"}>
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className={"col-span-1 xl:row-span-4"}>
          <div className={"grid-container"}>
            <div
              className={
                "rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
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
            <div>
              <p className={"grid-header"}>
                I work remotely across most timezones.
              </p>
              <p className={"grid-subtext"}>
                I&apos;m based in Poland, with remote work available.
              </p>
              <a href="/#contact">
                <MyButton
                  name={"Get in touch"}
                  isBeam
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={"xl:col-span-2 xl:row-span-3"}>
          <div className={"grid-container"}>
            <Image
              src={grid3}
              alt={"grid-3"}
              className={"w-full sm:h-[326px] h-fit object-contain"}
            />
            <div>
              <p className={"grid-header"}>My Passion for Coding</p>
              <p className={"grid-subtext text-balance"}>
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className={"xl:col-span-1 xl:row-span-2 md:col-span-2"}>
          <div className={"grid-container"}>
            <Image
              src={grid4}
              alt={"grid-4"}
              className={
                "w-full xl:h-[126px] object-contain sm:h-[276px] h-fit xl:object-cover sm:object-top"
              }
            />
            <div className={"flex flex-col gap-2"}>
              <p className={"grid-subtext text-center"}>Contact Me</p>
              <div
                className={
                  "copy-container text-[#afb0b6] flex flex-wrap-reverse"
                }
                onClick={handleCopy}
              >
                {hasCopied ? <CopyCheck /> : <Copy />}
                <p className={"lg:text-2xl md:text-xl font-medium text-white"}>
                  wsz.socials.contact@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
