import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { education } from '@/data/education';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{profile.name} — Formation</title>
        <meta name="description" content="Formation académique et parcours éducatif" />
      </Helmet>

      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
            <GraduationCap className="w-10 h-10" />
            Formation
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Mon parcours académique et apprentissage continu
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{edu.school}</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.degree} en {edu.field}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {edu.start} - {edu.end}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Cours principaux :</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course, courseIdx) => (
                        <li
                          key={courseIdx}
                          className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1">•</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
