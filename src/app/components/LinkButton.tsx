import React from 'react'
import Image from 'next/image';

interface LinkButtonProps {
  href: string;
  title: string;
  image: string;
}

export default function LinkButton({
  href,
  title,
  image,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="w-10 h-10 rounded-sm aspect-w-1 aspect-h-1 overflow-hidden">
        {image && (
          <Image
            className="object-cover"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
      </div>
      <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
        {title}
      </h2>
    </a>
  );
}
