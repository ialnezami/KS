# 🚀 Démarrage Rapide - AI Chatbot KS LAB

## Installation en 3 Étapes

### 1️⃣ Installer les dépendances
```bash
npm install
```

### 2️⃣ Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
OPENAI_API_KEY=sk-votre-cle-openai-ici
WEATHER_API_KEY=votre-cle-openweathermap-ici
```

**Où obtenir les clés ?**
- **OpenAI** : https://platform.openai.com/api-keys
- **OpenWeatherMap** : https://openweathermap.org/api (gratuit)

### 3️⃣ Lancer l'application
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur !

## 🧪 Test Rapide

Essayez ces commandes dans le chat :

1. **Chat simple** : "Bonjour, comment ça va ?"
2. **Météo** : "Quelle est la météo à Paris ?"
3. **Édition** : Survolez votre message → Cliquez "Modifier" → Modifiez → "Enregistrer"

## 📦 Structure des Fichiers

```
KS/
├── app/
│   ├── api/chat/route.ts    # ⚡ API avec streaming + météo
│   ├── page.tsx             # 🏠 Page principale
│   └── layout.tsx           # 🎨 Layout global
├── components/
│   ├── Chat.tsx             # 💬 Composant chat principal
│   ├── MessageBubble.tsx    # 💭 Bulles de messages
│   └── ChatInput.tsx        # ⌨️ Zone de saisie
└── types/
    └── chat.ts              # 📝 Types TypeScript
```

## ✨ Fonctionnalités Principales

- ✅ Streaming en temps réel des réponses
- ✅ Intégration météo automatique
- ✅ Édition de messages avec relance
- ✅ UI moderne avec Tailwind CSS
- ✅ Mode sombre automatique
- ✅ Responsive design

## 🚀 Déploiement Vercel

Consultez [DEPLOYMENT.md](./DEPLOYMENT.md) pour le guide complet.

**Version courte** :
```bash
vercel
```

Puis ajoutez vos variables d'environnement dans le dashboard Vercel.

## ❓ Problèmes Courants

**Erreur : "Cannot find module 'openai'"**
→ Exécutez `npm install`

**La météo ne fonctionne pas**
→ Vérifiez votre `WEATHER_API_KEY` dans `.env.local`

**Pas de réponse du chatbot**
→ Vérifiez votre `OPENAI_API_KEY` et vos crédits OpenAI

## 📚 Documentation Complète

- [README.md](./README.md) - Documentation complète
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide de déploiement détaillé

---

**Bon développement ! 🎉**

