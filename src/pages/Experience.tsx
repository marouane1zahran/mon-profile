import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Experience() {
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

  const experiences = [
    {
      title: "Développeur Full-Stack",
      company: "En Formation",
      period: "Sept 2023 - Juil 2026",
      description: "Apprentissage approfondi du développement Full-Stack incluant Java Spring Boot, React, et architectures distribuées.",
      skills: ["Java", "Spring Boot", "React", "SQL", "Architecture Logicielle"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{profile.name} — Expérience</title>
        <meta name="description" content="Expérience professionnelle et académique" />
      </Helmet>

      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
            <Briefcase className="w-10 h-10" />
            Expérience
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Mon parcours professionnel et académique
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="p-6 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20"
        >
          <h3 className="font-semibold text-lg mb-2">À la recherche de stage PFE</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Je recherche activement une opportunité de stage PFE (début 2026) pour consolider mes compétences en développement full-stack et contribuer à des projets significatifs.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
