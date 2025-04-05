'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-24 h-24 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] rounded-full object-contain bg-white p-2"
            src="https://logos-world.net/wp-content/uploads/2021/02/NatWest-Symbol.png"
            alt="Natwest Logo"
          />

          <div className="px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl md:text-4xl font-light">Data Analyst Intern</h4>
            <p className="font-bold text-xl md:text-2xl mt-1">Natwest Group</p>
            <div className="flex flex-wrap gap-2 my-4">
              <img
                className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1"
                src="https://www.sas.com/en_us/software/enterprise-guide/_jcr_content/socialShareImage.img.png"
                alt="SAS"
              />
              <img
                className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1"
                src="https://hadoop.apache.org/hadoop-logo.jpg"
                alt="Hadoop"
              />
              <img
                className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1"
                src="https://spark.apache.org/images/spark-logo-trademark.png"
                alt="PySpark"
              />
            </div>
            <p className="uppercase py-5 text-gray-300 text-sm md:text-base">Summer Internship 2023</p>

            <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
              <li>Led customer segmentation initiatives in the Retail and Digital X team, analyzing behavioral patterns and transaction data of over 1M+ customers</li>
              <li>Developed and implemented advanced data analytics pipelines using SAS Enterprise Guide, processing 500GB+ of daily transaction data</li>
              <li>Utilized Hadoop and PySpark for large-scale data processing, improving query performance by 40%</li>
              <li>Created automated reporting systems that reduced manual analysis time by 60%</li>
              <li>Collaborated with cross-functional teams to identify key customer segments, leading to a 25% increase in targeted marketing efficiency</li>
              <li>Presented findings to senior management, highlighting opportunities for product development and customer experience enhancement</li>
            </ul>
          </div>
        </article>
      </div>

      <div className="w-full absolute top-[30%] bg-purple-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
} 