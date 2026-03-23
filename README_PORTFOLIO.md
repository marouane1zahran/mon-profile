# Portfolio Professionnel - Marouane Zahran

Un portfolio professionnel moderne, performant et responsive construit avec React 18, TypeScript, Tailwind CSS et Vite.

## 🚀 Caractéristiques

- ⚡ **Vite** pour un build ultra-rapide
- ⚛️ **React 18** avec fonctions composants et hooks
- 📘 **TypeScript** avec typage strict
- 🎨 **Tailwind CSS** pour le styling
- 🧩 **shadcn/ui** pour les composants UI
- 🛣️ **React Router DOM** avec lazy loading
- ✨ **Framer Motion** pour les animations
- 🎯 **SEO** avec react-helmet-async
- 🌙 **Dark Mode** fonctionnel
- 📱 **Responsive Design** mobile-first
- 🔤 **Lucide React** pour les icônes
- ✅ **ESLint & Prettier** pour la qualité du code

## 📦 Stack Technique

```
Frontend:
- React 18.2.4
- TypeScript 5.9.3
- React Router DOM 7.0.0
- Framer Motion 11.0.0
- Tailwind CSS 4.2.2
- shadcn/ui
- React Helmet Async

Build & Dev:
- Vite 8.0.2
- ESLint 9.39.4
- PostCSS 8.5.8
- Autoprefixer 10.4.27
```

## 🏗️ Architecture des Dossiers

```
src/
├── app/
│   ├── router.tsx          # Configuration du routage avec lazy loading
│   └── RootLayout.tsx      # Layout racine avec Header et Footer
├── components/
│   ├── ui/                 # Composants shadcn/ui
│   ├── Header.tsx          # Navigation responsive avec dark mode
│   ├── Footer.tsx          # Pied de page
│   ├── ProjectCard.tsx     # Carte réutilisable pour les projets
│   └── CertificationCard.tsx # Carte pour les certifications
├── pages/
│   ├── Home.tsx            # Page d'accueil avec animations
│   ├── Projects.tsx        # Portfolio de projets
│   ├── Experience.tsx      # Expérience professionnelle
│   ├── Education.tsx       # Formation académique
│   ├── Certifications.tsx  # Certifications et formations
│   └── Contact.tsx         # Formulaire de contact
├── data/
│   ├── profile.ts          # Informations de profil
│   ├── projects.ts         # Données des projets
│   └── education.ts        # Données de formation
├── lib/
│   └── utils.ts            # Utilitaires
├── main.tsx                # Point d'entrée avec RouterProvider
└── index.css               # Styles globaux avec Tailwind

```

## 🚀 Démarrage Rapide

### Prerequisites

- Node.js >= 18
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd react-profil

# Installer les dépendances
npm install --legacy-peer-deps
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Le serveur est disponible à http://localhost:5173/
```

### Build Production

```bash
# Construire l'application
npm run build

# Prévisualiser la build
npm run preview
```

### Linting

```bash
# Vérifier les erreurs ESLint
npm run lint
```

## 📝 Configuration

### Alias de Chemins

Les alias `@/*` pointent vers `./src/*`:

```typescript
import { Header } from '@/components/Header';
import { profile } from '@/data/profile';
```

### Dark Mode

Le dark mode est automatiquement activé en fonction:
1. De la préférence système (`prefers-color-scheme`)
2. Du localStorage si l'utilisateur a changé le mode manuellement

Classe `dark` ajoutée à l'élément HTML.

### SEO

Chaque page utilise `react-helmet-async` pour injecter les métadonnées:

```typescript
<Helmet>
  <title>Marouane Zahran — Projets</title>
  <meta name="description" content="Portfolio de projets..." />
</Helmet>
```

## 📄 Pages et Routes

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | Home | Accueil avec animations |
| `/projects` | Projects | Portfolio de projets |
| `/experience` | Experience | Expérience professionnelle |
| `/education` | Education | Formation académique |
| `/certifications` | Certifications | Certifications et formations |
| `/contact` | Contact | Formulaire de contact |

## 🎨 Composants Réutilisables

### ProjectCard

```typescript
<ProjectCard
  title="Mon Projet"
  date="2026"
  tags={["React", "TypeScript"]}
  summary="Description du projet"
  accentColor="blue"
/>
```

### CertificationCard

```typescript
<CertificationCard
  name="React Advanced"
  issuer="Udemy"
  date="2026"
  skills={["React Hooks", "Performance"]}
  icon={<Award />}
/>
```

## 🌐 Déploiement sur Vercel

### Méthode 1: Avec Git

1. Pousser le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Cliquer "New Project"
4. Sélectionner le repository
5. Les paramètres Vite sont auto-détectés
6. Cliquer "Deploy"

### Méthode 2: CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Configuration Vercel

Vercel détecte automatiquement:
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install --legacy-peer-deps`

## ✅ Checklist de Qualité

- ✅ TypeScript strict mode activé
- ✅ Pas d'erreurs ESLint
- ✅ Pas d'erreurs de compilation TypeScript
- ✅ Lazy loading sur toutes les pages
- ✅ Dark mode fonctionnel
- ✅ Responsive design (mobile à desktop)
- ✅ SEO avec react-helmet-async
- ✅ Animations fluides avec framer-motion
- ✅ Composants réutilisables
- ✅ Code propre et bien formaté

## 🔐 Environnement

Les variables d'environnement ne sont pas nécessaires pour ce portfolio statique.

Pour ajouter des variables:

```
# .env
VITE_API_URL=https://api.example.com
```

Accéder en React:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📞 Contact

- Email: contact@marouane.dev
- GitHub: [@marouane1zahran](https://github.com/marouane1zahran)
- LinkedIn: [@marouanez](https://linkedin.com/in/marouanez)

---

Construit avec ❤️ pour décrocher un stage PFE 🚀
