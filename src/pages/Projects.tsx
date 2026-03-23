import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';

export default function Projects() {
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
        <title>{profile.name} — Projets</title>
        <meta name="description" content="Portfolio de projets professionnels et académiques" />
      </Helmet>

      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold mb-2">Mes Projets</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Découvrez les projets que j'ai réalisés, allant du FullStack au cloud.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={item}>
              <ProjectCard
                title={project.title}
                date={project.period}
                tags={project.tags}
                summary={project.summary}
                accentColor="blue"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
