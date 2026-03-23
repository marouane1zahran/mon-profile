import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Helmet>
        <title>{profile.name} — Contact</title>
        <meta name="description" content="Me contacter pour une collaboration" />
      </Helmet>

      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold mb-2">Me Contacter</h1>
          <p className="text-gray-600 dark:text-gray-400">
            N'hésitez pas à me contacter pour discuter d'opportunités de collaboration ou de stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h2 className="text-2xl font-bold mb-4">Informations</h2>
            </motion.div>

            {/* Email */}
            <motion.a
              href={`mailto:${profile.email}`}
              variants={item}
              className="flex gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600 dark:text-gray-400">{profile.email}</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={item}
              className="flex gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <MapPin className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Localisation</p>
                <p className="text-gray-600 dark:text-gray-400">{profile.location}</p>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={item}
              className="space-y-3"
            >
              <p className="font-semibold">Réseaux Sociaux</p>
              <div className="space-y-2">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{social.label}</span>
                    <span className="text-gray-600 dark:text-gray-400">→</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={item}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Envoyer un Message</h2>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Envoyer le Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
