import Link from "next/link";
import React from "react";

import { ROUTES } from "@/constants/routes";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {ROUTES.map(({ name, link }) => (
        <li key={name} className="nav-li group">
          <Link scroll href={link} className="nav-li_a relative">
            <span>{name}</span>
            <span className="underline" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;
