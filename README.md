# 🎯 Portfolio — Aaron Zerrouk

Bienvenue dans le dépôt GitHub de mon portfolio ! Ce document explique la structure et l'organisation de mon site portfolio.

---

## 📂 Structure du projet

### Vue d'ensemble
```
/
├── index.html          # Page principale du portfolio
├── index.css           # Styling global
├── index.js            # Comportements interactifs
├── _config.yml         # Configuration Jekyll
├── README.md           # Ce fichier
├── img/                # Images et ressources visuelles
├── cards/              # Images des projets 
└── oil/                # Ressources pour le projet e-commerce
```

---

## 🏗️ Sections du portfolio

Le portfolio est organisé en **5 sections principales** accessibles via la navigation :

### 1️⃣ **Section Héros (Home)**
- **ID** : `#home`
- **But** : Présentation immédiate avec accroche
- **Éléments** :
  - Fond animé avec starfield (champ d'étoiles)
  - Introduction personnelle
  - Boutons d'appel à l'action (CTA)
  - Animations fluides au scroll

### 2️⃣ **Section À propos**
- **ID** : `#about`
- **But** : Se présenter et montrer ses qualités
- **Éléments** :
  - Texte descriptif
  - Cartes de traits personnels (Calme, Adaptable, Autonome)
  - Mise en page responsive

### 3️⃣ **Section Projets**
- **ID** : `#projets`
- **But** : Montrer les réalisations sous forme de portfolio
- **Éléments** :
  - **6 cartes de projets** interactives :
    - 01 : Site J-Pop YOASOBI
    - 02 : Gestion de parc informatique (GLPI)
    - 03 : E-commerce Huiles
    - 04 : Configurateur Plexiglass
    - 05 : BiblioTech - Library Management
    - 06 : BoutikPro - Commerce Management
  - Chaque carte contient :
    - Image/screenshot du projet
    - Tags technologiques
    - Titre et description court
    - Lien vers modal détaillée

### 3️⃣ **Section Éducation**
- **ID** : `#education`
- **But** : Présenter le parcours académique de manière chronologique
- **Éléments** :
  - Timeline verticale avec 3 étapes :
    - BTS SIO SLAM (2024 — 2026)
    - Licence Musicologie Année 0 (2023 — 2024)
    - Baccalauréat STI2D Mention Bien (2022 — 2023)
  - Chaque étape contient :
    - Période des études
    - Titre de la formation
    - Établissement/Institution
    - Description détaillée
    - Tags de spécialités/compétences
  - Design avec points (dots) reliés et animations hover

### 4️⃣ **Section Expérience Professionnelle**
- **ID** : `#experience`
- **But** : Afficher l'expérience professionnelle en stages
- **Éléments** :
  - Timeline verticale avec 2 stages :
    - **Stage Développeur Web chez CTRLZ SAS** (Juin 2025)
      - Focus : Création site configurateur interactif
      - Missions : Fiches produits WordPress, gestion BDD MySQL, configurateur Vue.js, back office ecommerce
    - **Stage Développeur Full-Stack chez CoinMobile** (Janvier 2026)
      - Focus : Cycle complet de développement web
      - Missions : Gestion BDD, intégration backend, déploiement, UI tools
  - Chaque stage contient :
    - Période du stage
    - Titre du poste
    - Entreprise
    - Description détaillée des missions
    - (optionnel) Liste des missions principales dans une boîte surlignée
    - Tags de technologies utilisées
    - (optionnel) Lien vers le projet réalisé durant le stage
  - Design cohérent avec la timeline d'éducation
  - Missions présentées de manière claire avec puces et flèches

### 5️⃣ **Section Compétences**
- **ID** : `#skills`
- **But** : Afficher le stack technique avec indicateurs visuels
- **Éléments** :
  - **3 catégories** :
    - Langages (HTML, CSS, JS, TypeScript, PHP, MySQL, Python)
    - Frameworks (React, Next.js, Vue.js, Laravel, Tailwind, Faker)
    - Outils (Git, VSCode, Figma, Docker, LLM API, Vercel, PostgreSQL, Supabase)
  - Barres de progression pour chaque compétence
  - Pourcentage de maîtrise

### 6️⃣ **Section Langues**
- **ID** : `#langues`
- **But** : Montrer la maîtrise des langues
- **Éléments** :
  - Cartes pour chaque langue
  - Niveau de maîtrise
  - Description du niveau (Natif, C1, A2, Autodidacte)

### 7️⃣ **Section Épreuve E5**
- **ID** : `#e5`
- **But** : Partager les documents officiels de l'épreuve E5
- **Éléments** :
  - **3 cartes de documents** téléchargeables :
    - Attestation de stage BTS1
    - Attestation de stage BTS2
    - Tableau de synthèse E5
  - Chaque carte contient :
    - Icône du type de document
    - Titre du document
    - Description
    - Badge de format (PDF, XLSX)
  - Lien de téléchargement direct

### 8️⃣ **Section Contact**
- **ID** : `#contact`
- **But** : Faciliter la prise de contact
- **Éléments** :
  - Formulaire de contact (via Formspree)
  - Email direct
  - Messages de validation

---

## 🎨 Éléments interactifs

### Animations
- ⭐ **Starfield** : Fond animé avec étoiles scintillantes
- 🎯 **Curseur personnalisé** : Suivi du curseur et points
- 🔄 **Animations au scroll** : Transitions fluides des sections
- ✨ **Hover effects** : Interactions sur les cartes et boutons

### Modalités interactives
- Clic sur les cartes de projets = Ouverture de modales détaillées
- Chaque projet a sa propre modale avec :
  - Contexte du projet
  - Captures d'écran
  - Technologies utilisées
  - Points clés

### Navigation
- Barre de navigation fixe avec menu responsive
- Bouton hamburger pour mobile
- Scroll smooth entre sections

---

## 📁 Ressources (Dossiers)

### `/img/`
Contient les images statiques et icônes :
- `chine.png` — Favicon
- `grp.jpg` — Image projet YOASOBI
- `glpi.jpg` — Image projet GLPI
- `jss.jpg` — Image supplémentaire
- `2.jpg` — Image supplémentaire

### `/cards/`
Captures d'écran des projets pour les modales :
- `SCREENGLPI.png` — Screenshot GLPI
- `Screen4YOA.png` — Screenshot YOASOBI
- `screen1YOA.png`, `screen2YOA.gif`, `screen3YOA.png` — Variantes YOASOBI
- `conf.png` — Configurateur plexiglass
- `pl.png` — Image plexiglass

### `/oil/`
Ressources pour le projet e-commerce huiles :
- `olive.png` — Logo/image principale
- `oil1.png` à `oil6.png` — Produits ou screenshots

### `/E5/`
Documents officiels concernant l'épreuve E5 :
- `Attestation de stage BTS1 - SIO.pdf` — Attestation première année
- `Attestation de stage BTS2 - SIO.pdf` — Attestation deuxième année
- `BTS_SIO_ZERROUK-Aaron_VI.5_Epreuve E5 - Tableau de synthe.se_2026.xlsx` — Tableau de synthèse

---

## 🎯 Navigation et flux

**Parcours utilisateur typique** :

1. **Atterrissage** → Section Héros avec présentation
2. **Découverte** → Section À propos pour connaître la personne
3. **Portfolio** → Section Projets, clic sur une carte
4. **Détails projets** → Modale avec informations complètes
5. **Parcours académique** → Section Éducation avec timeline chronologique
6. **Parcours professionnel** → Section Expérience avec stages
7. **Compétences** → Section Compétences et Langues
8. **Documents** → Section Épreuve E5 avec téléchargements
9. **Action** → Section Contact ou liens externes

---

## 🎬 Fonctionnalités JavaScript

Le fichier `index.js` gère :

- ✅ Menu mobile responsive
- ✅ Gestion des modales (ouverture/fermeture)
- ✅ Validation du formulaire de contact
- ✅ Animations au scroll
- ✅ Effets de curseur personnalisé
- ✅ Messages de succès du formulaire

---

## 🌐 Technologie front-end utilisée

- **HTML5** : Structure sémantique
- **CSS3** : Animations, flexbox/grid, variables CSS
- **JavaScript (Vanilla)** : Interactions et logique
- **Responsive Design** : Mobile-first approach
- **Google Fonts** : Polices Syne et DM Sans

---

## 📋 Fichiers clés

| Fichier | Rôle |
|---------|------|
| `index.html` | Structure HTML complète du portfolio |
| `index.css` | Tous les styles et animations |
| `index.js` | Interactivité et logique côté client |
| `_config.yml` | Configuration Jekyll pour GitHub Pages |
| `README.md` | Documentation (ce fichier) |

---

## 🔗 Liens importants

- 📄 **Portfolio en ligne** : Disponible sur GitHub Pages
- 📧 **Contact** : aaron.zerrouk96@gmail.com
- 🐙 **GitHub** : aaronZER69

---

**Dernière mise à jour** : Avril 2026
