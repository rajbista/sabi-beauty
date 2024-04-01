"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  let [style, setStyle] = useState("nav collapsible");
  const currentPath = usePathname();

  const links = [
    { label: "Our Services", href: "/service" },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleChevronClick = () => {
    style === "nav collapsible"
      ? setStyle("nav collapsible expanded")
      : setStyle("nav collapsible");
  };

  const onMenuClick = (e: string) => {
    console.log("________ Menu clicked", e);
  };
  return (
    <nav className={style}>
      <Link href="/">
        <Image src="/sabi.png" alt="Logo" width={175} height={45} priority />
      </Link>

      <div className="nav__toggle" onClick={handleChevronClick}>
        {style === "nav collapsible" ? (
          <MdMenu color="white" size="40" />
        ) : (
          <MdClose color="white" size="40" />
        )}
      </div>

      <ul className="list nav__list collapsible__content">
        {links.map((link) => (
          <li
            key={link.label}
            className="nav__item"
            onClick={() => onMenuClick(link.label)}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
