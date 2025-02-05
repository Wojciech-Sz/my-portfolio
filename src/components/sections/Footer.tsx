import React from "react";
import Image from "next/image";
import github from "../../../public/assets/github.svg";
import twitter from "../../../public/assets/twitter.svg";

const Footer = () => {
  return (
    <footer
      className={
        "c-space pt-7 pb-5 border-t border-b-black-300 flex justify-between items-center flex-col lg:flex-row gap-5"
      }
    >
      <div className={"text-white-500 flex gap-2"}>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className={"flex gap-3 lg:order-none order-last"}>
        <div className={"social-icon"}>
          <Image src={github} alt={"github"} className={"size-1/2"} />
        </div>
        <div className={"social-icon"}>
          <Image src={twitter} alt={"twitter"} className={"size-1/2"} />
        </div>
        {/*<div className={"social-icon"}>*/}
        {/*  <Image src={github} alt={"github"} className={"size-1/2"} />*/}
        {/*</div>*/}
      </div>
      <p className={"text-white-500"}>
        © {new Date().getFullYear()} Wojtek. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
