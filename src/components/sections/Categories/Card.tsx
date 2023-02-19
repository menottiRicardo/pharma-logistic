import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  title,
  description,
  href,
  Icon,
  image,
}: {
  title: string;
  description: string;
  href: string;
  Icon: any;
  image: string;
}) => {
  return (
    <Link
      className="block rounded-xl border border-gray-100 shadow-sm hover:opacity-100 hover:shadow-lg hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-white opacity-80"
      href={href}
    >
      <div className="w-full h-28 md:h-44 xl:h-48 relative rounded-xl bg-white">
        <Image
          src={image}
          fill
          alt={title + " image"}
          className="rounded-t-xl backdrop-saturate-50 bg-white/20"
        />
      </div>

      <div className="p-4">
        <span className="inline-block rounded-lg bg-gray-50 p-3">
          <Icon className="w-6" />
        </span>

        <h2 className="mt-2 font-bold">{title}</h2>

        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
