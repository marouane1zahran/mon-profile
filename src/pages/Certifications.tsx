import { motion } from 'framer-motion';
import { CertificationCard } from '@/components/CertificationCard';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
import { Award } from 'lucide-react';

export default function Certifications() {
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

  const certifications = [
    {
      name: "React Advanced Concepts",
      issuer: "MLIAEdu",
      date: "2026",
      skills: ["React Hooks", "Performance", "State Management"]
    },
    {
      name: "Spring Boot Mastery",
      issuer: "MLIAEdu",
      date: "2025",
      skills: ["Spring Boot", "Microservices", "REST API"]
    },
    {
      name: "Web Development Fundamentals",
      issuer: "FreeCodeCamp",
      date: "2024",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"]
    },
{
      name: "jpa hibernat",
      issuer: "MLIAEdu",
      date: "2024",
      skills: ["java", "jpa", "jdbc", "hibernate"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{profile.name} — Certifications</title>
        <meta name="description" content="Certifications et formations en ligne" />
      </Helmet>

      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
            <Award className="w-10 h-10" />
            Certifications
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Formations et certifications que j'ai complétées
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {certifications.map((cert, idx) => (
            <motion.div key={idx} variants={item}>
              <CertificationCard
                name={cert.name}
                issuer={cert.issuer}
                date={cert.date}
                skills={cert.skills}
                icon={<Award className="w-5 h-5 text-yellow-500" />}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="p-6 rounded-lg border border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-900/20"
        >
          <h3 className="font-semibold text-lg mb-2">Apprentissage Continu</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Je m'engage dans une formation continue pour rester à jour avec les dernières technologies et bonnes pratiques du développement web et logiciel.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
