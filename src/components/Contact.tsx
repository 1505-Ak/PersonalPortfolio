'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Let&apos;s Connect.{" "}
          <span className="decoration-purple-500 underline">Get In Touch</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">anulomekishore5@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">Manchester, United Kingdom</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>

          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-purple-500 py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-purple-600"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
} 