'use client';

import React, { useEffect, useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "Sagar Thapa  ",
    role: "Web Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    review: "This Next.js course is amazing! Practical content and real-world projects."
  },
  {
    id: 2,
    name: "Sumit Sharma",
    role: "Frontend Engineer",
    avatar: "https://i.pravatar.cc/150?img=2",
    review: "Clear explanations and great examples. Confident to build apps now!"
  },
  {
    id: 3,
    name: "Riya Singh",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=10",
    review: "Highly recommended! Perfect structure and pace."
  },
  {
    id: 4,
    name: "Kiran Thapa",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=4",
    review: "Well explained with step-by-step learning!"
  },
  {
    id: 5,
    name: "Alina Sharma",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=5",
    review: "Great teaching style and solid projects!"
  }
];

export default function ReviewCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length]
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-8 px-4 bg-gray-100">
      {visibleReviews.map((review) => (
        <div
          key={review.id}
          className="bg-white shadow-lg rounded-xl w-full sm:w-[300px] p-6 transition-transform duration-500"
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center">{review.name}</h3>
          <p className="text-sm text-gray-500 text-center mb-2">{review.role}</p>
          <p className="text-gray-700 italic text-center">"{review.review}"</p>
        </div>
      ))}
    </div>
  );
}
