import React from "react";
import CountUp from "react-countup";

import { counterItems } from "~/constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg mr-32mt xl:mt-0">
      <div className="grid-4-cols mx-auto">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col justify-center rounded-lg bg-zinc-900 p-10"
          >
            <div className="counter-number mb-2 text-5xl font-bold text-white">
              <CountUp suffix={item.suffix} start={0} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
