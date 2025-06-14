"use client";

import { useSearchParams } from "next/navigation";

interface Product {
  id: number;
  title: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  imageURL: string[];
  category: string;
}

const usePaginatedProducts = (products: Product[], itemsPerPage = 12) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const totalItems = products.length;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = products.slice(startIndex, endIndex);

  return {
    page,
    totalItems,
    paginatedProducts,
  };
};

export default usePaginatedProducts;
