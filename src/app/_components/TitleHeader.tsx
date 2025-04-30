import React from "react";

const TitleHeader = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <div className="flex-col-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <h2 className="text-center text-3xl font-semibold md:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
