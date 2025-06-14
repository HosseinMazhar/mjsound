"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
};

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];

    // Always include first page
    pages.push(1);

    if (currentPage - 1 > 2) {
      pages.push("left-ellipsis");
    } else if (currentPage - 1 === 2) {
      pages.push(2);
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage + 1 < totalPages - 1) {
      pages.push("right-ellipsis");
    } else if (currentPage + 1 === totalPages - 1) {
      pages.push(totalPages - 1);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)];
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex gap-2 my-6 items-center justify-center">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-[36px] h-[36px] cursor-pointer flex justify-center items-center rounded disabled:bg-yellow-700 bg-yellow-500 hover:bg-yellow-400"
      >
        <ChevronRight size={16} className="text-black" />
      </button>

      {pageNumbers.map((page, idx) => {
        const isEllipsis = typeof page === "string";
        const isEdgePage = page === 1 || page === totalPages || isEllipsis;

        // Hide first/last/ellipsis on small screens
        const hiddenOnMobile = isEdgePage ? "hidden md:inline" : "";

        if (isEllipsis) {
          return (
            <span
              key={page + idx}
              className={`px-3 py-1 text-white ${hiddenOnMobile}`}
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-[36px] h-[36px] cursor-pointer rounded ${hiddenOnMobile} ${
              currentPage === page
                ? "bg-neutral-700 text-white"
                : "bg-neutral-950 text-white hover:bg-neutral-700"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-[36px] h-[36px] cursor-pointer flex justify-center items-center rounded disabled:bg-yellow-700 bg-yellow-500 hover:bg-yellow-400"
      >
        <ChevronLeft size={16} className="text-black" />
      </button>
    </div>
  );
}
