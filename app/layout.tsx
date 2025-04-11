import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Footer from 'app/components/footer';  // ✅ Import Footer
import Header from 'app/components/header';  // ✅ Import Header
import Head from 'next/head';               // ✅ Import Head for metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Metadata */}
        <title>Sagar Web Developer</title>
        <meta name="description" content="Sagar  is a passionate  and aspiring web developer from Nepal. Learning Next.js and building scalable web applications." />
        <meta name="author" content="Sagar " />
        <meta name="keywords" content="Sagar ,  Web Developer, Next.js, Nepal, Scalable Web Applications" />
        
        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Sagar  Web Developer" />
        <meta property="og:description" content="Sagar  is a passionate  and aspiring web developer from Nepal. Learning Next.js and building scalable web applications." />
        <meta property="og:type" content="profile" />
        
        {/* Twitter Card Metadata */}
        <meta name="twitter:title" content="Sagar  Web Developer" />
        <meta name="twitter:description" content="Sagar is a passionate and aspiring web developer from Nepal. Learning Next.js and building scalable web applications." />
        <meta name="twitter:image" content="https://example.com/your-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
