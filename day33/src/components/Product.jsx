import React from "react";
import { Link } from "react-router-dom";

function Product() {
  const products = [
    { id: 1, name: "Stylish Glasses", price: "₹999" },
    { id: 2, name: "Cool Sunglasses", price: "₹1299" },
    { id: 3, name: "Classic Frame", price: "₹799" },
    { id: 4, name: "Modern Specs", price: "₹1499" },
    { id: 5, name: "Trendy Shades", price: "₹1199" },
    { id: 6, name: "Premium Glasses", price: "₹1999" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Fake Image */}
            <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-3">{item.price}</p>

            {/* Button */}
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}

      </div>

      <div className="flex items-center justify-center gap-5 mt-10 ">
          <Link to='/Product/Girl' className="text-[2rem] text-pink-700">Girls products</Link>
          <Link to='/Product/Boy' className="text-[2rem] text-blue-700">Boys products</Link>
      </div>
    </div>
   
  );
}

export default Product;