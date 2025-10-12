'use client';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-950 py-8 text-center border-t border-gray-800'>
      <div className='flex justify-center gap-6 mb-4'>
        <a
          href='https://github.com/mansijranjit'
          target='_blank'
          className='text-gray-400 hover:text-blue-400 transition'
        >
          <FaGithub size={24} />
        </a>
        <a
          href='https://www.linkedin.com/in/mansij-ranjit-306b41284/'
          target='_blank'
          className='text-gray-400 hover:text-blue-400 transition'
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className='text-gray-500 text-sm'>
        © {new Date().getFullYear()} Mansij Ranjit
      </p>
    </footer>
  );
}
