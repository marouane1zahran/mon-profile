# 🎯 Portfolio Professionnel - Marouane Zahran

Bienvenue sur mon **portfolio professionnel moderne** construit avec les dernières technologies web. Ce projet démontre mes compétences en développement Full-Stack et mon engagement envers la qualité du code.

---




https://github.com/user-attachments/assets/4c45c1b6-0923-4f0c-86b6-9ac70d629be9



---

## 📋 À Propos du Projet

Je suis **Marouane Zahran**, étudiant en Systèmes d'Information Répartie à la Faculté des Sciences et Techniques de Marrakech. Ce portfolio présente:

✨ **Mes compétences** en développement web et backend
📚 **Mon parcours académique** et expérience
💼 **Mes projets** réalisés durant ma formation
🎓 **À la recherche d'un stage PFE** (début 2026)

---

## 🛠️ Stack Technique

### Frontend
- **React 18** - Framework UI moderne
- **TypeScript** - Typage strict pour la sécurité
- **Tailwind CSS** - Styling utility-first
- **shadcn/ui** - Composants UI professionnels
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

### Routing & SEO
- **React Router DOM** - Navigation multi-pages
- **React Helmet Async** - Optimisation SEO
- **Lazy Loading** - Chargement optimisé des pages

### Build & Dev
- **Vite** - Build tool ultra-rapide
- **TypeScript** - Typage strict (strict mode)
- **ESLint** - Qualité du code
- **Prettier** - Formatage automatique

---

## 📁 Structure du Projet

```
src/
├── app/                    # Router et Layout
│   ├── router.tsx         # Configuration routage avec lazy loading
│   └── RootLayout.tsx     # Layout global
├── pages/                 # Pages principales
│   ├── Home.tsx          # Accueil avec animations
│   ├── Projects.tsx      # Portfolio de projets
│   ├── Education.tsx     # Formation académique
│   ├── Experience.tsx    # Expérience professionnelle
│   ├── Certifications.tsx # Certifications
│   └── Contact.tsx       # Formulaire de contact
├── components/           # Composants réutilisables
│   ├── Header.tsx       # Navigation + Dark Mode
│   ├── Footer.tsx       # Pied de page
│   ├── ProjectCard.tsx  # Cartes de projets
│   ├── CertificationCard.tsx
│   └── ui/              # Composants shadcn/ui
├── data/                # Données statiques
│   ├── profile.ts       # Informations personnelles
│   ├── projects.ts      # Liste des projets
│   └── education.ts     # Parcours académique
└── main.tsx            # Point d'entrée
```

---

## ✨ Fonctionnalités Principales

### 🌙 Dark Mode
- Détection automatique de la préférence système
- Toggle manuel avec sauvegarde en localStorage
- Styles cohérents en light et dark mode

### 📱 Responsive Design
- Mobile-first approach
- Optimisé pour tous les appareils
- Menu adaptatif mobile

### 🎬 Animations Fluides
- Animations d'apparition progressive avec Framer Motion
- Transitions CSS élégantes
- Hover effects interactifs

### 🔍 SEO Optimisé
- Métadonnées dynamiques avec react-helmet
- Balises titre et descriptions personnalisées
- Structure HTML sémantique

### ⚡ Performance
- Lazy loading des pages
- Code splitting automatique
- Compression gzip ~80%
- Lighthouse Score 90+

---

## 📊 Pages Disponibles

| Page | Description |
|------|-------------|
| **Accueil** | Présentation avec animations, compétences et call-to-action |
| **Projets** | Portfolio complet de mes réalisations |
| **Expérience** | Parcours professionnel et académique |
| **Formation** | Détails du cursus à la FST Marrakech |
| **Certifications** | Formations et certifications complétées |
| **Contact** | Formulaire de contact + informations |

---

## 🎨 Personnalisation

### Éditer Vos Informations

1. **Profil Personnel** → `src/data/profile.ts`
2. **Projets** → `src/data/projects.ts`
3. **Formation** → `src/data/education.ts`

Les changements s'appliquent automatiquement en temps réel! ✨

---

## 📦 Commandes Disponibles

```bash
# Développement
npm run dev

# Build Production
npm run build

# Prévisualiser la build
npm run preview

# Vérifier le code
npm run lint
```

---

## 🌐 Déploiement

### Sur Vercel (Recommandé)

```bash
# Via CLI
npm install -g vercel
vercel --prod

# Ou sur vercel.com
# → New Project
# → Select GitHub Repository
# → Deploy!
```

### Configuration Automatique
- Build command: `npm run build`
- Output: `dist/`
- Framework: Vite

---

## 📈 Performance

**Build Size:**
- CSS: 9.11 kB gzip
- JavaScript: 90.36 kB gzip
- Total: ~110 kB gzip

**Lighthouse:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+

---

## 📝 Documentation

Pour plus de détails, consultez:
- **[QUICKSTART.md](QUICKSTART.md)** - Démarrage en 30 sec
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Guide Vercel complet
- **[README_PORTFOLIO.md](README_PORTFOLIO.md)** - Guide technique détaillé
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Synthèse du projet
- **[CHECKLIST.md](CHECKLIST.md)** - Checklist complète

---

## 📞 Me Contacter

- **Email:** zahranmarouane77@gmail.com
- **GitHub:** [@marouane1zahran](https://github.com/marouane1zahran)
- **LinkedIn:** [@marouanez](https://linkedin.com/in/marouanez)
- **Location:** Marrakech, Maroc

---

## 🎯 Objectif

Ce portfolio démontre mon engagement envers:
- ✅ **Qualité du code** (TypeScript strict, ESLint)
- ✅ **UX/Design** (Responsive, animations fluides)
- ✅ **Performance** (Optimisations Vite, lazy loading)
- ✅ **SEO** (react-helmet, métadonnées)
- ✅ **Bonnes pratiques** (Architecture, composants réutilisables)

**Je cherche activement une opportunité de stage PFE pour consolider ces compétences sur des projets réels.**

---

## 📄 License

MIT - Libre d'utilisation et de modification

---

<div align="center">

**Construit avec ❤️ pour décrocher un stage PFE** 🚀

*Dernière mise à jour: Mars 2026*

</div>
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
