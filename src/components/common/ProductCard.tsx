import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slugify"; // adjust path as needed

interface ProductCardProps {
  id: number;
  title: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  imageURL: string | undefined;
  category: string;
}

export default function ProductCard({
  id,
  title,
  priceAfterDiscount,
  priceBeforeDiscount,
  imageURL,
  category
}: ProductCardProps) {
  return (
    <Link
      href={`/${slugify(category)}/${slugify(title)}/${slugify(`${id}`)}`}
      className="w-[250px] gap-2 cursor-pointer p-4 rounded-xl h-[350px] bg-neutral-800 hover:bg-neutral-700 shrink-0 flex flex-col justify-start group"
    >
      <div className="w-full aspect-square overflow-hidden rounded-2xl relative shrink-0">
        {priceAfterDiscount !== priceBeforeDiscount && (
          <div className="absolute z-10 w-[50px] top-0 left-0 rounded-tl-2xl rounded-br-2xl h-[30px] bg-yellow-500 flex justify-center items-center text-black text-sm">
            {(
              ((priceBeforeDiscount - priceAfterDiscount) * 100) /
              priceBeforeDiscount
            ).toFixed()}
            %
          </div>
        )}
        <Image
          src={imageURL ? `/${imageURL}` : "/notFound.png"}
          width={250}
          height={250}
          className="cursor-pointer w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-0"
          alt={`${category}/${title}`}
          priority={!imageURL}
          loading={imageURL ? "lazy" : undefined}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center gap-2">
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <p className="text-white w-full text-right text-sm font-bold">
            {title}
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <p className="text-neutral-400 text-xs line-through">
            {priceBeforeDiscount.toLocaleString()} تومان
          </p>
          <p className="text-yellow-500 font-bold">
            {priceAfterDiscount.toLocaleString()} تومان
          </p>
        </div>
      </div>
    </Link>
  );
}
