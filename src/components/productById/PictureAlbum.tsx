"use client";

import Image from "next/image";
import { useState } from "react";

interface PictureAlbumProps {
  images: string[];
}

const PictureAlbum = ({ images }: PictureAlbumProps) => {
  const [selectedImage, setSelectedImage] = useState(
    images[0] || "notFound.png"
  );
  return (
    <div className="w-full flex flex-col justify-start items-center max-w-[250px] lg:max-w-full gap-4">
      <div className="w-full aspect-square bg-neutral-700 rounded-xl">
        <Image
          src={`/${selectedImage}`}
          alt="Product Image"
          width={200}
          height={200}
          className="w-full aspect-square rounded-xl object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="w-full h-[60px] flex justify-start items-center gap-2 flex-wrap">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={`/${image}`}
                alt="Product Image"
                width={60}
                height={60}
                className={`w-[60px] cursor-pointer aspect-square rounded-sm object-cover ${
                  image !== selectedImage && "opacity-10"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PictureAlbum;
