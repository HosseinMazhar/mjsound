import Image from "next/image";

export default function ProductCard() {
  return (
    <div
      className="w-[250px] gap-2 cursor-pointer p-4 rounded-xl h-[350px] bg-neutral-800 shrink-0 flex flex-col justify-start group"
    >
      <div className="w-full aspect-square overflow-hidden rounded-2xl relative">
        <div className="absolute z-10 w-[50px] top-0 left-0 rounded-tl-2xl rounded-br-2xl h-[30px] bg-yellow-500 flex justify-center items-center text-black text-sm">
          10%
        </div>
        <Image
          src="/products/powermixer-dynacord-1000-grid1.jpg"
          width={250}
          height={250}
          className="cursor-pointer w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-0"
          alt="product"
        />
      </div>
      <p className="text-white w-full text-right text-sm">
        پاورکورد دایناکورد 1000 گرید 1
      </p>
      <p className="text-neutral-400 w-full text-left text-sm line-through">
        10,000,000
      </p>
      <p className="text-white w-full text-right text-xl font-bold">
        9,000,000 تومان
      </p>
    </div>
  );
}
