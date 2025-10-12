'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', icon: '/next.svg', href: 'https://nextjs.org/' },
  { name: 'React', icon: '/react.png', href: 'https://react.dev/' },
  { name: 'Node.js', icon: '/node.png', href: 'https://nodejs.org/en' },
  { name: 'Webflow', icon: '/webflow.svg', href: 'https://webflow.com/' },
  { name: 'Shopify', icon: '/shopify.png', href: 'https://react.dev/' },
  { name: 'Phaser', icon: '/phaser.png', href: 'https://phaser.io/' },
  {
    name: 'AWS Lambda',
    icon: '/aws-lambda.png',
    href: 'https://aws.amazon.com/pm/lambda/',
  },
];

export default function Skills() {
  return (
    <section id='skills' className='py-20 bg-gray-400 px-8'>
      <h2 className='text-3xl font-bold text-center mb-12 text-white'>
        Skills & Tech Stack
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto'>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className='flex flex-col items-center gap-2'
          >
            <a target='_blank' href={skill.href || ''}>
              <img src={skill.icon} alt={skill.name} className=' h-16' />
            </a>
            {/* <span>{skill.name}</span> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
