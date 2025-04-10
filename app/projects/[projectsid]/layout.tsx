import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Sagar Bishta’s Portfolio Website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">

        {/* --- Header --- */}
        <header className="bg-blue-600 text-white p-4 text-center shadow-md">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </header>

        {/* --- Page Content --- */}
        <main className="min-h-screen px-4 md:px-8">
          {children}
        </main>

        {/* --- Footer --- */}
        <footer className="bg-gray-900 text-white text-center p-4 mt-10">
          <p>&copy; {new Date().getFullYear()} Sagar Bishta. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
