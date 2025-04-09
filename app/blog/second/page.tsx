// pages/blog/second/page.tsx

import React from 'react';
import Link from 'next/link';

const SecondBlog = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Main Blog Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
        My Second Blog Post
      </h1>

      {/* Blog Post Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        {/* Blog Post Title */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          How Next.js Helps with SEO
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-800 mb-4">
          Next.js is an incredible framework for SEO, providing a range of features to help optimize your website. Some key benefits include:
        </p>

        {/* SEO Benefits List */}
        <ul className="list-disc pl-6 text-lg text-gray-800 mb-4">
          <li>Automatic Static Optimization</li>
          <li>Server-Side Rendering (SSR)</li>
          <li>Image Optimization</li>
          <li>Built-in Head Management</li>
        </ul>

        {/* Detailed Paragraphs */}
        <p className="text-lg text-gray-800 mt-4">
          One of the main reasons I love Next.js is its ability to generate static sites that are SEO-friendly out of the box. By rendering pages on the server before sending them to the client, Next.js ensures that search engines can easily crawl and index your content.
        </p>
        
        <p className="text-lg text-gray-800 mt-4">
          In this post, I'll walk you through how Next.js can help improve your SEO and why it's a great choice for building SEO-friendly websites.
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

export default SecondBlog;
