import React, { useState } from "react";
import {
  ArrowDownRightIcon,
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  ArrowUpRightIcon,
  GlobeAsiaAustraliaIcon,
  RectangleStackIcon,
  TruckIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import NavGroupItem from "./NavGroupItem";
import NavItem from "./NavItem";
import Image from "next/image";
const services = [
  {
    name: "Exportacion",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Importacion",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Nacionalizacion",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: "Distribucion",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: TruckIcon,
  },
  {
    name: "Almacenamiento",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArchiveBoxArrowDownIcon,
  },
];

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

const RegularNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      aria-label="Site Header"
      className="bg-white sticky top-0 z-50 shadow-lg"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-sky-600" href="/">
              <span className="sr-only">Home</span>
              <div className="relative h-20 w-28">
                <Image src="/logo.png" alt="logo image" fill />
              </div>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <NavGroupItem values={services} navName="Servicios" />
                <NavItem navName="Acerca de Nostros" href="#" />
                <NavGroupItem values={services} navName="Algo mas" />
                <NavItem navName="Blog" href="#" />
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Contacto
                </Link>
              </div>

              <div className="md:hidden relative">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {open && (
                  <div
                    className="fixed w-full h-full bg-black flex justify-center bg-opacity-40 z-50 select-none inset-x-0 top-0"
                    onClick={() => setOpen(false)}
                  >
                    <div
                      className="absolute w-11/12 rounded-md shadow-xl px-4 py-3 grid select-none bg-white top-4 pb-5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="relative h-12 w-16">
                          <Image src="/logo.png" alt="logo image" fill />
                        </div>
                        <XMarkIcon
                          className="w-7 border-2 border-sky-500 rounded-md"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpen(false);
                          }}
                        />
                      </div>
                      <ul className="grid gap-y-2">
                        <NavGroupItem
                          values={services}
                          navName="Servicios"
                          color="black"
                        />
                        <NavItem
                          navName="Acerca de Nostros"
                          href="#"
                          color="black"
                        />
                        <NavGroupItem
                          values={services}
                          navName="Algo mas"
                          color="black"
                        />
                        <NavItem navName="Blog" href="#" color="black" />
                      </ul>

                      <div className="my-4 border-t" />

                      <Link
                        className="rounded-md bg-sky-600 px-5 py-2.5 font-medium text-white shadow w-full text-center"
                        href="/"
                      >
                        Contacto
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RegularNavBar;
