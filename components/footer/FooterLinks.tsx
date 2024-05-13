import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  const links = siteConfig.footerLinks;

  return (
    <div className="">
      <ul className="mt-8 flex gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer nofollow "
              className="transition "
            >
              {link.icon &&
                React.createElement(link.icon, { className: "text-lg" })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
