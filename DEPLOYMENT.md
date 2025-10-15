# Guide de Déploiement Vercel

## 🚀 Déploiement Rapide sur Vercel

### Méthode 1 : Depuis GitHub (Recommandée)

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Chatbot KS LAB"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/ai-chatbot-ks.git
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js

3. **Configurer les Variables d'Environnement**
   
   Dans les paramètres du projet Vercel, ajoutez :
   
   | Variable | Valeur |
   |----------|--------|
   | `OPENAI_API_KEY` | Votre clé OpenAI |
   | `WEATHER_API_KEY` | Votre clé OpenWeatherMap |

4. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez quelques minutes
   - Votre application sera disponible sur `https://votre-projet.vercel.app`

### Méthode 2 : Via Vercel CLI

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   vercel
   ```

4. **Ajouter les variables d'environnement**
   ```bash
   vercel env add OPENAI_API_KEY
   vercel env add WEATHER_API_KEY
   ```

5. **Redéployer avec les variables**
   ```bash
   vercel --prod
   ```

## 🔑 Obtenir les Clés API

### OpenAI API Key

1. Visitez [platform.openai.com](https://platform.openai.com)
2. Créez un compte ou connectez-vous
3. Allez dans "API Keys"
4. Cliquez sur "Create new secret key"
5. Copiez et sauvegardez votre clé

**Note** : Vous aurez besoin de crédits sur votre compte OpenAI.

### OpenWeatherMap API Key

1. Visitez [openweathermap.org](https://openweathermap.org/api)
2. Créez un compte gratuit
3. Allez dans "API Keys"
4. Votre clé par défaut sera déjà créée
5. Copiez votre clé API

**Note** : Le plan gratuit offre 1000 appels/jour, largement suffisant pour les tests.

## ✅ Vérification Post-Déploiement

Une fois déployé, testez :

1. **Chat basique** : Envoyez un message simple
2. **Streaming** : Vérifiez que les réponses s'affichent progressivement
3. **Météo** : Testez avec "Quelle est la météo à Paris ?"
4. **Édition** : Modifiez un message et vérifiez la relance

## 🐛 Résolution de Problèmes

### Erreur : "OpenAI API key not found"
- Vérifiez que `OPENAI_API_KEY` est bien configurée dans Vercel
- Redéployez après avoir ajouté la variable

### Erreur : "Weather API not responding"
- Vérifiez que `WEATHER_API_KEY` est bien configurée
- Assurez-vous que votre clé OpenWeatherMap est active (peut prendre quelques heures après création)

### Erreur de Build
- Vérifiez que toutes les dépendances sont dans `package.json`
- Assurez-vous que la version de Node.js est 18+

## 📊 Monitoring

Vercel fournit automatiquement :
- Logs en temps réel
- Métriques de performance
- Alertes d'erreur

Accédez-y via le dashboard Vercel de votre projet.

## 🔄 Mises à Jour

Pour déployer des mises à jour :

1. Faites vos modifications localement
2. Commitez et pushez sur GitHub
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push
   ```
3. Vercel redéploiera automatiquement !

## 📱 Domaine Personnalisé (Optionnel)

1. Dans les paramètres Vercel du projet
2. Allez dans "Domains"
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions DNS

---

**Besoin d'aide ?** Consultez la [documentation Vercel](https://vercel.com/docs)

