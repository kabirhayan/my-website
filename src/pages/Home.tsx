import  { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Users, 
  Activity, 
  Clock, 
  Phone, 
  Mail, 
  Linkedin, 
  GraduationCap, 
  Github as GithubIcon,
  HelpCircle, // Using as a fallback for AI/ML
  Instagram,
  Brain
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import AnimatedCounter from '../components/AnimatedCounter';
import TimelineItem from '../components/TimelineItem';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-indigo-100 to-violet-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Kabirhayan L</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                <TypeAnimation
                  sequence={[
                    'IT Student', 
                    2000, 
                    'Software Developer', 
                    2000, 
                    'Web Designer', 
                    2000,
                    'AI Enthusiast',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-secondary"
                />
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                B.Tech IT student at Panimalar Engineering College, graduating in 2026. Passionate about creating innovative solutions through technology and artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#3730a3" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#contact" 
                  className="btn btn-primary"
                >
                  Contact Me
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", color: "white" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#projects" 
                  className="btn btn-outline"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 flex justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, 2, 0, -2, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="relative"
              >
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary via-purple-500 to-accent blur opacity-30"></div>
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/917b37bd-86db-40ec-dfac-bdff082b0800/public" 
                  alt="Kabirhayan L - IT Student" 
                  className="rounded-full shadow-xl w-full max-w-md relative z-10 border-4 border-white"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 bg-repeat opacity-5 z-0 bg-grid"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <AnimatedCounter end={1} suffix="+" />
              <p className="text-gray-600 mt-2">Years Experience</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <AnimatedCounter end={10} suffix="+" />
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-gray-600 mt-2">Technologies</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <AnimatedCounter end={3} suffix="+" />
              <p className="text-gray-600 mt-2">AI Models Used</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-gray-50">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="title text-center"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1617957772002-57adde1156fa?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBSSUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MHx8fHwxNzQyOTg2MzQ0fDA&ixlib=rb-4.0.3"
                alt="AI Technology Background" 
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="subtitle mb-4">Discovering the World of Technology</h3>
              <p className="mb-4 text-gray-700">
                As a B.Tech IT student at Panimalar Engineering College, I am on an exciting journey of learning and growth in the field of Information Technology. My passion for technology began early, and I've been fascinated by how it can solve real-world problems.
              </p>
              <p className="mb-6 text-gray-700">
                Currently in my academic journey (graduating in 2026), I balance theoretical knowledge with practical projects to build a strong foundation in software development, web technologies, and artificial intelligence. I believe in continuous learning and staying updated with the latest trends in technology.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex items-start p-3 rounded-lg bg-white"
                >
                  <div className="p-2 bg-indigo-100 rounded-md mr-3">
                    <GraduationCap className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-gray-600">B.Tech IT (2022-2026)</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex items-start p-3 rounded-lg bg-white"
                >
                  <div className="p-2 bg-indigo-100 rounded-md mr-3">
                    <HelpCircle className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI & ML Expertise</h4>
                    <p className="text-sm text-gray-600">AI/ML Applications</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex items-start p-3 rounded-lg bg-white"
                >
                  <div className="p-2 bg-indigo-100 rounded-md mr-3">
                    <Code className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Coding</h4>
                    <p className="text-sm text-gray-600">Problem Solving</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex items-start p-3 rounded-lg bg-white"
                >
                  <div className="p-2 bg-indigo-100 rounded-md mr-3">
                    <Activity className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Interests</h4>
                    <p className="text-sm text-gray-600">Web Dev, AI/ML</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "#3730a3" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#contact"
                className="btn btn-primary inline-flex items-center"
              >
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="title text-center"
          >
            Education & Journey
          </motion.h2>
          
          <div className="max-w-3xl mx-auto mt-12">
            <TimelineItem 
              year="2022 - 2026" 
              title="Bachelor of Technology (IT)" 
              institution="Panimalar Engineering College"
            >
              <p>Pursuing my B.Tech in Information Technology with a focus on software development, web technologies, and artificial intelligence. Actively participating in hackathons, technical clubs, and project-based learning.</p>
            </TimelineItem>
            
            <TimelineItem 
              year="2020 - 2022" 
              title="Higher Secondary Education" 
              institution="Jaycees Matriculation Higher Secondary School, Sivakasi"
            >
              <p>Completed my higher secondary education with excellence in mathematics and computer science, which strengthened my foundation for pursuing further studies in technology.</p>
            </TimelineItem>
            
            <TimelineItem 
              year="2022 - Present" 
              title="Self-Learning Journey"
            >
              <p>Continuously expanding my knowledge through online courses, tutorials, and hands-on projects. Learning platforms like Coursera, Udemy, and freeCodeCamp have been instrumental in my growth, particularly in the field of artificial intelligence.</p>
            </TimelineItem>
            
            <TimelineItem 
              year="2024" 
              title="First AI-Enhanced Project"
            >
              <p>Developed my first significant project leveraging artificial intelligence, which helped me apply theoretical knowledge to practical problems and understand the integration of AI with modern applications.</p>
            </TimelineItem>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="title text-center"
          >
            My Skills
          </motion.h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
            I'm continuously learning and improving my skills across various technologies and domains. Here's a glimpse of my current skill set:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Frontend Development" 
              icon={<Layout size={24} />} 
              skills={[
                {name: "HTML5/CSS3", level: 85},
                {name: "JavaScript", level: 80},
                {name: "React.js", level: 75},
                {name: "Responsive Design", level: 85}
              ]} 
            />
            <SkillCard 
              title="Backend Development" 
              icon={<Server size={24} />} 
              skills={[
                {name: "Node.js", level: 70},
                {name: "Python", level: 75},
                {name: "Express.js", level: 65},
                {name: "RESTful APIs", level: 70}
              ]} 
            />
            <SkillCard 
              title="AI & Machine Learning" 
              icon={<HelpCircle size={24} />} 
              skills={[
                {name: "AI Tools & Platforms", level: 90},
                {name: "Prompt Engineering", level: 85},
                {name: "ML Frameworks", level: 70},
                {name: "Data Analysis", level: 75}
              ]} 
            />
            <SkillCard 
              title="Database Management" 
              icon={<Database size={24} />} 
              skills={[
                {name: "MySQL", level: 80},
                {name: "MongoDB", level: 65},
                {name: "Firebase", level: 70},
                {name: "Database Design", level: 75}
              ]} 
            />
            <SkillCard 
              title="Programming Languages" 
              icon={<Code size={24} />} 
              skills={[
                {name: "JavaScript", level: 80},
                {name: "Python", level: 75},
                {name: "Java", level: 70},
                {name: "C/C++", level: 65}
              ]} 
            />
            <SkillCard 
              title="Soft Skills" 
              icon={<Users size={24} />} 
              skills={[
                {name: "Communication", level: 85},
                {name: "Leadership", level: 90},
                {name: "Time Management", level: 80},
                {name: "Adaptability", level: 85}
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="title text-center"
          >
            Projects
          </motion.h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
            Here are some of the projects I've worked on during my academic journey and personal exploration:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="AI-Enhanced Learning Platform" 
              description="An e-learning platform with AI-powered recommendations and personalized learning paths for students." 
              technologies={["React", "Node.js", "OpenAI API", "MongoDB"]}
              imageUrl="https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBBSSUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MHx8fHwxNzQyOTg2MzQ0fDA&ixlib=rb-4.0.3"
              githubUrl="https://github.com/kabirhayan"
            />
            <ProjectCard 
              title="Smart Task Manager" 
              description="A task management application with AI-powered suggestions for prioritization and time management." 
              technologies={["JavaScript", "React", "Firebase", "AI Integration"]}
              imageUrl="https://images.unsplash.com/photo-1614706007211-76ad2e997bf5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBBSSUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MHx8fHwxNzQyOTg2MzQ0fDA&ixlib=rb-4.0.3"
              githubUrl="https://github.com/kabirhayan"
            />
            <ProjectCard 
              title="AI-Powered Weather Dashboard" 
              description="A weather application that uses AI to analyze patterns and provide insights beyond regular forecasts." 
              technologies={["HTML", "CSS", "JavaScript", "Weather API", "ML Models"]}
              imageUrl="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBBSSUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0Mjk4NTE0MHww&ixlib=rb-4.0.3"
              githubUrl="https://github.com/kabirhayan"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", color: "white" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/kabirhayan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center"
            >
              <GithubIcon className="mr-2 h-5 w-5" />
              See More on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="title text-center"
          >
            Get In Touch
          </motion.h2>
          <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700">
            I'm currently looking for opportunities in the IT sector. Whether you have a job opportunity, a project idea, or just want to connect, feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="card flex flex-col items-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+918248165264" className="text-gray-600 hover:text-primary transition-colors">+91 8248165264</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="card flex flex-col items-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kabirhayan.l@gmail.com" className="text-gray-600 hover:text-primary transition-colors">kabirhayan.l@gmail.com</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="card flex flex-col items-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/kabirhayan-l-ba0617260" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">Connect on LinkedIn</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="card flex flex-col items-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <a href="https://www.instagram.com/__kabirhayan__" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">@__kabirhayan__</a>
            </motion.div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-primary via-purple-500 to-accent text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617957772002-57adde1156fa?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBSSUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MHx8fHwxNzQyOTg2MzQ0fDA&ixlib=rb-4.0.3')" }}></div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-4 relative z-10"
                >
                  Send Me a Message
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 relative z-10"
                >
                  Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6 relative z-10"
                >
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Response Time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>kabirhayan.l@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>+91 8248165264</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex space-x-4 relative z-10"
                >
                  <motion.a 
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://github.com/kabirhayan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://www.linkedin.com/in/kabirhayan-l-ba0617260" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://www.instagram.com/__kabirhayan__" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                </motion.div>
                
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
 