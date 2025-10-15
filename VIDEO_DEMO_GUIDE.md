# 🎥 Guide pour Vidéo de Démonstration

## 📋 Checklist Avant Enregistrement

### ✅ Vérifications
- [ ] Application en cours d'exécution sur http://localhost:3002
- [ ] Clés API configurées dans `.env.local`
- [ ] Navigateur ouvert en mode plein écran
- [ ] Logiciel d'enregistrement prêt (voir ci-dessous)

---

## 🎬 Script de Démonstration (2-3 minutes)

### 1. Introduction (10 secondes)
**Action** : Montrer la page d'accueil
- Titre "AI Chatbot Assistant"
- Interface propre et moderne
- Message de bienvenue de l'IA

**À dire** : 
> "Voici mon chatbot AI avec streaming en temps réel, météo intégrée et édition de messages."

---

### 2. Test du Chat de Base (30 secondes)

**Message à envoyer** : `Bonjour ! Comment vas-tu ?`

**Montrer** :
- ✅ Animation de typing (3 points qui rebondissent)
- ✅ Streaming de la réponse en temps réel
- ✅ Message propre sans astérisques
- ✅ Réponse courte et naturelle

**À dire** :
> "Le chatbot utilise Google Gemini avec streaming en temps réel."

---

### 3. Test de la Météo (30 secondes)

**Message à envoyer** : `Quelle est la météo à Paris ?`

**Montrer** :
- ✅ Détection automatique de la question météo
- ✅ Intégration des données réelles
- ✅ Réponse avec température et conditions
- ✅ Format concis et naturel

**À dire** :
> "L'outil météo détecte automatiquement la question et intègre les données en temps réel depuis OpenWeatherMap."

---

### 4. Test de l'Édition de Message (45 secondes)

**Actions** :
1. Survoler un message utilisateur
2. Montrer l'icône circulaire "Modifier" qui apparaît
3. Cliquer sur l'icône
4. Modifier le texte
5. Cliquer "Enregistrer"
6. Montrer que la conversation reprend

**Message original** : `Bonjour !`
**Message modifié** : `Salut, quel temps fait-il à Londres ?`

**Montrer** :
- ✅ Icône moderne dans le coin
- ✅ Interface d'édition avec textarea
- ✅ Boutons "Enregistrer" et "Annuler" stylisés
- ✅ Relance de la conversation
- ✅ Nouvelle réponse météo pour Londres

**À dire** :
> "On peut modifier n'importe quel message en cliquant sur l'icône. La conversation reprend à partir de ce point."

---

### 5. Test du Design Responsive (15 secondes)

**Actions** :
- Réduire la fenêtre du navigateur
- Montrer le mode responsive
- Revenir en plein écran

**Montrer** :
- ✅ Interface s'adapte parfaitement
- ✅ Messages restent lisibles
- ✅ Boutons restent accessibles

**À dire** :
> "L'interface est 100% responsive avec Tailwind CSS."

---

### 6. Récapitulatif Technique (20 secondes)

**Montrer rapidement** :
- Code dans VS Code (optionnel)
- Structure des dossiers
- Technologies utilisées

**À dire** :
> "Stack technique : Next.js 14, TypeScript, React, Google Gemini, Tailwind CSS. Code propre et documenté."

---

## 🎥 Logiciels d'Enregistrement Recommandés

### macOS
**QuickTime Player** (Gratuit, Natif)
```bash
# Ouvrir QuickTime
open -a "QuickTime Player"
# Fichier > Nouvel enregistrement de l'écran
```

**ScreenFlow** (Payant, Professionnel)
- Meilleur pour montage
- Effets et transitions

**OBS Studio** (Gratuit, Open Source)
```bash
brew install obs
```

### Tous systèmes
**Loom** (Gratuit en ligne)
- https://www.loom.com
- Enregistrement instantané
- Partage facile

---

## 🎨 Conseils pour une Bonne Vidéo

### Préparation
- ✅ Fermez les onglets inutiles
- ✅ Masquez les notifications
- ✅ Mode "Ne pas déranger"
- ✅ Zoom à 100% dans le navigateur
- ✅ Testez une fois avant d'enregistrer

### Pendant l'Enregistrement
- ✅ Parlez clairement
- ✅ Allez à un rythme modéré
- ✅ Montrez chaque fonctionnalité complètement
- ✅ Pause 1-2 secondes entre chaque action

### Qualité
- ✅ Résolution : Minimum 1080p
- ✅ Format : MP4
- ✅ Durée : 2-3 minutes maximum
- ✅ Son : Clair (utilisez un micro si possible)

---

## ✅ Points à Absolument Montrer

### Fonctionnalités PRD
1. ✅ **Streaming LLM** - Réponse progressive visible
2. ✅ **Outil météo** - Intégration données réelles
3. ✅ **Édition messages** - Relance conversation
4. ✅ **UI/UX moderne** - Design professionnel

### Stack Technique
1. ✅ **Next.js** - Mentionner App Router
2. ✅ **TypeScript** - Montrer un fichier .ts
3. ✅ **React** - Composants fonctionnels
4. ✅ **Pas de Python** - Backend Next.js uniquement

---

## 📝 Messages de Test Recommandés

### Pour le Chat
```
1. "Bonjour ! Comment vas-tu ?"
2. "Raconte-moi une blague courte"
3. "Qu'est-ce que tu peux faire ?"
```

### Pour la Météo
```
1. "Quelle est la météo à Paris ?"
2. "Quel temps fait-il à Tokyo ?"
3. "Météo de Londres"
```

### Pour l'Édition
```
Original : "Bonjour !"
Modifié : "Météo à New York ?"
```

---

## 🎯 Structure Vidéo Recommandée

### Option 1 : Courte (2 minutes)
```
00:00 - 00:10 : Introduction + Interface
00:10 - 00:40 : Chat + Streaming
00:40 - 01:10 : Météo
01:10 - 01:50 : Édition
01:50 - 02:00 : Conclusion
```

### Option 2 : Complète (3 minutes)
```
00:00 - 00:10 : Introduction
00:10 - 00:30 : Interface et design
00:30 - 01:00 : Chat avec streaming
01:00 - 01:30 : Météo
01:30 - 02:10 : Édition de message
02:10 - 02:40 : Responsive design
02:40 - 03:00 : Stack technique + Conclusion
```

---

## 🚀 Commandes pour Préparer la Démo

```bash
# 1. S'assurer que le serveur tourne
cd /Users/ibrahimalnezami/Desktop/KS
npm run dev

# 2. Ouvrir dans le navigateur
open http://localhost:3002

# 3. Vérifier que tout fonctionne
# - Envoyer un message test
# - Tester la météo
# - Tester l'édition
```

---

## 📤 Après l'Enregistrement

### Montage (Optionnel)
- Couper le début/fin
- Ajouter un titre
- Accélérer les moments lents (loading)

### Export
- **Format** : MP4 (H.264)
- **Résolution** : 1080p (1920x1080)
- **Qualité** : Haute
- **Taille** : < 100 MB si possible

### Partage
- **YouTube** (Unlisted) : Meilleur pour portfolio
- **Loom** : Plus rapide à partager
- **Google Drive** : Partage de fichier direct

---

## ✨ Exemple de Script Vocal

> "Bonjour, je vous présente mon chatbot AI développé pour le test technique KS LAB.
>
> L'application utilise Next.js 14, TypeScript et React, avec Google Gemini pour l'IA.
>
> Première fonctionnalité : le streaming en temps réel. Vous voyez que la réponse s'affiche progressivement.
>
> Deuxième fonctionnalité : l'outil météo intégré. Il détecte automatiquement ma question et récupère les données réelles.
>
> Troisième fonctionnalité : l'édition de messages. Je survole mon message, clique sur l'icône, modifie le texte, et la conversation reprend.
>
> L'interface est moderne, responsive, et utilise Tailwind CSS avec un mode sombre automatique.
>
> Merci !"

---

## 🎬 Prêt à Enregistrer !

Suivez ce guide, testez d'abord sans enregistrer, puis lancez l'enregistrement quand vous êtes prêt.

**Bonne chance ! 🎥**

