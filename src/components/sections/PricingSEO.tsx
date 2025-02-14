import { Check } from "lucide-react";
import React from "react";

import { packages } from "@/constants";

import Card3D from "../cards/Card3D";

const PricingSEO = () => {
  return (
    <section className="mt-12">
      <h3 className="mb-12 text-center text-2xl font-bold text-accent-foreground sm:text-3xl">
        <span className="text-ocean-blue_gradient">SEO</span> Packages
      </h3>
      <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] content-center gap-8 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pkg, index) => (
          <Card3D
            key={index}
            className="row-span-4 grid grid-rows-subgrid gap-0 overflow-hidden rounded-lg border border-border p-8"
          >
            <div>
              <h4 className="text-ocean-blue_gradient mb-2 text-2xl font-semibold">
                {pkg.name}
              </h4>
              <p className="mb-4 text-card-foreground">{pkg.description}</p>
            </div>
            <p className="mb-4 text-2xl font-bold">
              {pkg.price}
              <span className="text-sm font-normal text-card-foreground">
                /month
              </span>
            </p>
            <ul className="mb-8 space-y-3">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="mr-2 size-5 text-green-500" />
                  <span className="text-accent-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              <p className="mb-6 text-sm text-card-foreground">
                Ideal for: {pkg.audience}
              </p>
              <button className="bg-midnight-ocean_gradient w-full rounded-md py-3 font-semibold text-foreground transition-colors duration-300 hover:bg-primary/90">
                Get Started
              </button>
            </div>
          </Card3D>
        ))}
      </div>
    </section>
  );
};

export default PricingSEO;
