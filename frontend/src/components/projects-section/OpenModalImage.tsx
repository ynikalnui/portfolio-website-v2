"use client";

import useProjectModalStore from "@/store/useProjectModalStore";
import Image from "next/image";

type TOpenModalImageProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function OpenModalImage({
  imageSrc,
  imageAlt,
}: TOpenModalImageProps) {
  const toggleProjectModal = useProjectModalStore(
    (state) => state.toggleProjectModal,
  );

  return (
    <div
      data-aos="fade-in"
      className="cursor-pointer relative group w-full"
      onClick={toggleProjectModal}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={650}
        height={370}
        className="w-full h-auto"
      />

      <div
        className="hidden md:flex items-center justify-center
            absolute inset-0 bg-black/60 backdrop-blur-md 
            opacity-0 transition-opacity group-hover:opacity-100"
      >
        <p className="text-white section-text-base tracking-widest">
          View More
        </p>
      </div>
    </div>
  );
}
