'use client';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Software Engineering Consultant',
    company: 'Harness',
    period: '2025 March- Present',
    description: [
      ' Maintain and build features for 2 main marketing sites – harness.io & traceable.ai',
      ' Support microsites for events, campaigns, and product launches',
      ' Develop responsive, accessible designs using Webflow and/or React',
      ' Implement and optimize for SEO, performance, and analytics',
      ' Collaborate with design, marketing, and engineering teams',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Progressive Labs',
    period: '2024 March - 2025 April',
    description: [
      ' Developed full-stack applications using Next.js, MongoDB, and other modern technologies, delivering responsive and dynamic web experiences.',
      ' Built engaging casino-style games using Phaser, enhancing user interactivity and gaming performance.',
      ' Designed and developed responsive websites using Webflow.',
      ' Theme customization and development using Shopify.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: ' Leapfrog Technology Inc.',
    period: '2023 November - 2024 January',
    description: [
      ' Created pixel-perfect, cross-browser compatible responsive design of various web pages from Figma template using HTML, CSS, and vanilla JavaScript.',
      ' Utilized SASS with variables, partials, mixins, and other advanced features for modular CSS.',
      ' Followed best practices including Semantic HTML, accessibility, BEM, and SMACSS architecture.',
      '  Developed a browser game (Doodle Jump) using modern ES6 JavaScript.',
      '  Built a full-stack application using TypeScript, Node.js, Express.js, and integrated database support.',
    ],
  },
];

export default function Experience() {
  return (
    <section id='experience' className='py-20 px-8 bg-gray-900'>
      <h2 className='text-3xl font-bold text-center mb-12 text-white'>
        Experience
      </h2>
      <div className='max-w-4xl mx-auto space-y-8'>
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='relative pl-8 border-l border-gray-700'
          >
            <span className='absolute -left-3 top-2 w-5 h-5 bg-blue-500 rounded-full'></span>
            <h3 className='text-xl font-semibold text-white'>{exp.role}</h3>
            <p className='text-blue-400'>{exp.company}</p>
            <p className='text-gray-400 text-sm mb-2'>{exp.period}</p>
            {/* <p className='text-gray-300'>{exp.description}</p> */}
            <ul className='list-disc list-inside text-gray-300'>
              {exp.description.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
