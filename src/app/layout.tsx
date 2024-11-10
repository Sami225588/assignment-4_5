// src/app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A fully responsive blogging website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#ff4545] min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-black flex items-center justify-between p-4 text-white fixed top-0 w-full z-10">
          <div className="flex items-center ">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnLjUIYm8uQW7HKujRllyMDssM7fIBrSBHA&s" 
              className="rounded-3xl h-10 w-auto mr-4" 
              alt="" 
            />
            <h1 className="text-xl  font-bold " >
            <Link href="#home" className='px-5'>HOME</Link>
            <Link href="#about" className='px-5'>ABOUT</Link>
            <Link href="#contact" className='px-5'>CONTACT</Link>

            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-black p-4 text-white">
          <p className="text-center ">&copy; 2024 Portfolio Website. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
