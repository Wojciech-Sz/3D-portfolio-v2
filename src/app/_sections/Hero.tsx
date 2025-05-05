"use client";

import Image from "next/image";
import React from "react";
import { words } from "~/constants";
import Button from "../_components/Button";
import HeroExperience from "../_components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../_components/AnimatedCounter";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
    });
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <Image
          src="/images/bg.png"
          alt="Background"
          width={400}
          height={400}
          className="size-auto"
        />
      </div>

      <div className="hero-layout">
        <header className="flex w-dvw flex-col justify-center px-5 md:w-full md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={word.text + index}
                        className="flex items-center gap-1 pb-2 md:gap-3"
                      >
                        <Image
                          src={word.imgPath}
                          alt={word.text}
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                          width={100}
                          height={100}
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 pointer-events-none relative z-10 max-w-80 md:max-w-140 md:text-xl">
              Hi, I&apos;m Wojtek. I&apos;m a passionate Full Stack Developer
              based in Poland with a proven track record of delivering
              exceptional results.
            </p>
            <Button
              id="#counter"
              className="h-12 w-60 md:h-16 md:w-80"
              text="See my Work"
            />
          </div>
        </header>

        <div className="hero-3d-layout">
          <HeroExperience />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
