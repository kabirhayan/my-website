import  { 
  Github as GithubIcon, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  Globe 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-primary" />
              Kabirhayan L
            </h3>
            <p className="text-gray-400 mb-4">
              B.Tech IT Student at Panimalar Engineering College, graduating in 2026. Passionate about creating innovative solutions through technology.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-primary transition-colors">Education</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:kabirhayan.l@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  kabirhayan.l@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="tel:+918248165264" className="text-gray-400 hover:text-primary transition-colors">
                  +91 8248165264
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/kabirhayan" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kabirhayan-l-ba0617260" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/__kabirhayan__" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Kabirhayan L. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
 