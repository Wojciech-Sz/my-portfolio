"use client";
import Link from "next/link";
import React, { useState } from "react";

import { packagesSEO } from "@/constants/pricing";
import { cn } from "@/lib/utils";

import Card3D from "../cards/Card3D";
import CardContent from "../cards/CardContent";

const PricingSEO = () => {
  const [seo, setSeo] = useState("");

  return (
    <section id="seo" className="flex flex-col items-center gap-6 pt-20">
      <h3 className="mb-6 text-center text-2xl font-bold text-accent-foreground sm:text-3xl">
        <span className="text-ocean-blue_gradient">SEO</span> Packages
      </h3>
      <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] content-center gap-8 md:grid-cols-2 xl:grid-cols-3">
        {packagesSEO.map((pkg) => (
          <Card3D
            key={pkg.id}
            onMouseDown={() => setSeo(pkg.id)}
            className={cn(
              "row-span-4 grid cursor-pointer grid-rows-subgrid gap-0",
              seo === pkg.id && "border-[hsl(190,100%,50%)]"
            )}
          >
            <CardContent
              pkg={pkg}
              text={
                seo === pkg.id
                  ? "text-electric-blue_gradient"
                  : "text-ocean-blue_gradient"
              }
            />
          </Card3D>
        ))}
      </div>
      <div className="flex gap-6">
        <button
          onMouseDown={() => setSeo("")}
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

export default PricingSEO;
