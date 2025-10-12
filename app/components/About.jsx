'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className='py-20 px-8 max-w-4xl mx-auto text-center'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-3xl font-bold mb-8'
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='text-gray-300 text-lg leading-relaxed'
      >
        I'm an Experienced Software Developer with over 3 years in designing,
        developing, and maintaining scalable applications. I bring a strong
        foundation in Computer Science, coupled with a passion for
        problem-solving and continuous learning. I have a proven track record of
        delivering high-quality software solutions in fast-paced, dynamic
        environments. I'm eager to share my knowledge with creative teams and
        take on new tasks that will advance my career and technical skills.
      </motion.p>
    </section>
  );
}
