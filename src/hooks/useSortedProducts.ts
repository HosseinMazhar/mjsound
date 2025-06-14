import { useMemo } from "react";

interface Product {
  id: number;
  title: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  imageURL: string[];
  category: string;
  soldNumber: number;
  rate: string;
}

type SortOption =
  | "default"
  | "cheapest"
  | "mostExpensive"
  | "mostPopular"
  | "bestSelling";

const useSortedProducts = (
  products: Product[],
  sortOption: SortOption
): Product[] => {
  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (sortOption) {
      case "cheapest":
        return sorted.sort(
          (a, b) => a.priceAfterDiscount - b.priceAfterDiscount
        );
      case "mostExpensive":
        return sorted.sort(
          (a, b) => b.priceAfterDiscount - a.priceAfterDiscount
        );
      case "mostPopular":
        return sorted.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
      case "bestSelling":
        return sorted.sort((a, b) => b.soldNumber - a.soldNumber);
      default:
        return sorted;
    }
  }, [products, sortOption]);

  return sortedProducts;
};

export default useSortedProducts;
