import  { useState, useEffect } from 'react';
import { Menu, X, Code, Github as GithubIcon, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Code className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold gradient-text">Kabirhayan L</span>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#home" className="text-dark hover:text-primary font-medium">Home</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#about" className="text-dark hover:text-primary font-medium">About</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#education" className="text-dark hover:text-primary font-medium">Education</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#skills" className="text-dark hover:text-primary font-medium">Skills</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#projects" className="text-dark hover:text-primary font-medium">Projects</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#contact" className="text-dark hover:text-primary font-medium">Contact</a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-3"
          >
            <a href="https://github.com/kabirhayan" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-primary">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/kabirhayan-l-ba0617260" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/__kabirhayan__" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </motion.div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 pb-3 space-y-3"
          >
            <a href="#home" className="block text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="#education" className="block text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Education</a>
            <a href="#skills" className="block text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="block text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="block text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Contact</a>
            
            <div className="flex space-x-3 pt-2">
              <a href="https://github.com/kabirhayan" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-primary">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kabirhayan-l-ba0617260" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/__kabirhayan__" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 