import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socialImgs } from "~/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center md:items-start">
          <Link scroll href="#hero">
            Visit my blog
          </Link>
        </div>

        <div className="socials">
          {socialImgs.map((img) => (
            <Link
              className="icon"
              target="_blank"
              href={img.url}
              key={img.name}
            >
              <Image src={img.imgPath} alt={img.name} width={20} height={20} />
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            Copyright © {new Date().getFullYear()} W&M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
