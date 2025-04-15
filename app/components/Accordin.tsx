'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type AccordionItem = {
  title: string;
  content: string;
};

const data: AccordionItem[] = [
    {
        title: 'What is Next.js?',
        content: 'Next.js is a React framework for building fast and user-friendly web applications.',
      },
      {
        title: 'Why use Tailwind CSS?',
        content: 'Tailwind CSS is utility-first and allows for fast and consistent styling.',
      },
      {
        title: 'Can I use TypeScript?',
        content: 'Yes! Next.js has built-in support for TypeScript, making development safer and cleaner.',
      },
      {
        title: 'What is Server-Side Rendering (SSR)?',
        content: 'Server-Side Rendering is the process of rendering a web page on the server rather than the client, resulting in faster load times and better SEO.',
      },
      {
        title: 'What is Static Site Generation (SSG)?',
        content: 'Static Site Generation pre-renders pages at build time, which makes it great for static content that doesn’t change often, improving performance.',
      },
      {
        title: 'What are API Routes in Next.js?',
        content: 'API Routes allow you to create backend functionality directly within a Next.js app, without needing an external server.',
      },
      {
        title: 'What is the difference between SSR and SSG?',
        content: 'SSR renders pages on the server for each request, while SSG generates static pages at build time, making SSG faster but less dynamic.',
      },
      {
        title: 'How can I deploy a Next.js application?',
        content: 'You can deploy a Next.js app using platforms like Vercel, Netlify, or any other platform that supports static and dynamic hosting.',
      },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-gray-100 px-4 sm:px-10 lg:px-20">
      <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
        {data.map((item, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-all"
            >
              <span className="text-lg font-semibold text-gray-900">{item.title}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-700 text-sm animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
