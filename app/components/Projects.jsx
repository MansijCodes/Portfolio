'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Commentary App',
    description:
      'A Platform to send/receive confessions or anonymous messages effortlessly',
    tech: ['Next.js', 'MongoDb'],
    link: 'https://commentaryapp.vercel.app/',
    image: '/commentary-app.png',
  },
  {
    title: 'Dunkin Casino',
    description: 'Dunkin Casino is a Casino type game  for casino lovers',
    tech: ['Phaser'],
    link: 'https://dunkin-slot-machine-casino-game.vercel.app/',
    image: '/casino-game.png',
  },
  {
    title: 'Mini Projects',
    description:
      'Here are some list of small projects I created in my learning phase',
    tech: ['Phaser'],
    link: 'https://mansijranjit.github.io/',
    image: '/ninja-survivor.png',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-8'>
      <h2 className='text-3xl font-bold text-center mb-12'>
        Personal Projects
      </h2>
      <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className='bg-gray-900 rounded-2xl overflow-hidden shadow-lg'
          >
            <img
              src={p.image}
              alt={p.title}
              className='w-full h-56 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>{p.title}</h3>
              <p className='text-gray-400 mb-4'>{p.description}</p>
              <div className='flex gap-2 flex-wrap mb-4'>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className='bg-gray-800 px-3 py-1 rounded-full text-sm'
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target='_blank'
                className='text-blue-400 hover:underline'
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
