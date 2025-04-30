import React from "react";
import TitleHeader from "../_components/TitleHeader";
import { expCards } from "~/constants";
import GlowCard from "../_components/Cards/GlowCard";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-padding mt-20 w-full md:mt-40 xl:px-0"
    >
      <div className="h-full w-full px-5 md:px-20">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <Image
                        src={card.imgPath}
                        alt={card.title}
                        width={100}
                        height={100}
                      />
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
