"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  let [style, setStyle] = useState("nav collapsible");
  const currentPath = usePathname();
  const links = [
    { label: "SERVICES", href: "/" },
    { label: "MENU", href: "/menu" },
    { label: "APPOINTMENT", href: "/appointment" },
    { label: "CONTACT", href: "/contact" },
  ];

  const handleChevronClick = () => {
    style === "nav collapsible"
      ? setStyle("nav collapsible expanded")
      : setStyle("nav collapsible");
  };
  return (
    <nav className={style}>
      <Link href="/" className="nav__toggle" onClick={handleChevronClick}>
        <FaTasks />
      </Link>
      <ul>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
