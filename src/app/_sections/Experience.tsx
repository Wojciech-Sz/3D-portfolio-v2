"use client";

import React from "react";
import TitleHeader from "../_components/TitleHeader";
import { expCards } from "~/constants";
import GlowCard from "../_components/Cards/GlowCard";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        xPercent: -100,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);
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
                        className="size-auto"
                      />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1" />
                    </div>

                    <div className="expText relative z-20 flex gap-5 md:gap-10 xl:gap-20">
                      <div className="timeline-logo">
                        <Image
                          src={card.logoPath}
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold">{card.title}</h2>
                        <p className="text-white-50 my-5">📅 {card.date}</p>
                        <p className="text-[#839cb5]">Responsibilities:</p>
                        <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
