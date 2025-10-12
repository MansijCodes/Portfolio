'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed w-full top-0 left-0 bg-gray-950/80 backdrop-blur-md z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo / Name */}
        <a href='#hero' className='text-2xl font-bold text-blue-400'>
          mansijranjit
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-gray-300 hover:text-blue-400 transition'
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-gray-300'
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden flex flex-col space-y-4 px-4 pb-6'
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className='text-gray-300 hover:text-blue-400 transition'
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
