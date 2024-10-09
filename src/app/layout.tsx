// src/app/layout.tsx
import type { Metadata } from 'next';
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
      <body className="puff-in-center bg-custom min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-500 flex items-center justify-between p-4 text-white fixed top-0 w-full z-10">
          <div className="flex items-center">
            <img 
              src="https://i.pinimg.com/736x/33/85/ba/3385ba649152c101df1a13b21241c3bd.jpg" 
              className="rounded-3xl h-10 w-auto mr-4" 
              alt="" 
            />
            <h1 className="text-xl font-bold">SAMI&apos;S Blogging Website</h1>
          </div>
          <img 
            src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg" 
            className="rounded-3xl h-10 w-auto" 
            alt="Right Image" 
          />
        </header>

        {/* Main Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-500 p-4 text-white">
          <p className="text-center ">&copy; 2024 My Blog. All rights reserved.
          {/* <a href="" className='font-bold uppercase  text-black text-center p-3 rounded-3xl transition mt-4  '>about me</a> */}
         <button className="btn relative ml-16 inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">    <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white p-2  z-10"><a target='_blank' href="https://cv2255.vercel.app/">ABOUT ME</a>  </span></button>
          </p>
        </footer>
      </body>
    </html>
  );
}
