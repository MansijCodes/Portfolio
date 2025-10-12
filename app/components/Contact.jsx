'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setForm({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error(err);
        }
      );
  };

  return (
    <section id='contact' className='py-20 px-8 '>
      <h2 className='text-3xl font-bold text-center mb-8 text-white'>
        Get In Touch
      </h2>
      <p className='text-center text-gray-400 mb-12'>
        Whether you want to collaborate or just say hi, my inbox is open.
      </p>
      <form
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto flex flex-col gap-4 text-white'
      >
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          onChange={handleChange}
          value={form.name}
          className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          onChange={handleChange}
          value={form.email}
          className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows='5'
          required
          onChange={handleChange}
          value={form.message}
          className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white'
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition'
        >
          Send Message
        </motion.button>
        {sent && (
          <p className='text-green-400 text-center mt-4'>
            ✅ Your message has been sent!
          </p>
        )}
      </form>
    </section>
  );
}
