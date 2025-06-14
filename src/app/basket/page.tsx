"use client";

import Instagram from "@/components/icons/InstagramIcon";
import Telegram from "@/components/icons/Telegram";
import BuyingCard from "@/components/shoping/BuyingCard";
import { useBasketStore } from "@/store/useBasketStore";

const ProductsPage = () => {
  const basket = useBasketStore((state) => state.basket);

  const handlePrint = () => {
    window.print();
  };

  if (!basket.length) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-center font-lalezar text-neutral-600">
          سبد خرید خالی است
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mt-[80px] flex flex-col justify-start items-center gap-8">
      <header className="w-full flex justify-between items-center pt-14 pb-4 border-b-4 border-neutral-800 px-4">
        <h1 className="font-lalezar text-yellow-500 text-2xl lg:text-4xl">
          لیست خرید
        </h1>
      </header>
      <div
        id="printPage"
        className="w-full flex flex-col justify-start items-center gap-4"
      >
        <div className="w-[250px] md:w-[516px] lg:w-[782px] xl:w-[1048px] flex flex-wrap justify-start items-start gap-4">
          {basket.map((basketItem) => (
            <BuyingCard
              key={basketItem.id}
              id={basketItem.id}
              description={basketItem.description}
              title={basketItem.title}
              priceAfterDiscount={basketItem.priceAfterDiscount}
              priceBeforeDiscount={basketItem.priceBeforeDiscount}
              imageURL={basketItem.imageURL ? basketItem.imageURL : undefined}
              category={basketItem.category}
              quantity={basketItem.quantity}
            />
          ))}
        </div>
        <div className="w-full py-4 px-2 bg-purple-600 rounded-2xl flex flex-col justify-center items-center">
          <p className="w-full text-center font-lalezar text-white">
            مجموع خرید
          </p>
          <p className="w-full text-center font-lalezar text-white text-xl mt-2">
            {basket
              .reduce(
                (total, item) =>
                  total + item.quantity * item.priceAfterDiscount,
                0
              )
              .toLocaleString()}
          </p>
          <p className="w-full text-center font-lalezar text-white text-sm">
            تومان
          </p>
          <button
            onClick={handlePrint}
            className="mt-4 px-6 py-2 bg-white text-purple-600 font-lalezar rounded-lg"
          >
            چاپ فاکتور
          </button>
          <p className="w-[250px] text-center font-lalezar text-white text-sm mt-2">
            بعد از دانلود پرینت سبد خرید، آن را با ما به اشتراک بگذارید تا در
            انجام خرید شما را راهنمایی کنیم.
          </p>
          <div className="w-[250px] mt-4 flex gap-4 justify-center items-center">
            <Telegram />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
