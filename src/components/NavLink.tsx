"use client";

import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({href, children}: NavLinkProps)  => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(href);

    if(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <a href={`#${href}`} onClick={handleScroll} className="flex font-semibold text-link text-white hover:text-light-coral transition duration-700 ease-in-out no-underline focus:outline-none tracking-widest max715:text-[1rem] max375:text-[13px]">{children}
    </a>
  )

}