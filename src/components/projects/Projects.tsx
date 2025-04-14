
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

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
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. These projects showcase my expertise with different technologies and my approach to problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/projects" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            View All Projects
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
