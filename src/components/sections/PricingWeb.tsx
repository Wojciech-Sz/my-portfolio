"use client";

import Link from "next/link";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  animationPackages,
  projectTypes,
  threeDPackages,
} from "@/constants/pricing";
import { cn } from "@/lib/utils";

import Card3D from "../cards/Card3D";
import CardContent from "../cards/CardContent";

const PricingSection = () => {
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [selectedAnimation, setSelectedAnimation] = useState("");
  const [selected3D, setSelected3D] = useState("");

  const handleReset = () => {
    setSelectedProjectType("");
    setSelectedAnimation("");
    setSelected3D("");
  };

  return (
    <section id="web" className="flex flex-col items-center gap-6 pt-20">
      <h3 className="text-center text-2xl font-bold text-accent-foreground sm:text-3xl">
        <span className="text-ocean-blue_gradient">WEB</span> Packages
      </h3>
      <Tabs defaultValue="project-type">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="project-type">Project Type</TabsTrigger>
          <TabsTrigger value="animations">Animations</TabsTrigger>
          <TabsTrigger value="3d-integration">3D Integration</TabsTrigger>
        </TabsList>
        <TabsContent value="project-type">
          <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr] content-center gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map((type) => (
              <Card3D
                key={type.id}
                onMouseDown={() => setSelectedProjectType(type.id)}
                className={cn(
                  "row-span-3 grid grid-rows-subgrid gap-0 cursor-pointer",
                  type.id === selectedProjectType &&
                    "border-[hsl(190,100%,50%)]"
                )}
              >
                <CardContent
                  pkg={type}
                  text={
                    type.id === selectedProjectType
                      ? "text-electric-blue_gradient"
                      : "text-ocean-blue_gradient"
                  }
                />
              </Card3D>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="animations">
          <div className="grid gap-6 md:grid-cols-3">
            {animationPackages.map((pkg) => (
              <Card3D
                key={pkg.id}
                onMouseDown={() => setSelectedAnimation(pkg.id)}
                className={cn(
                  "row-span-3 grid grid-rows-subgrid gap-0 cursor-pointer",
                  pkg.id === selectedAnimation && "border-[hsl(190,100%,50%)]"
                )}
              >
                <CardContent
                  pkg={pkg}
                  text={
                    pkg.id === selectedAnimation
                      ? "text-electric-blue_gradient"
                      : "text-ocean-blue_gradient"
                  }
                  projectType={selectedProjectType}
                />
              </Card3D>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="3d-integration">
          <div className="grid gap-6 md:grid-cols-3">
            {threeDPackages.map((pkg) => (
              <Card3D
                key={pkg.id}
                onMouseDown={() => setSelected3D(pkg.id)}
                className={cn(
                  "row-span-3 grid grid-rows-subgrid gap-0 cursor-pointer",
                  pkg.id === selected3D && "border-[hsl(190,100%,50%)]"
                )}
              >
                <CardContent
                  pkg={pkg}
                  text={
                    pkg.id === selected3D
                      ? "text-electric-blue_gradient"
                      : "text-ocean-blue_gradient"
                  }
                  projectType={selectedProjectType}
                />
              </Card3D>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex gap-6">
        <button
          onMouseDown={() => handleReset()}
          className={`bg-destructive_gradient w-max rounded-md px-6 py-3 font-semibold text-foreground`}
        >
          Reset
        </button>
        <button
          className={`bg-midnight-ocean_gradient w-max rounded-md px-6 py-3 font-semibold text-foreground`}
        >
          <Link scroll href="/#contact">
            Contact
          </Link>
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
