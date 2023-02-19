import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Night"
            src="/site.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 h-full w-full object-cover opacity-80 bg-black" />

          <div className="hidden lg:relative lg:block lg:p-12">
            <div className="relative h-20 w-20">
              <Image alt="Night" src="/logo.png" className="opacity-70" fill />
            </div>

            <p className="mt-4 leading-relaxed text-white/90">Bienvenido</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Pharma Logistic & Storage, Inc.
            </h2>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-5 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 relative"
        >
          <Link
            className="absolute top-2 right-2 sm:top-10 sm:right-10 flex cursor-pointer text-gray-500"
            href={"/"}
          >
            <span className="mr-2">Regresar</span>{" "}
            <ArrowRightIcon className="w-6" />
          </Link>
          <div className="w-full sm:w-10/12 2xl:w-3/4">
            <div className="relative -mt-16 block lg:hidden">
              <div className="relative h-20 w-20">
                <Image
                  alt="Night"
                  src="/logo.png"
                  className="opacity-90"
                  fill
                />
              </div>

              <p className="mt-4 leading-relaxed text-gray-500">Bienvenido</p>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Pharma Logistic & Storage, Inc.
              </h1>
            </div>

            <form
              className="mt-8 grid gap-6"
              method="post"
              action="/api/auth/signin/email"
            >
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electronico
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contrasena
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <p>No tienes una cuenta? <span className="text-blue-500 font-medium">Registrate</span> con nosotros.</p>

              <div className="">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Iniciar sesi{"ó"}n
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignIn;
