# 🔧 Correction Déploiement Vercel

## ❌ Problème Actuel
URL : https://ks-pink.vercel.app  
Erreur : `404: NOT_FOUND`

## ✅ Solution

### Étape 1 : Mettre à jour le code sur Vercel

Si vous avez déployé via GitHub :

```bash
# 1. Commit les changements
git add .
git commit -m "Fix Vercel configuration"
git push origin main
```

Vercel va automatiquement redéployer.

### Étape 2 : Configurer les Variables d'Environnement

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet `ks-pink`
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez ces variables :

| Name | Value | Environments |
|------|-------|--------------|
| `GEMINI_API_KEY` | Votre clé Gemini | Production, Preview, Development |
| `WEATHER_API_KEY` | Votre clé Weather | Production, Preview, Development |

### Étape 3 : Redéployer

Après avoir ajouté les variables :

1. Allez dans **Deployments**
2. Cliquez sur les **3 points** du dernier déploiement
3. Cliquez **Redeploy**

Ou via terminal :

```bash
cd /Users/ibrahimalnezami/Desktop/KS
vercel --prod
```

---

## 🚀 Déploiement Depuis le Début

Si vous préférez tout refaire :

### Option A : Via Interface Vercel

1. **Supprimez le projet actuel** sur Vercel
2. **Créez un nouveau projet** :
   - Allez sur https://vercel.com
   - Click **Add New** → **Project**
   - Importez votre repo GitHub
   - Vercel détectera automatiquement Next.js
   
3. **Ajoutez les variables** (voir Étape 2 ci-dessus)

4. **Déployez** !

### Option B : Via CLI

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
cd /Users/ibrahimalnezami/Desktop/KS
vercel

# 4. Ajouter les variables
vercel env add GEMINI_API_KEY
# Entrer votre clé Gemini quand demandé
# Choisir : Production, Preview, Development (toutes)

vercel env add WEATHER_API_KEY
# Entrer votre clé Weather quand demandé
# Choisir : Production, Preview, Development (toutes)

# 5. Redéployer avec les variables
vercel --prod
```

---

## 📋 Checklist de Vérification

Avant de déployer, vérifiez :

- [ ] `vercel.json` est simplifié (voir le nouveau fichier)
- [ ] Clé `GEMINI_API_KEY` configurée sur Vercel
- [ ] Clé `WEATHER_API_KEY` configurée sur Vercel
- [ ] Code pushé sur GitHub (si déploiement GitHub)
- [ ] Build réussit localement : `npm run build`

---

## 🧪 Tester le Build Localement

Avant de déployer, testez que le build fonctionne :

```bash
cd /Users/ibrahimalnezami/Desktop/KS

# Build de production
npm run build

# Si succès, démarrer en mode production
npm start

# Ouvrir http://localhost:3000
```

Si le build local fonctionne, Vercel devrait fonctionner aussi.

---

## ⚠️ Erreurs Communes

### Erreur : "Module not found"
**Solution** : Vérifiez que toutes les dépendances sont dans `package.json`

```bash
npm install
```

### Erreur : "Environment variable not defined"
**Solution** : Ajoutez les variables dans le dashboard Vercel

### Erreur : "404 on deployment"
**Solution** : 
1. Vérifiez que `app/page.tsx` existe
2. Simplifiez `vercel.json` (fait ✅)
3. Redéployez

---

## 📱 Vérification Post-Déploiement

Une fois déployé, testez sur https://ks-pink.vercel.app :

1. ✅ Page d'accueil s'affiche
2. ✅ Envoyer un message → Streaming fonctionne
3. ✅ "Météo à Paris ?" → Données réelles
4. ✅ Éditer un message → Fonctionne

---

## 🆘 Si Ça Ne Fonctionne Toujours Pas

### 1. Vérifier les Logs Vercel

1. Dashboard Vercel → Votre projet
2. Onglet **Deployments**
3. Cliquer sur le déploiement
4. Voir **Build Logs** et **Function Logs**

### 2. Vérifier que Next.js est détecté

Dans les logs de build, vous devriez voir :
```
Detected Next.js
Build Command: next build
```

### 3. Support

Si le problème persiste :
- Logs Vercel : https://vercel.com/docs/deployments/logs
- Support : https://vercel.com/support

---

## ✅ Configuration Correcte

Votre nouveau `vercel.json` (déjà mis à jour) :

```json
{
  "framework": "nextjs"
}
```

C'est tout ! Vercel gère le reste automatiquement.

---

**Suivez ce guide et votre app sera déployée correctement ! 🚀**

