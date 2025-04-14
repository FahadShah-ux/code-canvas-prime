
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Server, Layout, Monitor, Database, Star, Rocket, Globe, Users } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "About Me | JS.dev";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about my background, skills, and the journey that led me to become a software engineer.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <div className="space-y-4">
                <p>
                  Hello! I'm a passionate software engineer with a focus on creating exceptional digital experiences. My journey in technology began over a decade ago when I built my first website as a teenager. What started as curiosity quickly evolved into a lifelong passion.
                </p>
                <p>
                  After earning my degree in Computer Science, I joined a small startup where I wore many hats and gained experience across the full development stack. This foundation helped me develop a holistic approach to software engineering that considers both technical excellence and user needs.
                </p>
                <p>
                  Over the years, I've had the privilege of working with companies ranging from early-stage startups to Fortune 500 enterprises. Each experience has taught me valuable lessons about building scalable, maintainable software and collaborating effectively with cross-functional teams.
                </p>
                <p>
                  Today, my work focuses on creating web applications that are not only technically sound but also accessible, performant, and delightful to use. I'm particularly passionate about JavaScript ecosystems and modern web technologies.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-lg p-6 border border-border h-fit"
            >
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  <span>Based in San Francisco, California</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-5 w-5 text-primary mr-3" />
                  <span>8+ years of professional experience</span>
                </li>
                <li className="flex items-center">
                  <Rocket className="h-5 w-5 text-primary mr-3" />
                  <span>Worked with 20+ successful projects</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span>Led multiple engineering teams</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-primary mr-3" />
                  <span>Open source contributor</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'REST API'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-8">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-primary/30">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Senior Full-Stack Engineer</h3>
                  <p className="text-primary font-medium">Tech Innovations Inc.</p>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                </div>
                <p className="text-muted-foreground">
                  Lead engineer for enterprise SaaS platform used by Fortune 500 companies. Architected scalable backend services and optimized React frontend performance. Managed a team of 5 engineers and collaborated with product and design teams to deliver new features.
                </p>
              </div>
              
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-primary/30">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Frontend Lead</h3>
                  <p className="text-primary font-medium">WebSolutions Agency</p>
                  <p className="text-sm text-muted-foreground">2017 - 2020</p>
                </div>
                <p className="text-muted-foreground">
                  Led frontend development for client projects across e-commerce, fintech, and media industries. Implemented modern JavaScript frameworks, responsive designs, and accessibility best practices. Mentored junior developers and established code standards.
                </p>
              </div>
              
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[2px] before:bg-primary/30">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <p className="text-primary font-medium">StartupLaunch Inc.</p>
                  <p className="text-sm text-muted-foreground">2015 - 2017</p>
                </div>
                <p className="text-muted-foreground">
                  Full-stack developer for an early-stage startup. Built MVPs and iterated on features based on user feedback. Worked across the stack using JavaScript, Node.js, and MongoDB. Implemented CI/CD pipelines and testing strategies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
