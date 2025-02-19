import React from "react";

import PricingSEO from "./PricingSEO";
import PricingWeb from "./PricingWeb";

const Services = () => {
  return (
    <section id="services" className="c-space py-20">
      <h2 className="head-text">
        My <span className="text-cosmic-blue_gradient">Services</span>
      </h2>
      <PricingWeb />
      <PricingSEO />
    </section>
  );
};

export default Services;
