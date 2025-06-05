import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import { clientReviews } from "@/constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="c-space py-20">
      <h2 className="head-text">
        Hear from<span className="text-gradient-red-wine"> My Clients</span>
      </h2>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, position, img }) => (
          <div key={id} className="client-review group">
            <p className="font-light text-foreground transition-all duration-200 group-hover:translate-x-2">
              {review}
            </p>
            <div className="client-content transition-all duration-200 group-hover:translate-x-2">
              <div className="flex gap-3">
                <Image
                  src={img}
                  alt={name}
                  width={50}
                  height={50}
                  className="size-12 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-accent-foreground">{name}</p>
                  <p className="text-sm italic text-muted-foreground md:text-base">
                    {position}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} fill="gold" color="gold" size={20} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
