
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Modern JavaScript Features You Should Know',
    excerpt: 'Explore the latest JavaScript features that can improve your code quality and developer experience.',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    date: 'April 12, 2023',
    readTime: '8 min read',
    author: 'JavaScript Developer',
    tags: ['JavaScript', 'ES6', 'Web Development']
  },
  {
    id: '2',
    title: 'Optimizing React Performance',
    excerpt: 'Learn effective strategies for improving the performance of your React applications and avoiding common pitfalls.',
    cover: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800',
    date: 'March 24, 2023',
    readTime: '10 min read',
    author: 'JavaScript Developer',
    tags: ['React', 'Performance', 'Web Development']
  },
  {
    id: '3',
    title: 'CSS Grid Mastery for Modern Layouts',
    excerpt: 'Master CSS Grid layout techniques to create complex, responsive web designs with clean, maintainable code.',
    cover: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    date: 'February 8, 2023',
    readTime: '6 min read',
    author: 'JavaScript Developer',
    tags: ['CSS', 'Web Design', 'Frontend']
  },
  {
    id: '4',
    title: 'Building Accessible Web Applications',
    excerpt: 'Practical guidelines for making your web applications more accessible to users with disabilities.',
    cover: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    date: 'January 15, 2023',
    readTime: '12 min read',
    author: 'JavaScript Developer',
    tags: ['Accessibility', 'Web Development', 'a11y']
  },
  {
    id: '5',
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'A gentle introduction to TypeScript and how it can improve your JavaScript development workflow.',
    cover: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
    date: 'December 3, 2022',
    readTime: '9 min read',
    author: 'JavaScript Developer',
    tags: ['TypeScript', 'JavaScript', 'Web Development']
  }
];

const BlogPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Blog | JS.dev";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights, and tutorials about web development, software engineering, and technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <a href={`/blog/${post.id}`} className="block overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover aspect-video md:aspect-square"
                  />
                </a>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
