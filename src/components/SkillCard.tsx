import  { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SkillCardProps = {
  title: string;
  icon: ReactNode;
  skills: {name: string, level: number}[];
};

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      className="card p-6 hover:border-l-4 hover:border-primary transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <motion.div 
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-primary mr-3"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="skill-progress-bar">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-progress-value"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
 