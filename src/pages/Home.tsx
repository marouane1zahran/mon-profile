import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code2, Zap } from 'lucide-react';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{profile.name} — Accueil</title>
        <meta name="description" content={profile.about} />
      </Helmet>

      <motion.div
        className="space-y-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Hero Section */}
        <motion.section variants={item} className="space-y-6 py-12">
          <div className="space-y-2">
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              variants={item}
            >
              {profile.name}
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
              variants={item}
            >
              {profile.role}
            </motion.p>
          </div>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
            variants={item}
          >
            {profile.about}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={item}
          >
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                Voir mes Projets
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/contact">
                Me Contacter
                <Zap className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={item} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Code2 className="w-8 h-8" />
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <p className="font-semibold text-blue-600 dark:text-blue-400">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={item}
          className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 text-center space-y-4"
        >
          <h3 className="text-2xl font-bold">Intéressé par une collaboration?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Je suis actuellement à la recherche d'une opportunité de stage PFE. N'hésitez pas à me contacter!
          </p>
          <Button asChild className="gap-2">
            <a href={`mailto:${profile.email}`}>
              Envoyer un Email
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.section>
      </motion.div>
    </>
  );
}
