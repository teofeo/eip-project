# Iziclub 🏆 - Monorepo Project (API, Web, Mobile)

Bienvenue dans le monorepo de notre projet ! Ce dépôt regroupe les 3 applications suivantes :

* **API** : backend AdonisJS
* **Web** : frontend Next.js
* **Mobile** : application mobile Expo (React Native)
* Géré avec **Turborepo**, **pnpm**, et un environnement **DevContainer**

---

## 📁 Structure du monorepo

```
apps/
  api/        # Application AdonisJS (backend)
  web/        # Application Next.js (frontend)
  mobile/     # Application Expo (React Native)
packages/
  ...         # Librairies partagées (si applicable)
```

---

## 🧰 Outils utilisés

* **Turborepo** : pour orchestrer les builds, les caches, etc.
* **pnpm** : gestionnaire de paquets rapide et fiable avec support monorepo
* **DevContainer** : environnement de développement standardisé (VS Code + Docker)
* **Node.js** : version `24.4.0`
* **Expo CLI**, **AdonisJS CLI**, **Next.js**

---

## 🚀 Démarrage rapide

### 1. Prérequis

* Docker + VS Code
* [pnpm](https://pnpm.io/installation)
* Node.js via `.nvmrc` ou version recommandée

### 2. DevContainer (recommandé)

Si tu utilises VS Code :

```bash
# Ouvrir dans un conteneur
> F1 > Dev Containers: Reopen in Container
```

### 3. Installation des dépendances

```bash
pnpm install
```

### 4. Démarrage des applications

```bash
# Lancer toutes les apps
pnpm dev

# Ou une seule
pnpm --filter api dev
pnpm --filter web dev
pnpm --filter mobile start
```

---

## 🔄 Turborepo

Les commandes principales :

```bash
pnpm dev          # Démarre toutes les apps en mode dev
pnpm build        # Build tout le monorepo
pnpm lint         # Linter sur tous les projets
pnpm test         # Exécute tous les tests (si configurés)
```

---

## 📦 Dossier `packages/` (optionnel)

Utilisé pour les composants partagés, hooks, types, etc.

---

## 🧪 Tests

### Objectifs
- Garantir la qualité du code sur toutes les applications (API, Web, Mobile).
- Détecter rapidement les régressions.
- Faciliter la maintenance et la confiance lors des déploiements.

### Organisation
- Chaque app a un dossier `tests/` à sa racine (`apps/api/tests`, `apps/web/tests`, `apps/mobile/tests`)
- Les tests unitaires et d’intégration y sont regroupés
- On lance les tests avant chaque commit

### Commandes principales

```bash
pnpm test          # Lance tous les tests du monorepo  
pnpm --filter api test     # Tests de l’API (AdonisJS)  
pnpm --filter web test     # Tests du web (Next.js)  
pnpm --filter mobile test  # Tests du mobile (Expo)  
```

### Frameworks utilisés
- **API (AdonisJS)** : tests unitaires et fonctionnels avec [Japa](https://japa.dev/), le framework de test officiel d'AdonisJS.
- **Web (Next.js)** : tests unitaires et d'intégration avec [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
- **Mobile (Expo)** : tests unitaires avec [Jest](https://jestjs.io/) + tests d'intégration avec [React Native Testing Library](https://callstack.github.io/react-native-testing-library/).

## 💡 Bonnes pratiques

* Utiliser `pnpm` uniquement, pas `npm` ni `yarn`
* Garder chaque app isolée autant que possible
* Factoriser dans `packages/` ce qui peut être partagé
* Utiliser les scripts `pnpm` depuis la racine ou `--filter`

---

## 🗃️ Environnements

### 🔍 Vue d’ensemble

Chaque application du monorepo utilise ses propres fichiers d’environnement, stockés localement et non commités. Voici la liste des fichiers par app :

| App       | Fichier                   | Description                             |
|-----------|---------------------------|-----------------------------------------|
| API       | `apps/api/.env`           | Configuration de l'API (DB, JWT, etc.) |
| Web       | `apps/web/.env.local`     | Variables publiques pour le frontend    |
| Mobile    | `apps/mobile/.env`        | Clés et endpoints pour l'app mobile     |

---

### 📁 Détail par application

#### `apps/api/.env`

| Variable     | Description                         | Exemple                |
|--------------|-------------------------------------|------------------------|
| `DB_HOST`    | Adresse de la base de données       | `localhost`            |
| `DB_USER`    | Utilisateur de la base de données   | `root`                 |
| `DB_PASSWORD`| Mot de passe de la base             | `password123`          |
| `API_SECRET` | Clé secrète pour signer les tokens  | `mysupersecretkey123`  |
| `PORT`       | Port de l’API                       | `3333`                 |

#### `apps/web/.env`

| Variable                | Description                                | Exemple                             |
|-------------------------|--------------------------------------------|-------------------------------------|
| `NEXT_PUBLIC_API_URL`   | URL publique de l’API                      | `https://api.example.com`           |
| `NEXT_PUBLIC_APP_NAME`  | Nom de l’application                       | `MonApp`                            |
| `NEXT_PUBLIC_VERSION`   | Version du frontend affichée               | `1.0.0`                             |

#### `apps/mobile/.env`

| Variable           | Description                                  | Exemple                            |
|--------------------|----------------------------------------------|------------------------------------|
| `API_BASE_URL`     | URL de base de l’API                         | `https://api.example.com`          |
| `GOOGLE_MAPS_KEY`  | Clé API Google Maps                          | `AIzaSy...`                        |
| `APP_ENV`          | Environnement courant (`dev`, `prod`, etc.) | `dev`                              |

---

### 📌 Chargement des variables

| App    | Mécanisme de chargement                                   |
|--------|-----------------------------------------------------------|
| API    | Chargement via [`dotenv`](https://www.npmjs.com/package/dotenv) ou `Env` d'AdonisJS |
| Web    | Chargement automatique par Next.js via `.env.local`       |
| Mobile | Chargement via [`react-native-dotenv`](https://github.com/goatandsheep/react-native-dotenv) ou autre outil |

---

### 🔐 Sécurité & partage

#### ✅ Bonnes pratiques

- **Ne jamais committer les fichiers `.env`** contenant des secrets  
- Ajouter dans le `.gitignore` global du repo :

```gitignore
.env
.env.*
```
Fournir un fichier d’exemple pour chaque app :

``` bash
apps/api/.env.example
apps/web/.env.example
apps/mobile/.env.example
```
Ces fichiers doivent contenir la liste des variables attendues, sans valeurs sensibles.

 ---

## 📚 Ressources utiles

* [Documentation AdonisJS](https://docs.adonisjs.com)
* [Next.js](https://nextjs.org/docs)
* [Expo](https://docs.expo.dev)
* [Turborepo](https://turbo.build/repo/docs)
* [pnpm](https://pnpm.io)

---

## 👥 Équipe

* Quentin (Chef de projet)
* Téo (API, DevOps, SysAdmin)
* Lucas (Web Designer, Frontend)
* Gautier (Mobile)
