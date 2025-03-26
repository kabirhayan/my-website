import  { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email to kabirhayan.l@gmail.com
      await sendEmail(formData.name, formData.email, formData.message);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit} 
      className="space-y-4 max-w-lg mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <motion.input
          whileFocus={{ boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)" }}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <motion.input
          whileFocus={{ boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)" }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
        <motion.input
          whileFocus={{ boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)" }}
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input"
          placeholder="What's this regarding?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <motion.textarea
          whileFocus={{ boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)" }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="input"
          placeholder="How can I help you?"
        />
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02, backgroundColor: "#3730a3" }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary flex items-center justify-center gap-2 w-full"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-md bg-green-50 border border-green-200"
        >
          <p className="flex items-center text-green-700 text-sm font-medium">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </p>
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-md bg-red-50 border border-red-200"
        >
          <p className="flex items-center text-red-700 text-sm font-medium">
            <svg className="h-5 w-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            There was an error sending your message. Please try again or contact me directly at kabirhayan.l@gmail.com.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
 