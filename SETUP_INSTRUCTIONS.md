# 🎯 Instructions de Configuration - AI Chatbot KS LAB

## ⚡ Démarrage Ultra-Rapide

### Étape 1 : Installer les Dépendances
```bash
cd /Users/ibrahimalnezami/Desktop/KS
npm install
```

### Étape 2 : Créer le Fichier de Configuration
Créez un fichier `.env.local` à la racine du projet :
```bash
touch .env.local
```

Puis ajoutez-y le contenu suivant :
```env
OPENAI_API_KEY=votre-cle-openai
WEATHER_API_KEY=votre-cle-openweathermap
```

### Étape 3 : Obtenir les Clés API

#### OpenAI API Key
1. Allez sur https://platform.openai.com/signup
2. Créez un compte (si nécessaire)
3. Allez dans API Keys : https://platform.openai.com/api-keys
4. Cliquez sur "Create new secret key"
5. Nommez-la "KS-LAB-Chatbot"
6. Copiez la clé (elle commence par `sk-proj-...`)
7. Collez-la dans `.env.local` après `OPENAI_API_KEY=`

**Important** : Vous aurez besoin de crédits sur votre compte OpenAI (environ $5 minimum)

#### OpenWeatherMap API Key
1. Allez sur https://openweathermap.org/api
2. Cliquez sur "Get API Key" ou "Sign Up"
3. Créez un compte gratuit
4. Allez dans votre profil → API Keys
5. Copiez la clé par défaut (ou créez-en une nouvelle)
6. Collez-la dans `.env.local` après `WEATHER_API_KEY=`

**Note** : Le plan gratuit offre 1000 appels/jour (largement suffisant)
**Attention** : L'activation peut prendre 10 minutes à 2 heures

### Étape 4 : Lancer l'Application
```bash
npm run dev
```

### Étape 5 : Tester
Ouvrez http://localhost:3000 dans votre navigateur

**Tests à effectuer :**
1. Message simple : "Bonjour !"
2. Question météo : "Quelle est la météo à Paris ?"
3. Édition : Survolez votre message → Cliquez "Modifier"

## 🐛 Résolution de Problèmes

### Erreur : "Cannot find module"
**Solution** : Exécutez `npm install`

### Erreur : "OpenAI API key not found"
**Solution** : 
1. Vérifiez que `.env.local` existe
2. Vérifiez que la clé est bien copiée
3. Redémarrez le serveur (`Ctrl+C` puis `npm run dev`)

### Erreur : "Invalid API key"
**Solution** :
1. Vérifiez que votre clé OpenAI est active
2. Vérifiez que vous avez des crédits
3. Essayez de créer une nouvelle clé

### La météo ne fonctionne pas
**Solution** :
1. Vérifiez votre clé OpenWeatherMap
2. Attendez 10-15 minutes (délai d'activation)
3. Vérifiez le nom de la ville (utilisez des noms courants)

### Port 3000 déjà utilisé
**Solution** :
```bash
npm run dev -- -p 3001
```
Puis ouvrez http://localhost:3001

## 📋 Checklist Complète

- [ ] Node.js 18+ installé (`node --version`)
- [ ] npm installé (`npm --version`)
- [ ] Dépendances installées (`npm install`)
- [ ] Fichier `.env.local` créé
- [ ] Clé OpenAI ajoutée et valide
- [ ] Clé Weather ajoutée et activée
- [ ] Serveur lancé (`npm run dev`)
- [ ] Application accessible sur http://localhost:3000
- [ ] Test message simple effectué
- [ ] Test météo effectué
- [ ] Test édition effectué

## 🚀 Prochaines Étapes

Une fois que tout fonctionne localement :

1. **Déploiement** : Consultez `DEPLOYMENT.md`
2. **Documentation** : Lisez `README.md` pour plus de détails
3. **Code** : Explorez les fichiers dans `app/` et `components/`

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez cette checklist
2. Consultez `README.md` section "Dépannage"
3. Vérifiez les logs dans le terminal

## ✅ Validation Finale

Tout fonctionne si vous pouvez :
1. ✅ Envoyer un message et recevoir une réponse streaming
2. ✅ Demander la météo d'une ville et obtenir la température
3. ✅ Modifier un message et voir la conversation relancée

---

**Bon développement ! 🎉**

