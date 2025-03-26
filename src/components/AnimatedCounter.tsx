import  { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      const updateCount = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const elapsedTime = timestamp - startTimeRef.current;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * end);

        if (currentCount !== countRef.current) {
          countRef.current = currentCount;
          setCount(currentCount);
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [inView, end, duration]);

  return (
    <motion.div 
      ref={ref} 
      className="text-3xl md:text-4xl font-bold"
      animate={{ 
        color: ['#4f46e5', '#3730a3', '#4f46e5'],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {count}{suffix}
    </motion.div>
  );
};

export default AnimatedCounter;
 