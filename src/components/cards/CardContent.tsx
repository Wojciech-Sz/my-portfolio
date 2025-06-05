import { Check } from "lucide-react";
import React from "react";

interface CardContentProps {
  pkg: {
    name: string;
    description: string;
    price: string;
    per: string;
    features: string[];
    audience?: string;
  };
}

const CardContent = ({ pkg }: CardContentProps) => {
  return (
    <>
      <div>
        <h4
          className={`group-hover:text-gradient-red-wine text-gradient-red-crimson mb-2 w-max text-2xl font-semibold`}
        >
          {pkg.name}
        </h4>
        <p className="mb-4 text-card-foreground">{pkg.description}</p>
      </div>
      <p className={`mb-4 text-2xl font-bold`}>
        <span
          className={`group-hover:text-gradient-red-wine text-gradient-red-crimson`}
        >
          {pkg.price}
        </span>
        <span className="text-sm font-normal text-card-foreground">
          {pkg.per}
        </span>
      </p>
      <ul className="mb-6 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="mr-2 size-5 text-green-500" />
            <span className="text-accent-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      {pkg.audience && (
        <p className="mb-6 text-sm text-card-foreground">
          <span
            className={`group-hover:text-gradient-red-wine text-gradient-red-crimson`}
          >
            Ideal for:
          </span>{" "}
          {pkg.audience}
        </p>
      )}
    </>
  );
};

export default CardContent;
