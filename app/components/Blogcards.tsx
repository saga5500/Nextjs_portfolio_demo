'use client';

import Image from 'next/image';

export default function BlogCards() {
  const cards = [
    {
      image: '/images/intro.png',
      title: 'Intro to Next.js',
      description: 'Learn the basics of routing, pages, and components in Next.js.',
    },
    {
      image: '/images/routing.png',
      title: 'Dynamic Routing',
      description: 'Understand dynamic routes and how to fetch data in Next.js apps.',
    },
    {
      image: '/images/deploying.png',
      title: 'Deploying Next.js',
      description: 'Best practices for building and deploying your app on Vercel.',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Next.js Course Blog Posts</h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
              <h4 className="font-bold text-xl mb-2">{card.title}</h4>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
