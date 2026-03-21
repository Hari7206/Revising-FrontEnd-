import React from "react";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Trending Glasses in 2026",
      desc: "Stay ahead with the latest eyewear trends dominating this year.",
      date: "March 10, 2026",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Frame",
      desc: "A quick guide to finding frames that match your face shape.",
      date: "March 15, 2026",
    },
    {
      id: 3,
      title: "Why Quality Lenses Matter",
      desc: "Learn how good lenses protect your eyes and improve clarity.",
      date: "March 18, 2026",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>

            {/* Blog Content */}
            <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
            <h2 className="text-lg font-semibold mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {blog.desc}
            </p>

            {/* Read More */}
            <button className="text-blue-500 font-medium">
              Read More →
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Blog;