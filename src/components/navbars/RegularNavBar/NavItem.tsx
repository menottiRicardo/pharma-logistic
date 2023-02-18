import Link from "next/link";
import React from "react";

const NavItem = ({ navName, href }: { navName: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-1 p-2 cursor-pointer text-gray-500 hover:text-gray-900"
    >
      <span className="text-base font-medium">{navName}</span>
    </Link>
  );
};

export default NavItem;
