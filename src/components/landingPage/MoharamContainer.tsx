import Image from "next/image";
import MoharamProducts from "./MoharamProducts";

const MoharamContainer = () => {
  return (
    <div className="w-full bg-neutral-950 h-[650px] lg:h-[500px] rounded-2xl py-8 px-4 flex-col justify-center lg:flex-row flex md:justify-between items-center gap-5">
      <Image
        src={"/landingPage/yahossein.png"}
        width={400}
        height={400}
        alt="ya-hossein"
        className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] object-contain shrink-0"
      />
      <div className="w-full overflow-x-hidden">
        <MoharamProducts />
      </div>
    </div>
  );
};

export default MoharamContainer;
