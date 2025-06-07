import Image from "next/image";
import ButtonsContainer from "./ButtonsContainer";

export default function LandingPage() {
  return (
    <div className="w-full h-screen flex flex-col xl:flex-row justify-center items-center gap-12">
      <Image
        src={"/landingPage/landingPage.png"}
        width={250}
        height={250}
        alt="speaker"
        priority
        className="animate-pulseGrowShrink w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]"
      />
      <div className="w-full xl:w-fit flex flex-col justify-center xl:items-start items-center gap-2">
        <h1 className="text-3xl xl:text-6xl font-lalezar text-white">
          فروشگاه تجهیزات صوتی
        </h1>
        <h1 className="text-5xl xl:text-9xl font-lalezar text-yellow-400">
          ام جی ساند
        </h1>
      </div>
      <ButtonsContainer />
    </div>
  );
}
