// src/app/page.tsx
import { url } from 'inspector';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'MY CV',
    description: 'My Curriculum Vitae',
    image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cv-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--account-recruitment-documents-pack-human-resorces-illustrations-3892865.png?f=webp',
    url: "https://cv2255.vercel.app/"
    
  },
  
  {
    id: 3,
    title: 'CREATE YOUR RESUME',
    description: 'Generate Your Resume For Free',
    image: 'https://www.shutterstock.com/image-vector/online-job-research-hr-resume-600nw-2169427091.jpg',
    url: "https://milestone-3-4-5.vercel.app/"
  },
  {
    id: 2,
    title: 'BLOG  WEBSITE',
    description: 'Check Out My Gym website',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/035/947/339/small_2x/blog-3d-illustration-icon-png.png',
    url: "https://gymweb2255.vercel.app/"
  }
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-white capitalize mb-8">
        Welcome to my Portfolio
      </h2>
      <div className="grid text-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className="border bg-black  text-center text-white rounded-lg overflow-hidden transform hover:scale-105 shadow-2xl transition-transform duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-white font-bold">{blog.title}</h3>
              <p className="mt-2 text-white">{blog.description}</p>
              <div className="relative px-24 h-10  inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <Link target="_blank" href={blog.url}>
                  <span className="w-full text-black ">VIEW</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
