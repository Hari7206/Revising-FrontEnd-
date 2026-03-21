import React from "react";

function Girl() {
  const products = [
    { id: 1, name: "Pink Stylish Frame", price: "₹999" },
    { id: 2, name: "Cat Eye Sunglasses", price: "₹1299" },
    { id: 3, name: "Golden Elegant Frame", price: "₹1499" },
    { id: 4, name: "Trendy Round Glasses", price: "₹899" },
    { id: 5, name: "Luxury Black Shades", price: "₹1999" },
    { id: 6, name: "Minimal Transparent Frame", price: "₹1099" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Girls Collection 👗
      </h1>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-pink-100 rounded mb-4 flex items-center justify-center">
              <span className="text-pink-400">Image</span>
            </div>

            {/* Info */}
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-3">{item.price}</p>

            {/* Button */}
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Girl;