import * as React from "react";

interface NavigationLinkProps {
  text: string;
  hasDropdown?: boolean;
}

const NavLink: React.FC<NavigationLinkProps> = ({ text, hasDropdown }) => (
  <div className="flex gap-1.5">
    <div className="grow text-2xl leading-none">{text}</div>
    {hasDropdown && <div className="text-sm font-black leading-none"></div>}
  </div>
);

export default NavLink;