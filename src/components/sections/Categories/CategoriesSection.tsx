import {
  ArchiveBoxArrowDownIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  GlobeAsiaAustraliaIcon,
  RectangleStackIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Card from "./Card";

const CategoriesSection = () => {
  return (
    <section className="layout">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">Servicios</h2>

            <p className="mt-4 text-gray-600">
              Brindamos Servicios Logísticos que tienen como único objetivo
              facilitar que los bienes o productos lleguen a los diversos
              clientes, sin que medie su venta por quien presta el servicio, lo
              que incluye
            </p>

            <a
              className="mt-8 inline-flex items-center rounded border border-sky-600 bg-sky-600 px-8 py-3 text-white hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500"
              href="/get-started"
            >
              <span className="text-sm font-medium mr-2">Conoce Mas </span>

              <ArrowRightIcon className="w-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Card
              href="/accountant"
              title="Exportacion"
              description="Contamos con exportacion aerea, maritima y terreste."
              Icon={ArrowUpRightIcon}
              image="https://images.unsplash.com/photo-1570970580763-7993ca30d726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <Card
              href="/accountant"
              title="Importacion"
              description="Tenemos importacion aerea, maritima y terreste."
              Icon={ArrowDownRightIcon}
              image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />

            <Card
              href="/accountant"
              title="Nacionalizacion"
              description="Servicio completo y Servicio Parcial."
              Icon={GlobeAsiaAustraliaIcon}
              image="https://images.unsplash.com/photo-1605990925792-b70ab82638a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />

            <Card
              href="/accountant"
              title="Distribucion"
              description="Recogidas y entregas."
              Icon={TruckIcon}
              image="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
            />

            <Card
              href="/accountant"
              title="Almacenamiento"
              description=" Nos encargamos de almacenar todo tipo de productos."
              Icon={ArchiveBoxArrowDownIcon}
              image="https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />

            <Card
              href="/accountant"
              title="Maquilas"
              description="Desde etiquetados hasta embalajes."
              Icon={RectangleStackIcon}
              image="https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
