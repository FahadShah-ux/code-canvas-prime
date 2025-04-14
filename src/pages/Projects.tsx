
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard, { Project } from '../components/projects/ProjectCard';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'Full-stack dashboard application with real-time analytics and inventory management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'Machine learning powered application that generates custom content based on user inputs.',
    image: 'https://images.unsplash.com/photo-1677442135133-3e3c5eea2e32?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'OpenAI API', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '3',
    title: 'Fitness Tracker App',
    description: 'Mobile fitness application with workout plans, progress tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Firebase', 'GraphQL', 'Expo'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '4',
    title: 'Real Estate Platform',
    description: 'Web platform for browsing, buying, and selling properties with interactive maps and filters.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'MapBox API'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '5',
    title: 'Social Media Analytics Tool',
    description: 'Dashboard for tracking social media performance across multiple platforms with custom reports.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'D3.js', 'Node.js', 'Social APIs'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '6',
    title: 'Task Management System',
    description: 'Collaborative project management tool with drag-and-drop interface and team features.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Redux', 'Firebase', 'Material UI'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

const ProjectsPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Projects | JS.dev";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-4 md:px-0">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's a comprehensive collection of my work, showcasing various technologies and solutions I've built throughout my career.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
