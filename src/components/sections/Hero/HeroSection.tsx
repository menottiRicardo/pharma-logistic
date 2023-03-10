import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        className="absolute inset-0 w-full h-full"
        alt="hero image"
        fill
      />
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Brindando salud
            <strong className="block font-extrabold text-sky-600">
              un paquete a la vez.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Somos una de las empresas de logística farmacéutica que conecta a
            las empresas del sector con sus mercados, en cualquier parte del
            mundo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/auth/signin"
              className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            >
              Registrate
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
            >
              Conoce Mas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
