import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const NavGroupItem = ({
  navName,
  values,
  color = "text-gray-500",
}: {
  navName: string;
  values: any[];
  color?: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e: any) => {
    e.stopPropagation();
    console.log('here')
    setOpen(!open);
  };
  return (
    <li id="solution" className="relative group/serv">
      <div
        className={`flex items-center gap-x-1 p-2 cursor-pointer ${color} hover:text-sky-900`}
        onClick={(e) => handleOpen(e)}
      >
        <span className=" text-base font-medium">{navName}</span>
        <ChevronDownIcon className="w-5" />
      </div>
      <div className="hidden md:inline">
        <div className="group-hover/serv:visible invisible absolute z-10 -ml-4 w-screen max-w-md transform px-2 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {values.map((value) => (
                <Link
                  href={value.href}
                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                  key={value.name}
                >
                  {
                    <value.icon className="h-6 w-6 flex-shrink-0 text-sky-600" />
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
      {open && (
        <div className="relative md:hidden cursor-auto">
          <div className="group-hover/serv:visible invisible absolute z-10 -ml-4 w-full max-w-md transform px-2 sm:px-0 cursor-auto">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {values.map((value) => (
                  <Link
                    href="#"
                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    key={value.href}
                  >
                    {
                      <value.icon className="h-6 w-6 flex-shrink-0 text-sky-600" />
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
      )}
    </li>
  );
};

export default NavGroupItem;
