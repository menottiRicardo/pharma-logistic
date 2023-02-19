import {
  ArchiveBoxArrowDownIcon,
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  GlobeAsiaAustraliaIcon,
  RectangleStackIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const CategoriesSection = () => {
  return (
    <section className="layout">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">Servicios</h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <a
              className="mt-8 inline-flex items-center rounded border border-sky-600 bg-sky-600 px-8 py-3 text-white hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500"
              href="/get-started"
            >
              <span className="text-sm font-medium"> Conoce Mas </span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <ArrowUpRightIcon className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Exportacion</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Contamos con exportacion aerea, maritima y terreste.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <ArrowDownRightIcon className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Importacion</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Tenemos importacion aerea, maritima y terreste.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <GlobeAsiaAustraliaIcon className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Nacionalizacion</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Servicio completo y Servicio Parcial.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <TruckIcon className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Distribucion</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Recogidas y entregas.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <ArchiveBoxArrowDownIcon className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Almacenamiento</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Nos encargamos de almacenar todo tipo de productos.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <RectangleStackIcon className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Maquilas</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Desde etiquetados hasta embalajes.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
