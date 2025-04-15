import Logo from '@/app/ui/sagar-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Iconexample from './Iconeexample'; // My new Icon
import SlideShow from './components/cards';
import Blogcards from 'app/components/Blogcards';
import Accordin from './components/Accordin';
import FullPage from './components/FullpageImage';
import FullPageImage from './components/Fullpage';
// Metadata writing 
export const metadata = {
  title: 'Sagar Portfolio',
  description: 'sagar portfolio in next js'
}

export default function Page() {
  return (
    <div>
      <main className="flex min-h-screen flex-col p-6">

        {/* Slideshow examples */}
        <SlideShow />

        {/* Main Content */}
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">

          {/* Left Side: Text and Button */}
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
              <strong>Welcome to Sagar Portfolio</strong> This is the example for the{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-500">
                Next.js Learn Course
              </a>
              , brought to you by Learning platform.
            </p>

            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="flex items-center justify-center md:w-3/5 h-full">
            <img
              src="/nextbackground.png" // Put this inside public folder
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <Blogcards/>
        <FullPageImage/>
        <Accordin/>
      </main>
    </div>
  );
}
