// pages/blog/blogpost.tsx
'use client'; // This is a client component
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import BackButton from 'app/components/button'; // Correct import with uppercase 'B'

// Function to handle back navigation


const BlogPost = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">First Blog Post</h2>
          <p className="text-gray-700 mb-4">
            This is the summary of the first blog post. It explains how to set up a Next.js project and create your first pages.
          </p>
          <Link href="/blog/first" className="text-blue-500 hover:text-blue-700">
            Read More
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Second Blog Post</h2>
          <p className="text-gray-700 mb-4">
            This is the summary of the second blog post. It covers advanced Next.js features such as SSR and SSG.
          </p>
          <Link href="/blog/second" className="text-blue-500 hover:text-blue-700">
            Read More
          </Link>
        </div>

        {/* Back Button */}
        <div>
        <BackButton onClick={() => router.push('/')} />

        </div>
      </div>
    </div>
  );
};

export default BlogPost;
