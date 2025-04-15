// app/full-page-bg/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';

export default function FullPageImage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/nextbackground.png')", // Replace with your full-page image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
      }}
    >
      {/* Main content container with background image */}
      <div
        ref={sectionRef}
        className={`w-full max-w-4xl mx-auto p-8 transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } transform bg-none bg-opacity-90 rounded-3xl shadow-2xl`}
      >
        {/* Content inside the "Welcome" box */}
        <h1 className="text-5xl font-semibold text-blue-500 text-center">
          Welcome to Next js Course
        </h1>
        <p className="mt-6 text-lg text-blue-500 text-center">
        Next.js is a popular React framework that allows you to build fast, scalable, and user-friendly web applications
        </p>
      </div>
    </div>
  );
}
