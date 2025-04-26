"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Showcase = () => {
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.from(project, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: (index + 1) * 0.3,
        scrollTrigger: {
          trigger: project,
          start: "top bottom-=100",
        },
      });
    });
  }, []);

  return (
    <section id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <Image
                src="/images/project1.png"
                alt="Project 1"
                width={1024}
                height={1024}
              />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <Image
                  src="/images/project2.png"
                  alt="Project2"
                  width={1024}
                  height={1024}
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <Image
                  src="/images/project3.png"
                  alt="Project3"
                  width={1024}
                  height={1024}
                />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
