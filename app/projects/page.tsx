// pages/projects.tsx
'use client'; // This is a client component
import { useRouter } from 'next/navigation'; // Importing useRouter
import Link from 'next/link';
import Image from 'next/image'; // Importing next/image for optimized images
import BackButton from "../components/button"; // Importing the back button component

const ProjectCard = ({ title, description, image, link }: { title: string, description: string, image: string, link: string }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <Image
        className="w-full h-48 object-cover"
        src={image}  // Correct image path
        alt={title}
        width={500}  // Set appropriate width and height
        height={200} // Set appropriate width and height
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link href={link} className="text-blue-600 hover:text-blue-800 mt-3 block">
          Link
        </Link>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const router = useRouter(); // Initialize the router

  const projects = [
    {
      title: 'Project 1',
      description: 'A penguin application from html css',
      image: '/penguin.png',  // Correct image path from public folder
      link: 'https://github.com/saga5500/Responsive_Web_Design_Projects/tree/master/Bulding-A-Penguin15',  // Project link
    },
    {
      title: 'Project 2',
      description: 'A employee management system from the Java',
      image: '/emp1.png',  // Correct image path from public folder
      link: 'https://github.com/saga5500/Employee_management_system',
    },
    {
      title: 'Project 3',
      description: 'A employee managemennt system in the Node js',
      image: '/emp2.png',  // Correct image path from public folder
      link: 'https://github.com/saga5500/emp_node',
    },
    {
      title: 'Project 4',
      description: 'A registration application  from the html css',
      image: '/registration.png',  // Correct image path from public folder
      link: 'https://github.com/saga5500/Responsive_Web_Design_Projects/tree/master/Building-A-Registration-Form4',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {/* Back Button at the Bottom */}
      <div className="mt-6 flex justify-center">
        <BackButton onClick={() => router.push('/')} />
      </div>
    </div>
  );
}
