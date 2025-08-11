import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/navbar";
import { LuSearch } from "react-icons/lu";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data.products);
        setProducts(data.products);
        setLoading(false); // ✅ stop loading after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto bg-gray-100">
        <Navbar />
        <div className="px-4 p-5 gap-5">
          {/* Search Box */}
          <div className="mt-4 ps-25">
            <div className="flex rounded-full overflow-hidden">
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search"
                className="px-3 py-2 shadow-lg border border-gray-200 outline-none bg-white text-gray-800 placeholder-gray-400"
              />
              <LuSearch className="bg-[#4E73DF] rounded-r-lg text-white p-2 w-[40px] h-[40px]" />
            </div>
          </div>

          {/* ✅ Spinner while loading */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            </div>
          ) : (
            <div className="px-20 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-2xl flex flex-col cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="p-4 flex justify-center items-center">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="h-48 object-contain p-3 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col p-3 justify-start space-y-4 flex-1 mt-3">
                      <p className="text-white text-center p-1 bg-indigo-800 text-xs w-fit rounded-3xl mt-1">
                        {product.category}
                      </p>
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-indigo-800 font-bold text-sm">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
