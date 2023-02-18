import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NavGroupItem = ({
  navName,
  values,
}: {
  navName: string;
  values: any[];
}) => {
  return (
    <div id="solution" className="relative group/serv">
      <div className="flex items-center gap-x-1 p-2 cursor-pointer text-gray-500 hover:text-gray-900">
        <span className=" text-base font-medium">{navName}</span>
        <ChevronDownIcon className="w-5" />
      </div>
      <div className="group-hover/serv:visible invisible absolute z-10 -ml-4 w-screen max-w-md transform px-2 sm:px-0">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            {values.map((value) => (
              <Link
                href="#"
                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                key={value.href}
              >
                {
                  <value.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                }
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {value.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {value.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavGroupItem;