"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";

import MenuIcon from "@/components/MenuIcon";
import NavItems from "@/components/NavItems";

import { Button } from "../ui/button";

gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleMenu = contextSafe(() => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      // Animate to X
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(middleLine.current, {
        attr: { opacity: 0 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
    } else {
      // Animate to hamburger
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(middleLine.current, {
        attr: {
          y1: 12,
          y2: 12,
          x1: 1.2,
          x2: 22.8,
          opacity: 1,
        },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  });

  return (
    <header className="fixed px-5 inset-x-0 top-0 z-50 bg-background/90">
      <div className="c-space relative mx-auto flex items-center justify-between py-5">
        <button
          className="flex text-card-foreground transition-colors hover:text-foreground focus:outline-none lg:hidden"
          aria-label="Toggle Menu"
          onClick={() => toggleMenu()}
        >
          <MenuIcon
            topLine={topLine}
            middleLine={middleLine}
            bottomLine={bottomLine}
            className="size-6"
          />
        </button>
        <Link
          href="/#home"
          scroll
          className="text-xl max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 font-bold text-card-foreground transition-transform hover:text-foreground hover:scale-105 duration-300"
        >
          Wojtek-Sz
        </Link>

        <nav className="hidden lg:flex">
          <NavItems />
        </nav>
        <Link href="#contact" className="group">
          <Button className="bg-midnight-ocean_gradient">
            <span>Contact Me</span>
          </Button>
        </Link>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
