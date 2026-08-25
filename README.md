# Portfolio de Mariel Andrianavalondrahona

Portfolio statique HTML/CSS/JS, rempli avec de vraies informations : reconversion
d'analyste statisticienne / spécialiste suivi-évaluation (INSTAT, UNICEF, FAO, PAM,
IFRC) vers le développement web, candidature à l'offre **Développeur Web** de Consult
Collab.

Les sections sans matière réelle disponible (témoignages, témoignages vidéo, blog,
services & tarifs, newsletter) ont été retirées plutôt que remplies de placeholders —
mieux vaut un portfolio plus court et honnête qu'un portfolio qui a l'air à moitié
rempli ou fabriqué. Elles pourront revenir plus tard si du contenu réel existe (de
vrais témoignages de collègues, un vrai article de blog, etc.).

## Ce qui reste à faire

- [ ] **Domaine réel** : remplacer `https://votre-domaine.com/` (canonical + Open
      Graph + Twitter dans le `<head>`) une fois le site déployé
- [x] **Image Open Graph** : `assets/og-image.png` (1200×630px), même identité
      visuelle que le site (nom, rôle, photo, stack technique), générée via une
      page HTML capturée par Chrome headless — déjà référencée dans le `<head>`,
      s'affichera automatiquement une fois le domaine réel renseigné (point suivant)
- [x] **Vraies captures d'écran de TaskFlow** (section Galerie, `#gallery`) —
      `assets/screenshots/taskflow-{login,board,task-modal}.jpg`, prises directement
      sur la démo déployée (Chrome headless piloté par script), chacune cliquable
      vers la démo en ligne
- [x] **Lien "Voir le projet" de TaskFlow** (`#projects`) → https://client-pi-eight-60.vercel.app
      (démo en ligne, testée de bout en bout : inscription, JWT, création de tâche,
      persistance en base Neon)
- [ ] **CV téléchargeable** : le bouton a été retiré du hero — si tu veux en proposer
      un, prépare une version PDF adaptée à une candidature développeur (le
      `Detailed resume.docx` fourni est un CV de consultante statisticienne, pas
      formaté pour ce poste, et contient des numéros de téléphone / contacts de tiers
      à ne jamais publier tel quel)

## Note sur les fichiers Word fournis

`Detailed resume.docx` et `job_profiles (1).docx` ont servi de source pour rédiger le
contenu réel du portfolio (nom, parcours, certifications). Ils sont exclus du dépôt
Git (`.gitignore`) car ils contiennent des coordonnées personnelles et des contacts
professionnels de tiers (références) qui ne doivent pas être publiés publiquement.

## Voir le site en local

```bash
cd "/home/student03/Dev Web" && python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Structure

- `index.html` — page unique, toutes les sections
- `css/style.css`, `js/script.js`
- `assets/profile.jpg` — photo de profil
- `projects/taskflow/` — dépôt Git séparé, voir son propre README
