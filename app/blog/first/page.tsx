// pages/blog.tsx

import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Main Blog Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
        My First Blog Post
      </h1>

      {/* Blog Post Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        {/* Blog Post Title */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Why Next.js is Awesome
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-800 mb-4">
          Next.js is a React framework that provides a lot of functionality out of the box, such as:
        </p>

        {/* Features List */}
        <ul className="list-disc pl-6 text-lg text-gray-800 mb-4">
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>File-based routing</li>
        </ul>

        {/* Detailed Paragraphs */}
        <p className="text-lg text-gray-800 mt-4">
          I decided to use Next.js for my blog because it simplifies React app development with built-in optimizations and features. It's also SEO-friendly, which is important for my blog.
        </p>
        
        <p className="text-lg text-gray-800 mt-4">
          In this post, I'll explain the basics of Next.js and how easy it is to get started with a project.
        </p>

        {/* Back to All Posts Link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
