
import { motion } from 'framer-motion';
import { Code, Server, Layout, Star, Monitor, Database } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: <Layout />, description: 'Creating responsive, accessible and performant user interfaces with modern frameworks' },
  { name: 'Backend Development', icon: <Server />, description: 'Building robust APIs and server-side applications with Node.js and database integration' },
  { name: 'JavaScript/TypeScript', icon: <Code />, description: 'Expert in JS/TS, with deep knowledge of language features and best practices' },
  { name: 'Database Design', icon: <Database />, description: 'Designing efficient database schemas and writing optimized queries' },
  { name: 'UI/UX Design', icon: <Monitor />, description: 'Creating delightful user experiences with intuitive interfaces and smooth interactions' },
  { name: 'Team Leadership', icon: <Star />, description: 'Leading technical teams with clear vision, mentorship, and collaborative approaches' },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-0 bg-muted/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">My Background</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 8 years of experience in software development, I specialize in building exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">My Journey</h4>
            <p className="text-muted-foreground mb-4">
              I started my career as a frontend developer passionate about creating beautiful interfaces. Over time, I've expanded my expertise to full-stack development, working with a variety of technologies and frameworks.
            </p>
            <p className="text-muted-foreground">
              I've had the opportunity to work with startups, agencies, and enterprise companies, helping them build scalable applications and solve complex problems. My approach combines technical excellence with a deep understanding of user needs.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Education & Experience</h4>
            <ul className="space-y-4">
              <li>
                <div className="font-medium">Senior Full-Stack Developer</div>
                <div className="text-sm text-muted-foreground">Tech Innovations Inc. | 2020 - Present</div>
              </li>
              <li>
                <div className="font-medium">Frontend Lead Developer</div>
                <div className="text-sm text-muted-foreground">WebSolutions Agency | 2017 - 2020</div>
              </li>
              <li>
                <div className="font-medium">BSc Computer Science</div>
                <div className="text-sm text-muted-foreground">University of Technology | 2013 - 2017</div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl font-bold mb-6 text-center"
        >
          My Skills
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h5 className="font-semibold mb-2">{skill.name}</h5>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
