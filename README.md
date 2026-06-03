# SmartPC — Application d'aide au choix de PC

> Projet réalisé dans le cadre du module **Framework de Programmation Interactive**  
> 3A INFO — Groupe 2 | École d'ingénieurs | 2025–2026  
> Encadrant : M. Blanchard Maxime

---

## Présentation

SmartPC est une application web développée avec **Angular** (NgModule) dont l'objectif est d'aider tout type d'utilisateur à identifier l'ordinateur correspondant à ses besoins, qu'il soit novice en informatique ou utilisateur averti.

Le projet couvre l'intégralité du cycle de conception et de développement : définition des besoins via des user stories, prototypage rapide sur Figma, découpage en composants Angular, conception de l'algorithme de sélection, puis implémentation complète en TypeScript/HTML/CSS.

---

## Équipe

| Nom | Contribution principale |
|---|---|
| KOUAM NOUBISSI Séraphin Brice | Partie Résultats — `app-pc-card`, `app-product-detail`, `app-recommendation-explanation`, `app-store-locator`, `SelectionService` , `app-answer-chip`, `app-edu-tooltip`, `ModeService` |
| BARRY Taslima | Partie Expert — `app-expert`, `app-filter-panel` routing principal, `AppModule` |
| ESSOMBA Lowell | Partie Accueil — `app-navbar`, `app-mode-card`, `app-contact-bug`, |
| GRANDEMANGE Maëwen | Partie Questionnaire — `app-questionnaire`, `app-stepper`, `app-question-card` |

---

## Liens

- **Figma (wireframes + découpage composants)** : https://www.figma.com/design/Do1q5f15ENjNKgXDBCwqRy/Wireframe_PC?node-id=0-1&p=f&t=Tj0ZTyLoagjhOcp2-0

---

## User stories couvertes

| Persona | Besoin | Implémentation |
|---|---|---|
| Aymeric | Exprimer son besoin sans jargon technique | Mode Simple — questionnaire en 4 étapes avec chips |
| Aymeric | Recevoir une recommandation adaptée | Page `/resultats` avec top 3 scoré |
| Mathilde | Filtrer par caractéristiques précises | Mode Expert — `app-filter-panel` (RAM, CPU, stockage, écran, autonomie) |
| Mathilde | Contacter l'équipe pour signaler un bug | `app-contact-bug` présent en footer sur tous les écrans |
| Michel | Questionnaire guidé avec explications techniques | Mode Guidé — `app-edu-tooltip` affiché via `*ngIf="mode === 'guided'"` |
| Michel | Connaître les magasins physiques disponibles | `app-store-locator` affiché sur la fiche produit en mode Guidé |

---

## Architecture des composants

```
app-root
├── app-navbar
├── router-outlet
│   ├── /accueil        → app-mode-card (×3)
│   ├── /questionnaire  → app-questionnaire
│   │   ├── app-stepper
│   │   └── app-question-card
│   │       ├── app-answer-chip (×N)
│   │       └── app-edu-tooltip (mode guidé uniquement)
│   ├── /resultats      → app-resultat
│   │   └── app-pc-card (×3)
│   ├── /detail         → app-product-detail
│   │   ├── app-recommendation-explanation (mode guidé uniquement)
│   │   └── app-store-locator (mode guidé uniquement)
│   └── /expert         → app-expert
│       └── app-filter-panel
└── app-contact-bug (footer global)
```

Le mode actif (`simple` | `guided` | `expert`) est géré par un **ModeService** partagé via un `BehaviorSubject<AppMode>`. Les composants conditionnels s'activent par `*ngIf` sans duplication de logique.

---

## Algorithme de sélection

L'algorithme repose sur un **système de scoring par pondération**.

### Pipeline

1. Les réponses de l'utilisateur construisent un objet `UserProfile` :
```typescript
{ usage: string, budget: number, mobilite: string, logiciels: string[] }
```

2. Un `WeightMap` associe des poids à chaque composant selon l'usage déclaré :

| Usage | CPU | RAM | GPU | SSD | Autonomie | Poids |
|---|---|---|---|---|---|---|
| Jeux vidéo | 3 | 2 | 3 | 0 | 0 | 0 |
| Bureautique | 1 | 1 | 0 | 2 | 1 | 1 |
| Création | 2 | 3 | 2 | 2 | 0 | 0 |
| Études | 1 | 1 | 0 | 1 | 3 | 3 |

3. Pour chaque PC du catalogue, le score est calculé :
```
score = Σ ( valeur_composant × poids )
```

4. Les PC dont le prix dépasse le budget sont exclus. Les résultats sont triés par score décroissant et les 3 premiers sont affichés.

5. Si aucun résultat ne passe le filtre budget, le seuil est automatiquement élargi de 10 % (jusqu'à 3 tentatives).

---

## Structure du projet

```
src/
└── app/
    ├── data/
    │   └── pc-catalogue.ts           ← catalogue de 6 PC avec specs complètes
    ├── models/
    │   ├── pc.model.ts
    │   └── user-profile.model.ts
    ├── services/
    │   ├── selection.service.ts      ← algorithme de scoring
    │   ├── mode.service.ts           ← BehaviorSubject du mode actif
    │   └── pc.service.ts
    ├── questionnaire/
    ├── stepper/
    ├── question-card/
    ├── answer-chip/
    ├── edu-tooltip/
    ├── expert/
    ├── filter-panel/
    ├── resultat/
    ├── pc-card/
    ├── product-detail/
    ├── recommendation-explanation/
    ├── store-locator/
    ├── app-routing.module.ts
    ├── app.module.ts
    └── app.component.ts
```

---

## Installation et lancement

**Prérequis** : Node.js ≥ 18, Angular CLI installé globalement.

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd SmartPC

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve

# Ouvrir dans le navigateur
http://localhost:4200
```

---

## Conventions de développement

- Angular **NgModule** (`standalone: false`) conformément aux directives du cours
- **TypeScript strict** sur l'ensemble du projet
- CSS classique, sans framework UI (pas de Tailwind, pas de Angular Material)
- Couleur principale : `#1F5FA6` — Police : Georgia
- Nommage : `kebab-case` pour les sélecteurs, `PascalCase` pour les classes TypeScript