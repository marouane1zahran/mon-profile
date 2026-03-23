# Guide de Déploiement sur Vercel

## 🚀 Déploiement Rapide

### Option 1: Via GitHub (Recommandé)

1. **Pousser le code sur GitHub:**
   ```bash
   git remote add origin <your-github-url>
   git add .
   git commit -m "Initial commit: Portfolio professionnel"
   git push -u origin main
   ```

2. **Déployer sur Vercel:**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer "New Project"
   - Sélectionner le repository
   - Vercel détecte automatiquement Vite
   - Cliquer "Deploy"

3. **Domaine personnalisé:**
   - Aller dans Project Settings > Domains
   - Ajouter votre domaine personnalisé
   - Suivre les instructions DNS

### Option 2: Deployer via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Production
vercel --prod
```

## 📋 Vérifications Pré-Déploiement

```bash
# Build final
npm run build

# Pas d'erreurs?
npm run lint

# Tester la build locale
npm run preview
# Ouvrir http://localhost:4173/
```

## ♻️ Variables d'Environnement (Optionnel)

Si vous avez besoin d'une API:

1. Créer `.env.local`:
   ```
   VITE_API_URL=https://api.example.com
   ```

2. Dans Vercel Settings > Environment Variables, ajouter:
   - Key: `VITE_API_URL`
   - Value: `https://api.example.com`

3. Utiliser dans le code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## 🔄 Redéploiement Automatique

- Chaque push sur `main` redéploie automatiquement
- Prévisualiser les changements avec les déploiements de preview
- Rollback facile à partir de Vercel Dashboard

## ✅ Checklist Final

- ✅ Code poussé sur GitHub
- ✅ `npm run build` réussi
- ✅ `npm run lint` sans erreurs
- ✅ Pas d'erreurs TypeScript
- ✅ Prévisualisation locale OK
- ✅ Vercel configuré et déployé
- ✅ Domaine pointant vers Vercel
- ✅ HTTPS activé automatiquement

## 📊 Performance

Timeline typique sur Vercel:
- **FCP (First Contentful Paint):** < 1s
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **Lighthouse Score:** 90+

## 🆘 Troubleshooting

### La build échoue sur Vercel

```bash
# Vérifier les versions locales
npm --version
node --version

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### CORS issues

Si vous appelez une API externe, ajouter:
```typescript
// Dans vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'https://api.example.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

### Cache busting

Vercel cache automatiquement les assets. Les fichiers JS/CSS ont des hash suffixes.

---

**Votre portfolio est maintenant prêt pour la production! 🎉**
