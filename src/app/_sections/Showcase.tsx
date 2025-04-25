import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <Image
                src="/images/project1.png"
                alt="Project 1"
                width={500}
                height={500}
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
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <Image
                  src="/images/project2.png"
                  alt="Project2"
                  width={500}
                  height={500}
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <Image
                  src="/images/project3.png"
                  alt="Project3"
                  width={500}
                  height={500}
                />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
