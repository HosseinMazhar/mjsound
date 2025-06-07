import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="w-[300px] gap-2 cursor-pointer p-4 rounded-xl h-[450px] bg-white shrink-0 flex flex-col justify-start group">
      <div className="w-full h-[200px] overflow-hidden rounded-2xl relative shrink-0">
        <Image
          src="/blog/Blog-Active-Passive-Speaker.jpg"
          width={250}
          height={150}
          className="cursor-pointer w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110 z-0 shrink-0"
          alt="product"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <p className="text-black font-lalezar w-full text-right text-lg font-bold">
            باند اکتیو و پسیو چه تفاوتی دارد؟
          </p>
          <p className="font-lalezar text-neutral-600">
            هنگامی که مشغول خرید یک سیستم صوتی هستید با گزینه های مختلفی روبرو
            میشوید که این امر ممکن است باعث سردرگمی شما گردد .در این مطلب
            میخواهیم درباره تفاوت بین باند اکتیو و پسیو با شما صحبت کنیم ...
          </p>
        </div>
        <div className="w-full flex justify-end items-center">
          <button className="px-4 py-3 rounded-lg bg-purple-700 hover:bg-purple-900 cursor-pointer text-white font-lalezar">
            مشاهده مطلب
          </button>
        </div>
      </div>
    </div>
  );
}
