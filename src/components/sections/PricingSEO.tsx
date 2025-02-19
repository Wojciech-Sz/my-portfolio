import Link from "next/link";
import React from "react";

import { packagesSEO } from "@/constants/pricing";

import Card3D from "../cards/Card3D";
import CardContent from "../cards/CardContent";

const PricingSEO = () => {
  return (
    <section id="seo" className="flex flex-col items-center gap-6 pt-20">
      <h3 className="text-center text-2xl font-bold text-accent-foreground sm:text-3xl">
        <span className="text-gentle-blue_gradient">SEO</span> Packages
      </h3>
      <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] gap-6 md:grid-cols-2 xl:grid-cols-3">
        {packagesSEO.map((pkg) => (
          <Card3D
            key={pkg.name}
            className={
              "group row-span-4 grid cursor-default grid-rows-subgrid gap-0 hover:border-[hsl(190,100%,50%)]"
            }
          >
            <CardContent pkg={pkg} />
          </Card3D>
        ))}
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 xl:gap-6">
        <button
          className={`bg-midnight-ocean_gradient col-span-1 rounded-md px-6 py-3 font-semibold text-foreground md:col-start-2`}
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
