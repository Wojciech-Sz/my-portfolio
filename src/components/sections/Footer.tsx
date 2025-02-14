import Image from "next/image";
import React from "react";

import github from "../../../public/assets/github.svg";
import twitter from "../../../public/assets/twitter.svg";

const Footer = () => {
  return (
    <footer
      className={
        "c-space flex flex-col items-center justify-between gap-5 border-t border-b-border pb-5 pt-7 lg:flex-row"
      }
    >
      <div className="flex gap-2 text-muted-foreground">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="order-last flex gap-3 lg:order-none">
        <div className="social-icon">
          <Image src={github} alt="github" className="size-1/2" />
        </div>
        <div className="social-icon">
          <Image src={twitter} alt="twitter" className="size-1/2" />
        </div>
        {/* <div className="social-icon"> */}
        {/*  <Image src={github} alt="github" className="size-1/2" /> */}
        {/* </div> */}
      </div>
      <p className="text-muted-foreground">
        © {new Date().getFullYear()} Wojtek. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
