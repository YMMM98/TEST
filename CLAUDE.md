# Sijilmassa : site de vente de dattes Majhoul Beldi

Ce fichier donne tout le contexte du projet. Lis-le en entier avant chaque session de travail.

## Le projet en bref

- **Client** : l'oncle d'Ibrahim (le propriétaire du dépôt). Il a une petite ferme familiale près d'Errachidia, dans la vallée du Ziz (Sud-Est marocain). Il produit du **Majhoul Beldi**, la variété locale traditionnelle.
- **Deux gammes prévues** :
  - **Sijilmassa**, la gamme haut de gamme. Le nom est choisi, et ce site ne vend que cette gamme.
  - Une gamme classique, dont le nom n'est **pas encore choisi**. Elle ne doit pas apparaître sur le site, sauf la phrase « Les autres partent vers notre gamme de tous les jours ».
- **Origine du nom** : Sijilmassa était la grande cité caravanière du Tafilalet, au Moyen Âge.
- **But du site** : montrer à l'oncle à quoi ressemblerait sa boutique en ligne, pour l'aider à se décider. C'est une **démonstration** : aucune commande n'est réellement envoyée, et les prix sont indicatifs.
- **Situation de l'oncle** : il a du mal à trancher. Il faut lui montrer des choses concrètes et abouties, pas des options abstraites.

## Public visé

- Des Marocains, plutôt aisés, qui achètent surtout **sur téléphone**.
- Textes du site **en français**, avec quelques touches d'arabe (le nom سجلماسة, مرحبا بكم, شكرا بزاف).
- **Pas d'anglicismes** dans les textes : ni « feeling », ni « shop », ni « checkout », etc.

## Ce que le site doit dégager

**Haut de gamme avant tout.** Retours d'Ibrahim et de l'oncle jusqu'ici :

1. Le premier logo (une arche avec une datte) a été jugé « dessiné par un enfant ». Il a été remplacé par un **ksar à trois tours en aplat doré** (symbole `#mark` dans `index.html`). Ce logo est validé pour l'instant.
2. L'accueil en plein écran façon diaporama a été rejeté. Le parcours retenu est : **accueil → cartes produits → page produit** (on touche une carte pour voir le produit).
3. Les dattes dessinées en SVG « ne font pas haut de gamme ». **Il faut de vraies photos.** C'est la priorité numéro un.
4. L'accueil doit frapper dès le premier écran, et on doit comprendre tout de suite qu'il s'agit de dattes.

Principes de conception :
- Une seule chose mémorable par écran, le reste sobre.
- Pas de dessins naïfs. Photos réelles, typographie soignée, beaucoup d'espace.
- Le téléphone d'abord (testé sur 390 × 844), mais l'ordinateur doit rester propre.

## Identité visuelle

Le rouge pisé vient de la couleur des murs en terre à l'entrée d'Errachidia.

| Rôle | Valeur |
|---|---|
| Rouge pisé | `#8B3A26` (foncé `#6C2819`) |
| Nuit (fonds sombres) | `#1E110D`, `#2A1712`, `#3A2119` |
| Or | `#C99B4F` (clair `#E3C285`) |
| Chaux (texte clair) | `#F3E8DA` |
| Sable (sections claires) | `#EAD8C3` |

- **Polices** : Marcellus pour les titres et le nom, Jost pour le texte courant, Reem Kufi pour l'arabe (toutes sur Google Fonts).
- **Motifs** : frise de triangles du pisé, créneaux de ksar, silhouettes de ksour.
- Un mode sombre existe déjà (jetons de couleur dans `:root`).

## Photos

À télécharger depuis Unsplash (le connecteur Unsplash est disponible), à optimiser en WebP d'environ 1600 px de large, et à ranger dans `images/` :

1. « A plate of dried dates on a textured surface », de Husien Bisky : format vertical, fond sombre. Pour l'accueil.
2. « A pile of dried dates on a textured surface », de Husien Bisky. Pour les pages produit.
3. « Rows of dried dates in various shades of brown », de Mustafa Akın : tons rouge sombre. Pour la partie histoire.

Il serait bien de trouver aussi des photos de ksour ou de palmeraie de la vallée du Ziz ou du Tafilalet. Mentionner les photographes en pied de page est apprécié.

Plus tard, les vraies photos de la ferme de l'oncle remplaceront celles d'Unsplash. Plus tard encore, une courte vidéo d'accueil sera générée avec Seedance : prévoir un emplacement d'accueil qui accepte une vidéo.

**Réseau** : l'environnement cloud doit autoriser `images.unsplash.com`, sinon le téléchargement échoue avec une erreur « host_not_allowed ».

## Contenu commercial actuel (indicatif)

| Produit | Formats et prix |
|---|---|
| Coffret Réserve | 500 g : 160 DH, 1 kg : 300 DH, 2 kg : 560 DH |
| Écrin à offrir | 12 dattes : 140 DH, 24 dattes : 250 DH |

- Carte avec message offerte (160 caractères au maximum).
- Livraison à 40 DH, offerte dès 600 DH.
- Paiement **en espèces à la livraison** uniquement. La carte bancaire est affichée « bientôt disponible ».
- Formulaire de commande : nom, téléphone marocain (vérifié : 06, 07, 05 ou +212), ville, adresse.
- Formulaire de devis pour les grandes occasions : mariages, Ramadan, Aïd, naissances, cadeaux d'entreprise.

## Prudence sur les textes

- **Ne jamais écrire « Dattes Majhoul de Tafilalet »** sur le site ou les emballages. C'est une indication géographique protégée depuis 2010, réservée aux produits certifiés. On peut dire « vallée du Ziz », « près d'Errachidia » ou « Sud-Est marocain ».
- Ces affirmations restent à confirmer par l'oncle : « choisies une à une », la livraison en 24 à 72 heures, le seuil de 600 DH et les prix.
- Le nom « Sijilmassa » doit encore être vérifié auprès de l'OMPIC avant tout dépôt.

## Clins d'œil cachés (à garder, discrets)

- Le numéro de commande s'affiche comme une plaque marocaine : `NNNNN | أ | 25`. Le **25 est le code d'Errachidia** sur les plaques. L'oncle aime ce détail.
- Une petite plaque « أ 25 » et les coordonnées « 31°55′ N, 4°25′ O » apparaissent en pied de page.
- Une caravane de chameaux traverse lentement le pied de page.
- La page mentionne Ksar es-Souk, l'ancien nom d'Errachidia.
- Cinq appuis sur le logo affichent « مرحبا بك ف سجلماسة ».
- Un message de bienvenue s'affiche dans la console.

Ces détails ne doivent jamais gêner l'achat.

## Technique

- Un seul fichier `index.html`, en JavaScript sans bibliothèque. Tu peux le découper en fichiers si cela aide.
- Navigation par ancre : `#/` pour l'accueil, `#/coffret-reserve` et `#/ecrin` pour les produits.
- Le panier est enregistré dans `localStorage` (clé `sjm-cart`), avec une protection par `try/catch`.
- Les coffrets sont dessinés en perspective en CSS (fonction `iso()`). Une fois les photos intégrées, ce dessin peut rester comme vignette ou être remplacé.
- À respecter : marges de sécurité des téléphones (`env(safe-area-inset-*)`), réduction des animations (`prefers-reduced-motion`), contour de focus visible, libellés accessibles.
- **Mise en ligne** : GitHub Pages, depuis ce dépôt.

## Façon de travailler

- Avant de dire qu'une modification est terminée, **fais des captures d'écran au format téléphone (390 × 844)** et vérifie-les.
- Un commit par modification, avec un message clair en français.
- Pour un changement de direction important (logo, palette, structure), propose d'abord deux ou trois pistes courtes au lieu de tout refaire.
- Réponds à Ibrahim en français, sans anglicismes.

## Prochaines étapes

1. Intégrer les vraies photos et refaire l'accueil autour de la photo principale, en plein cadre.
2. Supprimer le plateau de dattes dessiné en SVG.
3. Mettre des photos sur les cartes produits, les pages produit et la partie histoire.
4. Mettre le site en ligne sur GitHub Pages et donner le lien public.
5. Plus tard : la vidéo d'accueil, les photos de la ferme, puis peut-être la commande par WhatsApp.
