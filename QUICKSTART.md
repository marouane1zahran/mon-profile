
# 🚀 QUICKSTART - Démarrer Votre Portfolio

## ⚡ 30 secondes pour démarrer

```bash
# 1. Aller dans le dossier
cd "c:\Users\HP\Desktop\react cours\react profil"

# 2. Démarrer le serveur (développement)
npm run dev

# Ouvrir: http://localhost:5173/
```

## 📋 Commandes Essentielles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualiser la build
npm run preview

# Vérifier le code
npm run lint
```

## 🎨 Fichiers à Personnaliser

1. **`src/data/profile.ts`** - Vos infos perso
2. **`src/data/projects.ts`** - Vos projets
3. **`src/data/education.ts`** - Votre formation
4. **Logo Header** - Modifier le texte "Marouane" dans Header.tsx

## 🌐 Déployer sur Vercel en 1 minute

```bash
# 1. Créer un repo GitHub et pousser le code
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# 2. Aller sur vercel.com
# → New Project
# → Select your GitHub repository
# → Deploy!

# 3. Ajouter un domaine personnalisé (optionnel)
```

## 📁 Structure du Projet

```
src/
├── pages/         → Toutes les pages (.tsx)
├── components/    → Composants réutilisables
├── data/          → Vos données (profile, projects, education)
├── app/           → Router et Layout
├── main.tsx       → Point d'entrée
└── index.css      → Styles globaux
```

## 🎯 Points Clés

✅ **Dark Mode** - Automatique + bouton toggle
✅ **Responsive** - Fonctionne sur tous les appareils
✅ **SEO** - Métadonnées optimisées
✅ **TypeScript** - Typage strict
✅ **Animations** - Framer-motion
✅ **Components** - shadcn/ui

## 🎨 Personnaliser

### Changer les couleurs

Modifier `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'brand': {
        'primary': '#votre-couleur',
      }
    }
  }
}
```

### Changer le nom dans le Header

Éditer `src/components/Header.tsx`:
```typescript
<Link to="/" className="font-bold text-2xl">
  Votre Nom
</Link>
```

### Ajouter des projets

Éditer `src/data/projects.ts`:
```typescript
export const projects = [
  {
    title: "Mon Nouveau Projet",
    period: "2026",
    tags: ["React", "TypeScript"],
    summary: "Description...",
  },
  // Ajouter d'autres projets
];
```

## 📞 Support Rapide

| Problème | Solution |
|----------|----------|
| Erreur `npm install` | Utiliser `--legacy-peer-deps` |
| Port 5173 occupé | Vite utilisera 5174... |
| Dark mode ne fonctionne pas | Vérifier localStorage |
| Build échoue | Vérifier `npm run lint` d'abord |

## 📚 Documentation Complète

- `README_PORTFOLIO.md` - Guide complet (50+ exemples)
- `DEPLOYMENT.md` - Guide déploiement Vercel
- `PROJECT_SUMMARY.md` - Résumé du projet
- `CHECKLIST.md` - Checklist complète

## ☑️ Avant Déploiement

```bash
npm run lint       # Zéro erreur?
npm run build      # Build OK?
npm run preview    # Ça marche?

# Déployer! 🚀
```

---

**Besoin d'aide?** Consultez `README_PORTFOLIO.md` pour plus de détails!

**Prêt?** `npm run dev` pour démarrer! 🎉
