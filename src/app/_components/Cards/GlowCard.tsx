"use client";

import Image from "next/image";
import React, { useRef } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  card: {
    review: string;
  };
  index: number;
}

const GlowCard = ({ children, card, index }: GlowCardProps) => {
  const { review } = card;

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(y, x) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      card.style.setProperty("--start", `${angle + 60}`);
    };
  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card mb-5 break-inside-avoid-column rounded-xl p-10"
    >
      <div className="glow" />
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            className="size-5"
            src="/images/star.png"
            alt="star"
            width={20}
            height={20}
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
