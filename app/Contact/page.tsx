// pages/contact.tsx
'use client'; // This is a client component
import BackButton from "../components/button";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Me</h1>
        <p className="text-center text-gray-600 mb-8">
          Have any questions or collaboration ideas? Feel free to send me a message.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="eg: Ram Sagar"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Adding margin and styling to the Back Button */}
        <div className="mt-6 flex justify-center">
          <BackButton onClick={() => router.push('/')} />
        </div>
      </div>
    </div>
  );
}
