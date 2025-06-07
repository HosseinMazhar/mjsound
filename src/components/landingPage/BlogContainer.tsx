import BlogCards from "./BlogCards";
import { BookOpen } from "lucide-react";

const BlogContainer = () => {
  return (
    <div className="w-full bg-purple-900 h-[750px] lg:h-[500px] rounded-2xl py-8 px-4 flex-col justify-center lg:flex-row flex md:justify-between items-center gap-5">
      <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center">
        <BookOpen className="text-white size-[150px] lg:size-[180px]" />
        <p className="text-white font-lalezar text-2xl lg:text-4xl">مطالب بلاگ</p>
      </div>
      <div className="w-full overflow-x-hidden">
        <BlogCards />
      </div>
    </div>
  );
};

export default BlogContainer;
