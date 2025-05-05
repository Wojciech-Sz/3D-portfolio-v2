"use client";

import React from "react";
import TitleHeader from "../_components/TitleHeader";
import { techStackIcons, techStackImgs } from "~/constants";
import TechIcon from "../_components/TechModels/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import NextJs from "../_components/TechModels/NextJs";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.from(".tech-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      },
    });
  });
  return (
    <section id="skills" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card group relative overflow-hidden rounded-lg xl:rounded-full"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {techStackImgs.map((img) => (
            <div
              key={img.name}
              className="card-border tech-card group relative overflow-hidden rounded-lg xl:rounded-full"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Image
                    src={img.imgPath}
                    alt={img.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="padding-x w-full">
                  <p>{img.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
