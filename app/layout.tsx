import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Footer from 'app/components/footer';      // ✅ Import Footer
import Header from 'app/components/header';      // ✅ Import Header

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header /> {/* ✅ Header shown on all pages */}

        <main className="flex-grow">
          {children}
        </main>

        <Footer /> {/* ✅ Footer at bottom */}
      </body>
    </html>
  );
}
