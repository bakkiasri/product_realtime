import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/navbar";
import NotDataFound from "../layout/Nodata";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-75 items-center justify-center w-full   font-semibold">
        <NotDataFound />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Category Heading */}
      <div className="p-3">
        <p className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Category{" "}
          <strong className="text-[80px]">{product.category}</strong>
        </p>
      </div>

      {/* Background Section */}
      <div
        className="flex justify-center items-center bg-fixed bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${product.thumbnail})` }}
      >
        <h2 className="text-[100px] text-[#290E6B] font-bold drop-shadow-lg">
          {product.title}
        </h2>
      </div>

      {/* Details Section */}
      <div className="flex flex-col bg-indigo-800 md:flex-row items-center justify-center w-full min-h-screen py-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white md:p-4 rounded-2xl">
          <div className=" justify-center items-center flex flex-col gap-0 md:gap-5 bg-white  ">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-[600px] object-contain rounded-xl"
            />
          </div>

          <div className="flex-2 justify-center items-center  sm:flex-col gap-5 bg-white border-s-2 border-gray-300 p-6 md:ml-8 mt-6 md:mt-0 max-w-lg">
            <p className="text-indigo-800 text-center font-medium text-4xl leading-relaxed">
              {product.title}
            </p>
            <p className="text-gray-800 font-normal text-xl leading-relaxed">
              {product.description}
            </p>
            <p className="text-xl font-semibold mb-2">
              Price:{" "}
              <span className="text-indigo-600 text-4xl">${product.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
