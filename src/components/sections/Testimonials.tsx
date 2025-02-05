import React from "react";
import { clientReviews } from "@/constants";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id={"testimonials"} className={"c-space py-20"}>
      <h3 className={"head-text"}>Hear from My Clients</h3>
      <div className={"client-container"}>
        {clientReviews.map(({ id, name, review, position, img }) => (
          <div key={id} className={"client-review "}>
            <p className={"text-white font-light"}>{review}</p>
            <div className={"client-content"}>
              <div className={"flex gap-3"}>
                <Image
                  src={img}
                  alt={name}
                  width={50}
                  height={50}
                  className={"w-12 h-12 rounded-full"}
                />
                <div className={"flex flex-col"}>
                  <p className={"font-semibold text-white-800"}>{name}</p>
                  <p className={"text-white-500 md:text-base text-sm italic"}>
                    {position}
                  </p>
                </div>
              </div>

              <div className={"flex self-end items-center gap-2"}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} fill={"gold"} color={"gold"} size={20} />
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
