"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  onMouseDown?: () => void;
}

gsap.registerPlugin(useGSAP);

const Card3D: React.FC<Card3DProps> = ({
  children,
  className,
  onMouseDown = () => {},
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const shine = shineRef.current;
      if (!card || !shine) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotationX = gsap.utils.mapRange(
          -height / 2,
          height / 2,
          5,
          -5,
          mouseY
        );
        const rotationY = gsap.utils.mapRange(
          -width / 2,
          width / 2,
          -5,
          5,
          mouseX
        );

        const shineX = gsap.utils.mapRange(
          -width / 2,
          width / 2,
          0,
          100,
          mouseX
        );
        const shineY = gsap.utils.mapRange(
          -height / 2,
          height / 2,
          0,
          100,
          mouseY
        );

        gsap.to(card, {
          rotationX,
          rotationY,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.3,
        });

        gsap.to(shine, {
          backgroundPosition: `${shineX}% ${shineY}%`,
          ease: "power2.out",
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          transformPerspective: 1000,
          ease: "elastic.out(1, 0.3)",
          duration: 0.7,
        });

        gsap.to(shine, {
          backgroundPosition: "30% 30%",
          ease: "power2.out",
          duration: 0.3,
        });
      };
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    {
      scope: cardRef,
    }
  );

  return (
    <div
      ref={cardRef}
      onMouseDown={onMouseDown}
      className={cn(
        "card-3d relative overflow-hidden rounded-lg border border-border p-8",
        className
      )}
    >
      <div
        ref={shineRef}
        className="shine bg-twilight_gradient pointer-events-none absolute inset-0"
      />
      {children}
    </div>
  );
};

export default Card3D;
