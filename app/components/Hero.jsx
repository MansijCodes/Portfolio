'use client';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the lightweight engine instead of full (better performance)
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section
      id='hero'
      className='relative h-screen flex flex-col justify-center items-center text-center'
    >
      {init && (
        <Particles
          id='tsparticles'
          options={{
            background: { color: { value: '#0a0a0a' } },
            particles: {
              number: { value: 50 },
              color: { value: '#ffffff' },
              links: { enable: true, color: '#ffffff', distance: 150 },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.5 },
              size: { value: 2 },
            },
          }}
          className='absolute inset-0 -z-10'
        />
      )}
      <Image
        src='/mansij-ranjit.png'
        width={400}
        height={100}
        alt='Mansij Ranjit'
        className='mb-10 max-md:mt-6 max-md:mb-16 max-md:max-w-[300px]'
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-5xl font-bold mb-4 text-white'
      >
        Hi, I'm <span className='text-blue-400'>Mansij Ranjit</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='text-gray-300 max-w-lg'
      >
        Computer Engineer specialized in building scalable web applications with
        clean and elegant solutions.
      </motion.p>
      <div className='mt-6 space-x-4'>
        <a
          href='#projects'
          className='bg-blue-500 px-5 py-3 rounded-full font-semibold hover:bg-blue-600 transition'
        >
          View Projects
        </a>
        <a
          href='/Mansij-Ranjit-Resume.pdf'
          target='_blank'
          className='border border-blue-500 px-5 py-3 rounded-full text-white font-semibold hover:bg-blue-500 hover:text-white transition'
        >
          Resume
        </a>
      </div>
    </section>
  );
}
