'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://logos-world.net/wp-content/uploads/2021/02/NatWest-Symbol.png"
            alt="Natwest Logo"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Data Analyst Intern</h4>
            <p className="font-bold text-2xl mt-1">Natwest Group</p>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.sas.com/en_us/software/enterprise-guide/_jcr_content/socialShareImage.img.png"
                alt="SAS"
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://hadoop.apache.org/hadoop-logo.jpg"
                alt="Hadoop"
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://spark.apache.org/images/spark-logo-trademark.png"
                alt="PySpark"
              />
            </div>
            <p className="uppercase py-5 text-gray-300">Summer Internship</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Worked in the Retail and Digital X team</li>
              <li>Performed customer segmentation analysis</li>
              <li>Utilized SAS Enterprise Guide for data analysis</li>
              <li>Processed large datasets using Hadoop and PySpark</li>
              <li>Contributed to improving customer experience through data-driven insights</li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
} 