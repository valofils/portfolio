# Portfolio — à compléter

Ce portfolio est un template générique fonctionnel. Voici tout ce qu'il faudra
remplacer par tes vraies infos, avec l'emplacement dans `index.html`.

## SEO & partage sur les réseaux (`<head>` de `index.html`)
- [ ] Remplacer `https://votre-domaine.com/` (canonical + Open Graph + Twitter) par ton vrai domaine une fois déployé
- [ ] Créer une image `assets/og-image.png` (1200×630px recommandé) et l'ajouter au dossier —
      c'est l'aperçu affiché quand le lien est partagé sur LinkedIn, Slack, Twitter/X, etc.
- [ ] Le favicon est un monogramme "VN" généré en SVG inline (aucun fichier requis) —
      remplace-le par un vrai fichier (`favicon.ico` ou `favicon.svg`) si tu préfères ton propre logo
- [ ] Mettre à jour titre/description si tu changes le texte du hero

## Identité
- [ ] Titre de l'onglet et meta description (`<head>`)
- [ ] Logo "VN." dans le header (`.logo`)
- [ ] "Votre Nom" — hero, footer
- [ ] Bio dans la section **À propos** (paragraphes marqués `[Remplace ce paragraphe...]`)
- [ ] Stats du hero : nombre de projets, années d'expérience, technos (`.hero-stats`)

## Coordonnées
- [ ] `votre.email@example.com` (section Contact + footer + lien mailto)
- [ ] Lien LinkedIn (section Contact + footer)
- [ ] Lien GitHub (section Contact + footer)
- [ ] Bouton "Télécharger mon CV" (`#cvLink`) — pointer vers un vrai PDF

## Compétences
- [ ] Vérifier/ajuster les tags dans chaque `.skill-card` (Frontend, Backend, Données & CMS, Outils & DevOps)
- [ ] Supprimer celles que tu ne maîtrises pas, en ajouter d'autres si besoin

## Soft skills (section `#soft-skills`)
Pour chaque `.softskill-card` :
- [ ] Vérifier que la compétence te correspond vraiment (travail d'équipe, résolution de problèmes,
      communication, gestion du temps, curiosité, autonomie...)
- [ ] Adapter la description à ton expérience réelle
- [ ] Ajouter/retirer des cartes selon ce que tu veux mettre en avant

## Langues parlées (section `#languages`)
Pour chaque `.language-card` :
- [ ] Nom de la langue
- [ ] Niveau (ex : langue maternelle, courant C1, intermédiaire B1...)
- [ ] Ajuster la largeur de la barre (`width` inline sur `.language-bar span`) pour refléter le niveau
- [ ] Ajouter/retirer des langues selon ton profil

## Projets (section `#projects`)
Pour chacun des 4 blocs `.project-card` :
- [ ] Nom du projet
- [ ] Description courte (problème résolu, ton rôle, résultat)
- [ ] Technologies utilisées (tags)
- [ ] Lien "Voir le projet" (démo live)
- [ ] Lien "Code source" (repo GitHub)

**Carte 01 déjà remplie** avec le projet [TaskFlow](projects/taskflow/README.md) (Kanban
full-stack React/Node.js/PostgreSQL/Docker, construit pour coller aux critères de l'annonce
Développeur Web). Ses deux liens ("Voir le projet" / "Code source") pointent encore vers `#` —
à mettre à jour une fois que :
- [ ] le dépôt Git est initialisé et poussé sur GitHub → lien "Code source"
- [ ] une démo est déployée (ex: Render/Railway pour l'API+PostgreSQL, Vercel/Netlify pour
      le frontend) → lien "Voir le projet"

## Galerie (section `#gallery`)
Pour chaque `.gallery-item` :
- [ ] Remplacer `<span class="gallery-placeholder">🖼️</span>` par une vraie image :
      `<img src="assets/screenshot-1.jpg" alt="Description de la capture">`
- [ ] Mettre à jour `data-caption` avec la légende réelle (nom du projet + contexte)
- [ ] Mettre à jour le `href` pour pointer vers l'image en grand format ou une page dédiée
- [ ] Ajouter/retirer des captures selon le nombre de projets à illustrer

## Roadmap / en développement (section `#roadmap`)
Pour chaque `.roadmap-item` :
- [ ] Statut réel : "En cours" (`.roadmap-in-progress`), "Prévu" (`.roadmap-planned`)
      ou "Terminé" (`.roadmap-done`) — la couleur du badge s'adapte automatiquement à la classe
- [ ] Nom de la fonctionnalité/du projet
- [ ] Description courte
- [ ] Ajouter/retirer des lignes, ou retirer la section si tu ne veux pas exposer de roadmap

## Parcours (section `#experience`)
Pour chaque `<li>` de la timeline :
- [ ] Dates
- [ ] Poste / formation + entreprise ou école
- [ ] Description des missions ou du diplôme

## Certifications (section `#certifications`)
Pour chaque `.cert-card` :
- [ ] Nom de la certification
- [ ] Organisme délivrant + année
- [ ] Lien vers le certificat (Credly, PDF, etc.)
- [ ] Retirer les cartes en trop si tu as moins de 3 certifications, ou dupliquer le bloc si tu en as plus

## Témoignages (section `#testimonials`)
Pour chaque `.testimonial-card` :
- [ ] Citation
- [ ] Nom, poste et entreprise de la personne
- [ ] Initiale/avatar (actuellement un simple "?")

## Témoignages vidéo (section `#video-testimonials`)
Pour chaque `.video-testimonial-card` :
- [ ] Remplacer le placeholder par un vrai embed vidéo (même principe que la section `#video`,
      code d'exemple YouTube en commentaire dans cette section-là)
- [ ] Nom et poste/entreprise de la personne
- [ ] Retirer la section si tu n'as pas de témoignages vidéo

## Blog / Publications (section `#blog`)
Pour chaque `.blog-card` :
- [ ] Date de publication
- [ ] Titre de l'article + lien
- [ ] Accroche courte
- [ ] Lien "Lire l'article" (vers Medium, Dev.to, ton propre blog, etc.)
- [ ] Retirer la section entière si tu n'as pas de blog/publications

## Newsletter (section `#newsletter`)
Bande entre Blog et Services :
- [ ] Adapter le texte d'accroche
- [ ] Le formulaire (`js/script.js`, `newsletterForm`) n'affiche qu'un message statique —
      connecte-le à un vrai service (Mailchimp, Buttondown, ConvertKit...) pour qu'il collecte
      réellement des emails
- [ ] Retirer la section si tu n'as pas de newsletter

## Services & tarifs (section `#services`)
Pour chaque `.pricing-card` :
- [ ] Nom de la formule/service
- [ ] Montant réel (remplacer les `000€` placeholders) — ou "Sur devis" si tu préfères ne pas afficher de prix
- [ ] Description courte
- [ ] Liste des prestations incluses (`.pricing-features`)
- [ ] Ajuster/retirer le badge "Populaire" sur la carte `.pricing-featured`
- [ ] Adapter les 3 formules à tes vrais services (ex : si tu es salarié et pas freelance,
      retire complètement cette section — elle est surtout pertinente pour du freelance/consulting)

## Disponibilité (section `#availability`)
- [ ] Date de disponibilité (`.availability-headline`)
- [ ] Date de dernière mise à jour (`.availability-sub`) — pense à la rafraîchir régulièrement
- [ ] Statut réel : Freelance, Salarié, En poste/En recherche
- [ ] Type(s) de contrat accepté(s) : CDI, CDD, freelance, alternance...
- [ ] Mode de travail : télétravail, hybride, présentiel
- [ ] Fuseau horaire
- [ ] Le point vert clignotant (`.status-dot`) signale "disponible" — change sa couleur
      (variable `--accent-strong` ou directement en CSS) si tu n'es pas disponible

## FAQ (section `#faq`)
Pour chaque `.faq-item` (élément `<details>`) :
- [ ] Question (dans `<summary>`)
- [ ] Réponse réelle (dans le `<p>`)
- [ ] Ajouter/retirer des questions selon ce qui revient le plus souvent

## Call-to-action final (section `.cta-final`)
Juste avant le footer :
- [ ] Adresse email du bouton "Envoyer un email"
- [ ] Liens réseaux sociaux (`.social-row`) : GitHub, LinkedIn, X/Twitter, Dev.to — retirer ceux que tu n'utilises pas

## Statistiques (section `#stats`)
Bande de chiffres clés juste après "À propos" :
- [ ] Remplacer chaque `.stat-number` (`00+`, `00%`...) par tes vrais chiffres
- [ ] Adapter les libellés (`.stat-label`) si besoin — n'affiche que des chiffres que tu peux justifier
- [ ] Retirer un `.stat-item` si tu n'as pas assez de métriques pour 5, ou dupliquer le bloc pour en ajouter

## Citation / devise personnelle (section `#quote`)
Bande entre les statistiques et la vidéo :
- [ ] Remplacer la citation par ta vraie devise ou philosophie de travail
- [ ] Vérifier la signature (`<footer>`)
- [ ] Retirer la section si tu préfères ne pas en avoir

## Vidéo de présentation (section `#video`)
- [ ] Remplacer le lien `.video-placeholder` par un vrai embed (le code exemple pour YouTube
      est déjà en commentaire juste au-dessus dans `index.html`, il suffit de le décommenter
      et de mettre le bon `VIDEO_ID` — fonctionne aussi avec Vimeo ou une balise `<video>` native)
- [ ] Adapter le texte d'intro sous le titre
- [ ] Retirer la section entière si tu n'as pas de vidéo de présentation

## Footer (réseaux sociaux inclus)
- [ ] Tagline sous le logo (`.footer-brand p`)
- [ ] Liens de navigation rapide (`.footer-nav`) — vérifier qu'ils pointent vers les bonnes sections
- [ ] Réseaux sociaux (`.social-icons`) : GitHub, LinkedIn, X/Twitter, Dev.to, Email —
      remplacer les `href="#"` par tes vrais profils, retirer les plateformes que tu n'utilises pas
- [ ] Nom dans le copyright (`.footer-bottom`)

## Formulaire de contact
Le formulaire (`js/script.js`, événement `submit`) affiche juste un message
statique. Pour qu'il envoie vraiment des emails, connecte-le à un service
comme [Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com),
ou à ton propre backend.

## Voir le site en local

```bash
cd "/home/student03/Dev Web" && python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000`.
