import products from "@/app/datas/products.json";
import BuyButton from "@/components/productById/BuyButton";
import PictureAlbum from "@/components/productById/PictureAlbum";

type PageProps = {
  params: {
    id: string;
    title: string;
    category: string;
  };
};

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = params;
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <p className="font-lalezar text-neutral-700 lg:text-xl">
          محصولی با این نام یافت نشد
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center mt-[100px] lg:mt-[120px]">
      <div className="w-full px-2 lg:px-10 grid grid-cols-3 gap-4">
        <div className="w-full col-span-3 lg:col-span-1 flex justify-center lg:justify-end">
          <PictureAlbum images={product.imageURL} />
        </div>
        <div className="w-full col-span-3 lg:col-span-2 flex flex-col justify-start items-start">
          <h1 className="text-white text-2xl lg:text-4xl font-lalezar">
            {product.title}
          </h1>
          <p className="px-3 py-2 rounded bg-amber-700 text-white font-lalezar text-sm mt-4 mb-8">
            {product.category}
          </p>
          {product.details.map((detail, index) => (
            <div
              key={index}
              className="flex justify-start items-start gap-3 mb-2"
            >
              <p className="text-yellow-500 font-lalezar">{detail.key}:</p>
              <p className="text-white font-lalezar">{detail.value}</p>
            </div>
          ))}
          <p className="text-white font-lalezar text-lg mt-8">
            {product.description}
          </p>
          {product.priceBeforeDiscount !== product.priceAfterDiscount && (
            <p className="w-full mt-12 text-left font-lalezar line-through text-white text-xl">
              {product.priceBeforeDiscount?.toLocaleString()} تومان
            </p>
          )}
          <p className="w-full mt-4 text-left font-lalezar text-white text-3xl">
            {product.priceAfterDiscount?.toLocaleString()} تومان
          </p>
          <div className="w-full mt-10 flex justify-end items-center">
            <BuyButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
