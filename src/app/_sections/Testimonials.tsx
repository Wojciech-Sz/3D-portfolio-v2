import React from "react";
import TitleHeader from "../_components/TitleHeader";
import { testimonials } from "~/constants";
import GlowCard from "../_components/Cards/GlowCard";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐ Client Feedback Highlights"
        />

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3">
          {testimonials.map(({ imgPath, name, mentions, review }, index) => (
            <GlowCard key={name} card={{ review }} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={imgPath}
                    alt={name}
                    width={100}
                    height={100}
                    className="size-auto"
                  />
                </div>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
