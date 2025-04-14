
import { motion } from 'framer-motion';
import { TypeAnimation } from './TypeAnimation';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/ac0a0a46-8cab-48a1-8263-45f6c1fbb8ba.png"
          alt="Software Engineering Workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 dark:from-black/90 dark:via-black/80 dark:to-black/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h2 className="text-sm md:text-base text-primary font-medium mb-3">
            Hello, my name is
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            JavaScript Developer
          </h1>
          <div className="h-12 md:h-16">
            <TypeAnimation
              phrases={["Frontend Engineer", "React Developer", "Backend Specialist", "Full-Stack Engineer"]}
              className="text-xl md:text-2xl lg:text-3xl text-white/90"
            />
          </div>
          <p className="text-lg text-white/80 my-6 max-w-xl">
            I build exceptional and accessible digital experiences 
            for the web. Focused on creating elegant solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-medium"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
