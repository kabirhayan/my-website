import  { ReactNode } from 'react';
import { motion } from 'framer-motion';

type TimelineItemProps = {
  year: string;
  title: string;
  institution?: string;
  children: ReactNode;
};

const TimelineItem = ({ year, title, institution, children }: TimelineItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: "#f9fafb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
      className="timeline-item pb-8 pl-6 pr-3 py-3 rounded-lg transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
        <motion.span 
          whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", color: "white" }}
          className="text-sm font-semibold px-2 py-1 bg-indigo-100 text-primary rounded-md inline-block transition-colors duration-300"
        >
          {year}
        </motion.span>
        <h3 className="text-lg font-semibold">{title}</h3>
        {institution && (
          <span className="text-gray-600 italic">{institution}</span>
        )}
      </div>
      <div className="text-gray-600">
        {children}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
 