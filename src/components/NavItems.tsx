import React from "react";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {ROUTES.map(({ name, href }) => (
        <li key={name} className="nav-li">
          <Link scroll href={href} className="nav-li_a">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;
