import Link from "next/link";
import React from "react";

const NavItem = ({
  navName,
  href,
  color = "text-gray-500",
}: {
  navName: string;
  href: string;
  color?: string;
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-x-1 p-2 cursor-pointer ${color} hover:text-gray-900`}
    >
      <li className="text-base font-medium">{navName}</li>
    </Link>
  );
};

export default NavItem;
