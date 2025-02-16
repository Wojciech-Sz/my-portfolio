import { Check } from "lucide-react";
import React from "react";

interface CardContentProps {
  pkg: {
    id?: string;
    name: string;
    description: string;
    price?: string;
    pricing?: {
      small: string;
      medium: string;
      large: string;
      ecommerce: string;
    };
    features: string[];
    audience?: string;
  };
  projectType?: string;
  text: string;
}

const CardContent = ({ pkg, text, projectType }: CardContentProps) => {
  const getProjectSize = (projectType: string) => {
    switch (projectType) {
      case "launchpad":
        return "small";
      case "momentum":
        return "medium";
      case "ascend":
        return "large";
      case "ecommerce":
        return "ecommerce";
      default:
        return "small";
    }
  };
  return (
    <>
      <div>
        <h4 className={`${text} mb-2 text-2xl font-semibold`}>{pkg.name}</h4>
        <p className="mb-4 text-accent-foreground">{pkg.description}</p>
      </div>
      <p className={`${text} mb-4 text-2xl font-bold`}>
        {pkg.price || pkg.pricing?.[getProjectSize(projectType || "")]}
        <span className="text-sm font-normal text-card-foreground">/month</span>
      </p>
      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="mr-2 size-5 text-green-500" />
            <span className="text-accent-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      {pkg.audience && (
        <p className="mb-6 text-sm text-card-foreground">
          <span className={`${text}`}>Ideal for:</span> {pkg.audience}
        </p>
      )}
    </>
  );
};

export default CardContent;
