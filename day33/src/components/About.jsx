import React from "react";

function About() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto h-screen">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6">
        About Us
      </h1>

      {/* Intro */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        We’re on a mission to make shopping simple, affordable, and accessible 
        for everyone. Quality products, modern style, and a smooth experience — 
        that’s what we stand for.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        
        {/* Card 1 */}
        <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-500">
            To deliver high-quality products at prices that don’t break your wallet.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-500">
            To become a trusted brand that customers rely on for everyday needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
          <p className="text-gray-500">
            Fast delivery, secure payments, and a seamless shopping experience.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Built for You ❤️
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you're browsing or buying, we make sure your experience is smooth,
          fast, and enjoyable from start to finish.
        </p>
      </div>

    </div>
  );
}

export default About;