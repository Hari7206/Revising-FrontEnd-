import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-black text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Style
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Shop the latest trends with premium quality and affordable prices.
        </p>
        <Link
          to="/product"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Featured Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Men</h3>
            <p className="text-gray-500 mb-4">
              Explore trending styles for men.
            </p>
            <Link to="/product" className="text-blue-500 font-medium">
              Shop →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Women</h3>
            <p className="text-gray-500 mb-4">
              Discover the latest fashion for women.
            </p>
            <Link to="/product" className="text-blue-500 font-medium">
              Shop →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Accessories</h3>
            <p className="text-gray-500 mb-4">
              Complete your look with accessories.
            </p>
            <Link to="/product" className="text-blue-500 font-medium">
              Shop →
            </Link>
          </div>

        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Big Sale 🔥
        </h2>
        <p className="text-gray-600 mb-6">
          Up to 50% off on selected items
        </p>
        <Link
          to="/product"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Explore Deals
        </Link>
      </div>

    </div>
  );
}

export default Home;