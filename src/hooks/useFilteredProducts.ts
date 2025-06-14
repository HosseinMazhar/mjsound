"use client";

import { useSearchParams } from "next/navigation";
import products from "@/app/datas/products.json";

const useFilteredProducts = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const filteredProducts = products.filter((product) =>
    category ? product.category === category : true
  );

  return { filteredProducts, category };
};

export default useFilteredProducts;
