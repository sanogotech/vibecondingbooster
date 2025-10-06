#  💻 L’IA permet à tout le monde de coder maintenant ?

## 🚫 Bullshit.

---

## 🔰 Introduction : la promesse et le mirage

Depuis quelques années, les IA génératives comme **ChatGPT, Claude, Cursor ou GitHub Copilot** bouleversent la manière de coder.
Elles traduisent une idée en code, documentent, testent, refactorisent, et parfois créent une application entière en quelques minutes.
Résultat : beaucoup affirment que *« tout le monde peut coder avec l’IA »*.
Mais c’est un **mythe dangereux**.

La réalité est plus nuancée :
L’IA **amplifie** la productivité de ceux qui comprennent déjà la logique logicielle, les tests, les logs, les hypothèses.
Mais elle **échoue** à raisonner hors du cadre que tu lui donnes.
Et si tu ne sais pas *formuler correctement* le problème, l’IA te renverra juste ton imprécision, mais avec des phrases bien écrites.

---

# 🧩 Mon expérience : 6 heures pour 2 lignes de code

Hier, j’ai passé **6 heures** sur un bug.
J’ai tout essayé : **Claude Code, Cursor, GPT-4**.
Aucun n’a trouvé la solution.

Le projet ?
Rien d’extraordinaire : sélectionner des fichiers par catégorie et les envoyer sur un serveur.

Mais à chaque test, **la moitié des fichiers disparaissaient**.
Pas d’erreur, pas de log suspect, juste du vide.

---

### 🔍 15 itérations IA… pour rien

J’ai fait **15 tours** avec les IA : elles voyaient le code, lisaient les logs, proposaient des correctifs.
Mais elles cherchaient **au mauvais endroit**.
Elles traitaient le symptôme, pas la cause.
Elles “réparaient” le comportement visible sans comprendre le mécanisme invisible.

Alors j’ai repris à l’ancienne :

1. Test manuel, un fichier à la fois.
2. Observation méticuleuse.
3. Croisement des résultats.

Et là — **BOOM.**
Le pattern apparaît :

> Les catégories contenant des **espaces** dans le nom échouaient silencieusement.

Problème : le mapping entre `getElementById()` et la clé d’enregistrement cassait, car un ID HTML ne doit pas contenir d’espace.
Résultat : 2 lignes à corriger.

---

### ✅ Le fix (simple, mais invisible)

```js
// Correction 1 : Sanitiser les IDs
const id = `cat-${category.trim().replace(/\s+/g, '_')}`;
element.id = id;
const el = document.getElementById(id);

// ou version dataset plus robuste :
element.dataset.category = category;
const el = Array.from(document.querySelectorAll('[data-category]'))
                .find(e => e.dataset.category === category);
```

6 heures perdues.
2 lignes de code.
Mais il fallait **savoir où chercher**.

---

# 🧠 La vraie leçon : L’IA ne devine pas ton problème

> L’IA ne **devine pas** ton bug.
> Elle **résout le problème que toi, tu formules**.

Et si tu ne sais pas :

* isoler un bug,
* tester méthodiquement,
* lire un log,
* reformuler précisément une hypothèse,

...alors l’IA **tournera en rond avec toi**.
Rapidement, mais dans le vide.

---

# ⚖️ Vrai vs Faux sur “coder avec l’IA”

| Ce qui est vrai ✅                                            | Ce qui est faux ❌                                          |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| Un dev junior peut produire au niveau d’un senior avec l’IA. | N’importe qui peut créer un SaaS complet sans compétences. |
| Un dev confirmé va 5x plus vite avec l’IA.                   | L’IA comprend ton intention sans contexte.                 |
| Quelqu’un de logique peut apprendre en codant avec aide IA.  | Tu peux déléguer 100 % du travail à l’IA.                  |

---

# 💬 La vraie question n’est pas :

> “Est-ce que l’IA peut coder à ma place ?”

Mais bien :

> “Est-ce que **moi**, je sais poser les bonnes questions ?”

Parce qu’en réalité, l’IA n’est pas un développeur,
c’est **un miroir intelligent** : elle amplifie ta clarté ou ton imprécision.

---

# 🧰 Bonnes pratiques pour coder efficacement avec (ou sans) IA

## 🪜 A. Workflow de debug efficace

1. **Reproduis le problème à minima.**
   → Crée un petit exemple isolé. Si tu ne peux pas le reproduire, tu ne peux pas le résoudre.

2. **Isoler le périmètre.**
   → Front, backend, API, réseau ? Utilise une recherche dichotomique.

3. **Tester une variable à la fois.**
   → Ne change jamais deux paramètres simultanément.

4. **Loguer tout ce qui bouge.**
   → IDs, états, timestamps, valeurs intermédiaires.

5. **Faire des assertions.**
   → `console.assert()` ou tests unitaires sur chaque hypothèse.

6. **Documenter tes tentatives.**
   → Ce que tu as essayé + ce que ça a changé. Très utile pour orienter une IA.

7. **Commits atomiques.**
   → Un changement = un commit → retour arrière simple.

---

## ⚙️ B. Bonnes pratiques d’ingénierie

* **Toujours normaliser les clés** :
  `category.trim().toLowerCase().replace(/\s+/g,'-')`.

* **Éviter les IDs dépendants du contenu utilisateur.**
  → Utilise un `slug` ou un UUID généré.

* **Utiliser `data-*` ou une structure Map** plutôt qu’un ID DOM brut.

* **Valider les chaînes** avant usage (espaces, accents, caractères spéciaux).

* **Tester les cas limites** : vide, accentué, longue chaîne, caractères spéciaux.

* **Mettre en place de l’observabilité** : logs, métriques, traces, UI analytics.

---

## 🧩 C. Bonnes pratiques pour tirer le meilleur de l’IA

1. **Donne du contexte clair** (langage, framework, environnement).
2. **Fournis le code minimal + les logs exacts.**
3. **Dis ce que tu as déjà essayé.**
4. **Demande des hypothèses classées par probabilité.**
5. **Demande un plan de diagnostic étape par étape.**
6. **Demande des tests pour valider chaque hypothèse.**
7. **Exige une explication ligne par ligne** des propositions.
8. **Demande plusieurs options** (3 correctifs + impact).

---

### 🧠 Prompts puissants (exemples concrets)

**Prompt diagnostic :**

> Voici un exemple minimal (HTML/JS). Résultat attendu X, résultat observé Y. Logs : [coller ici]. J’ai déjà essayé A, B, C. Peux-tu :
> 1️⃣ proposer 3 hypothèses triées par confiance,
> 2️⃣ un plan de debug en 5 étapes,
> 3️⃣ un correctif minimal + tests associés ?

**Prompt post-échec :**

> J’ai appliqué ton fix. Voici les nouveaux logs. Le problème persiste à 20%.
> Donne-moi 5 points d’instrumentation supplémentaires pour affiner le diagnostic.

---

## 🧾 D. Checklist quand l’IA ne t’aide pas

* [ ] As-tu un exemple minimal reproductible ?
* [ ] As-tu des logs propres ?
* [ ] As-tu isolé chaque couche ?
* [ ] As-tu testé avec espaces/caractères spéciaux ?
* [ ] As-tu envisagé un problème de mapping (ID/clé) ?
* [ ] As-tu demandé un **plan** et non un patch ?

---

# ⚙️ Correctifs pratiques

### 1️⃣ Sanitize les IDs

```js
const safeId = `cat-${category.trim().replace(/\s+/g, '_')}`;
element.id = safeId;
const el = document.getElementById(safeId);
```

### 2️⃣ Utilise `dataset`

```js
element.dataset.category = category;
const el = Array.from(document.querySelectorAll('[data-category]'))
                .find(e => e.dataset.category === category);
```

### 3️⃣ Utilise `Map`

```js
const map = new Map();
map.set(category, element);
const el = map.get(category);
```

### 4️⃣ Échappe les sélecteurs spéciaux

```js
const el = document.querySelector('#' + CSS.escape(id));
```

---

# 🧭 Conclusion : l’IA n’est pas un magicien, c’est un amplificateur

L’IA **ne remplace pas la compétence** — elle amplifie la méthode.
Elle te fait gagner du temps **si tu sais penser comme un ingénieur**.
Mais sans raisonnement, tu lui parles dans le vide.

Elle exécute vite, mais elle ne comprend pas le “pourquoi”.
Et c’est ce *pourquoi* qui fait la différence entre quelqu’un qui “bricole”
et quelqu’un qui **résout**.

---

> 💡 En 2025, la vraie compétence n’est pas “savoir coder”.
> C’est **savoir raisonner avec l’IA** — poser les bonnes questions, isoler les causes, formuler la pensée technique.

Et ça, aucune IA ne le fera à ta place.

---


