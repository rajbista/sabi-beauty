"use client";
import { useState } from "react";
import Icon from "./Icon";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  title: string;
  icon: string;
  content: { ref: string; label: string }[];
  expanded?: boolean;
}
const FooterItem = ({ title, content = [], icon, expanded = false }: Props) => {
  const [expand, setExpand] = useState(expanded);
  const style = expand ? "collapsible expanded" : "collapsible";
  return (
    <section className={style}>
      <header className="collapsible__header">
        <h3 className="footer__heading">{title}</h3>
        <div
          className="collapsible__chevron"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <FaChevronDown className={style} />
        </div>
      </header>

      <div className="collapsible__content">
        <ul className="list">
          {content &&
            content.map((item, index) => {
              return (
                <li className="list__item" key={index}>
                  <a href={item.ref}>{item.label}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default FooterItem;
