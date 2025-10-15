# AI Chatbot - KS LAB Technical Test

Une application de chatbot AI moderne avec streaming en temps réel, intégration météo et édition de messages.

## 🚀 Fonctionnalités

- ✨ **Streaming en temps réel** : Réponses du LLM affichées en temps réel avec streaming
- 🌤️ **Outil météo intégré** : Demandez la météo de n'importe quelle ville
- ✏️ **Édition de messages** : Modifiez vos messages et relancez la conversation
- 🎨 **UI/UX moderne** : Interface élégante avec mode sombre
- ⚡ **Performance optimale** : Utilise Next.js avec Edge Runtime

## 🛠️ Stack Technique

- **Framework** : Next.js 14
- **Langage** : TypeScript
- **UI** : React + Tailwind CSS
- **LLM** : Google Gemini Pro (Gratuit !)
- **Météo** : OpenWeatherMap API
- **Streaming** : Native ReadableStream

## 📋 Prérequis

- Node.js 18+ et npm
- Clé API Google Gemini (gratuite !)
- Clé API OpenWeatherMap (gratuite)

## 🔧 Installation

1. **Cloner le projet**
   ```bash
   cd KS
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   
   Créez un fichier `.env.local` à la racine du projet :
   ```env
   GEMINI_API_KEY=votre_cle_gemini
   WEATHER_API_KEY=votre_cle_openweathermap
   ```

   Pour obtenir les clés API :
   - **Google Gemini** : https://makersuite.google.com/app/apikey (GRATUIT)
   - **OpenWeatherMap** : https://openweathermap.org/api (GRATUIT)

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir l'application**
   
   Visitez [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement sur Vercel

### Option 1 : Via Git (Recommandé)

1. Pushez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Configurez les variables d'environnement :
   - `GEMINI_API_KEY`
   - `WEATHER_API_KEY`
4. Déployez !

### Option 2 : Via CLI

```bash
npm install -g vercel
vercel
```

Suivez les instructions et n'oubliez pas d'ajouter vos variables d'environnement.

## 💡 Utilisation

### Chat de base
Tapez n'importe quelle question dans l'interface de chat et obtenez une réponse streaming en temps réel.

### Demander la météo
Essayez des questions comme :
- "Quelle est la météo à Paris ?"
- "Quel temps fait-il à Tokyo ?"
- "Météo de Londres"

### Éditer un message
1. Passez la souris sur votre message
2. Cliquez sur "Modifier"
3. Modifiez le texte et cliquez sur "Enregistrer"
4. La conversation reprend à partir de ce point

## 🏗️ Structure du Projet

```
KS/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API route avec streaming et météo
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   └── globals.css               # Styles globaux
├── components/
│   ├── Chat.tsx                  # Composant principal du chat
│   ├── ChatInput.tsx             # Zone de saisie
│   └── MessageBubble.tsx         # Bulle de message avec édition
├── types/
│   └── chat.ts                   # Types TypeScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Fonctionnalités Clés

### Streaming LLM
Utilise Google Gemini Pro avec streaming pour afficher les réponses en temps réel, offrant une meilleure expérience utilisateur.

### Intégration Météo
Détecte automatiquement les questions météo et enrichit le contexte avec des données réelles via OpenWeatherMap.

### Édition de Messages
Permet de modifier les messages utilisateur et de relancer la conversation à partir de ce point, utile pour corriger ou reformuler.

## 🔒 Sécurité

- Les clés API sont stockées côté serveur uniquement
- Utilisation de l'Edge Runtime pour une meilleure performance
- Pas d'exposition des secrets côté client

## 🐛 Dépannage

### Le streaming ne fonctionne pas
- Vérifiez que votre clé Gemini est valide
- Assurez-vous que la clé est bien configurée dans `.env.local`
- Voir `GEMINI_SETUP.md` pour plus de détails

### La météo ne fonctionne pas
- Vérifiez que votre clé OpenWeatherMap est valide
- Assurez-vous que l'API est activée sur votre compte

### Erreur de build
- Supprimez `node_modules` et `.next`
- Relancez `npm install` puis `npm run dev`

## 📝 License

Ce projet est créé pour le test technique KS LAB.

## 👨‍💻 Auteur

Développé avec ❤️ pour KS LAB

