import Image from "next/image";
import React from "react";
import { logoIconsList } from "~/constants";

const Logo = () => {
  return (
    <section className="relative my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box gap-5 md:gap-12">
          {logoIconsList.map((logo) => (
            <LogoIcon key={logo.name} imgPath={logo.imgPath} name={logo.name} />
          ))}
          {logoIconsList.map((logo) => (
            <LogoIcon key={logo.name} imgPath={logo.imgPath} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LogoIcon = ({ imgPath, name }: { imgPath: string; name: string }) => {
  return (
    <div className="flex-center marquee-item flex-none">
      <Image width={200} height={50} src={imgPath} alt={name} />
    </div>
  );
};

export default Logo;
