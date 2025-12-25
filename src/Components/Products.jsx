import React, { useState } from "react";
import { products } from "../assests/data";

const Products = () => {
  const [brandFilter, setBrandFilter] = useState("All Brands");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [priceFilter, setPriceFilter] = useState("All Prices");

  const filteredProducts = products.filter((item) => {
    const brandMatch =
      brandFilter === "All Brands" || item.brand === brandFilter;
    const categoryMatch =
      categoryFilter === "All Categories" || item.category === categoryFilter;
    let priceMatch = true;
    if (priceFilter === "Below 1000") priceMatch = item.price < 1000;
    else if (priceFilter === "1000 - 3000")
      priceMatch = item.price >= 1000 && item.price <= 3000;

    return brandMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="text-gray-400 mb-6">
          Browse and filter products ({filteredProducts.length} products)
        </p>

        <div className="bg-gray-900 p-5 rounded-lg grid grid-cols-3 gap-4 mb-8">
          <select
            className="bg-gray-800 p-2 rounded outline-none"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option>All Brands</option>
            <option>Zara</option>
            <option>Zudio</option>
            <option>Louis Vuitton</option>
          </select>

          <select
            className="bg-gray-800 p-2 rounded outline-none"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All Categories</option>
            <option>Mens</option>
            <option>Womens</option>
            <option>Kids</option>
          </select>

          <select
            className="bg-gray-800 p-2 rounded outline-none"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option>All Prices</option>
            <option>Below 1000</option>
            <option>1000 - 3000</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-black px-2 py-1 text-xs rounded">
                  {item.brand}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.category}</p>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-medium">₹{item.price}</p>
                  <p className="text-yellow-400">★ {item.rating}</p>
                </div>

                <button className="mt-4 w-full bg-white text-black py-2 rounded font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
