'use client';

import Link from 'next/link';
import Iconexample from 'app/Iconeexample'; // Ensure this path is correct

export default function Header() {
  return (
    <header className="bg-blue-500 w-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Iconexample className="text-white text-3xl" />
        <nav>
          <ul className="flex gap-6 text-black font-bold">
            <li>
              <Link href="/" className="text-lg hover:text-yellow-500 font-bold">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-yellow-500 font-bold">About</Link>
            </li>
            <li>
              <Link href="/projects" className="text-lg hover:text-yellow-500 font-bold">Projects</Link>
            </li>
            <li>
              <Link href="/blog" className="text-lg hover:text-yellow-500 font-bold">Blog</Link>
            </li>
            <li>
              <Link href="/Contact" className="text-lg hover:text-yellow-500 font-bold">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
