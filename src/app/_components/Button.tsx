import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

const Button = ({
  className,
  id,
  text,
}: {
  className?: string;
  id?: string;
  text?: string;
}) => {
  return (
    <Link
      href={id ?? "#"}
      scroll
      className={cn("cta-wrapper", className && className)}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <Image
            src="/images/arrow-down.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </div>
      </div>
    </Link>
  );
};

export default Button;
