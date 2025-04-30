import Image from "next/image";
import React from "react";
import { abilities } from "~/constants";

const Features = () => {
  return (
    <section className="padding-x-lg w-full">
      <div className="grid-3-cols mx-auto">
        {abilities.map(({ imgPath, title, desc }) => (
          <FeatureCard
            key={title}
            imgPath={imgPath}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({
  imgPath,
  title,
  desc,
}: {
  imgPath: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="card-border flex flex-col gap-4 rounded-xl p-8">
      <div className="flex-center size-14 rounded-full">
        <Image src={imgPath} alt={title} width={100} height={100} />
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-white-50 text-lg">{desc}</p>
    </div>
  );
};

export default Features;
