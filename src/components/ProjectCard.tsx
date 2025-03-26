import  { motion } from 'framer-motion';
import { Github as GithubIcon, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl,
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      className="card overflow-hidden group relative"
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
              className="tag inline-block"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-3">
          {githubUrl && (
            <motion.a 
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a 
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          )}
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium"
      >
        Featured
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
 