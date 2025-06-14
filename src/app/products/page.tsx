"use client";

import { useState } from "react";
import Pagination from "@/components/common/Pagination";
import ProductCard from "@/components/common/ProductCard";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import usePaginatedProducts from "@/hooks/usePaginatedProducts";
import useSortedProducts from "@/hooks/useSortedProducts";
import { ArrowDownNarrowWide } from "lucide-react";

type SortOption =
  | "default"
  | "cheapest"
  | "mostExpensive"
  | "mostPopular"
  | "bestSelling";

const sortOptions: SortOption[] = [
  "default",
  "cheapest",
  "mostExpensive",
  "mostPopular",
  "bestSelling",
];

const isSortOption = (value: string): value is SortOption => {
  return sortOptions.includes(value as SortOption);
};

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const { filteredProducts, category } = useFilteredProducts();
  const sortedProducts = useSortedProducts(filteredProducts, sortOption);
  const { paginatedProducts, totalItems, page } = usePaginatedProducts(
    sortedProducts,
    12
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (isSortOption(value)) {
      setSortOption(value);
    }
  };

  if (!paginatedProducts.length) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-center font-lalezar text-neutral-600">
          محصولی جهت نمایش وجود ندارد
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mt-[80px] flex flex-col justify-start items-center gap-8">
      <header className="w-full flex justify-between items-center pt-14 pb-4 border-b-4 border-neutral-800 px-4">
        <h1 className="font-lalezar text-yellow-500 text-2xl lg:text-4xl">
          {category || "محصولات"}
        </h1>
        <div className="flex items-center justify-center gap-1">
          <ArrowDownNarrowWide size={24} className="text-white" />
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="rounded-md py-1 text-sm bg-neutral-700 text-white font-lalezar"
          >
            <option value="default">بدون فیلتر</option>
            <option value="cheapest">ارزان‌ترین</option>
            <option value="mostExpensive">گران‌ترین</option>
            <option value="mostPopular">محبوب‌ترین</option>
            <option value="bestSelling">پرفروش‌ترین</option>
          </select>
        </div>
      </header>

      <div className="w-[250px] md:w-[516px] lg:w-[782px] xl:w-[1048px] flex flex-wrap justify-start items-start gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            priceAfterDiscount={product.priceAfterDiscount}
            priceBeforeDiscount={product.priceBeforeDiscount}
            imageURL={product.imageURL.length ? product.imageURL[0] : undefined}
            category={product.category}
          />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalItems={totalItems}
        itemsPerPage={12}
      />
    </div>
  );
};

export default ProductsPage;
