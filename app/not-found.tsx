// pages/404.tsx
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-indigo-100 px-6">
      <div className="text-center animate-fade-in-down">
        <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg">404</h1>
        <p className="text-2xl mt-4 font-semibold text-gray-800">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
