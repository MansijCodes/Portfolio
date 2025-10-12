'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Team Lead at ABC Tech',
    feedback:
      'An excellent engineer with a passion for clean code and innovative solutions. Great to work with!',
  },
  {
    name: 'Jane Smith',
    title: 'Product Manager at XYZ Solutions',
    feedback:
      'Delivers high-quality work and always goes above and beyond. Highly recommended.',
  },
];

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-20 px-8'>
      <h2 className='text-3xl font-bold text-center mb-12'>Testimonials</h2>
      <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='bg-gray-900 p-6 rounded-2xl shadow-lg'
          >
            <p className='text-gray-300 mb-4 italic'>“{t.feedback}”</p>
            <h4 className='font-semibold text-blue-400'>{t.name}</h4>
            <p className='text-gray-400 text-sm'>{t.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
