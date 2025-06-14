import ArchiveContainer from "@/components/landingPage/ArchiveContainer";
import BlogContainer from "@/components/landingPage/BlogContainer";
import DiscountsContainer from "@/components/landingPage/DiscountsContainer";
import LandingPage from "@/components/landingPage/LandingPage";
import MoharamContainer from "@/components/landingPage/MoharamContainer";
import NewProductsContainer from "@/components/landingPage/NewProductsContainer";
import ServicesCards from "@/components/services/Services";
import SwiperCarouselFeedbackContainer from "@/components/swiperFeedback/SwiperCarouselFeedbackContainer";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-8">
      <LandingPage />
      <DiscountsContainer />
      <SwiperCarouselFeedbackContainer />
      <MoharamContainer />
      <ServicesCards />
      <NewProductsContainer />
      <ArchiveContainer />
      <BlogContainer />
    </div>
  );
}
