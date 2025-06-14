"use client";

import React, { Suspense } from "react";
import ProductsPage from "./ProductPage";

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsPage />
    </Suspense>
  );
}