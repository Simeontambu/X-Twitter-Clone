
# Clone Twitter avec React + Vite

## Description du projet
Ce projet est un clone de Twitter réalisé avec React et Vite. Il permet aux utilisateurs de :

- Ajouter un tweet : Les utilisateurs peuvent composer et publier de nouveaux tweets.
- Liker un tweet : Les utilisateurs peuvent interagir avec les tweets en les likant.
- Naviguer entre la page d'accueil et la page de profil : Les utilisateurs peuvent consulter leur profil et les tweets des autres utilisateurs.

Le projet utilise JSON Server pour générer les tweets et les données de base se trouvent dans le fichier `json-server --watch src/data/initial-json-data.js --port 8000`.

## Technologies utilisées
- React : Framework JavaScript pour la création d'interfaces utilisateur interactives.
- Vite : Outil de bundling et de développement Web ultra-rapide.
- JSON Server : Serveur HTTP léger qui permet de générer des données JSON à la volée.

## Fonctionnalités
### Ajout de tweets :
- Formulaire de saisie pour composer un nouveau tweet.
- Bouton pour publier le tweet.
- Affichage du nouveau tweet dans la liste des tweets.

### Likes :
- Bouton "like" pour chaque tweet.
- Incrémentation du nombre de likes lorsqu'un utilisateur clique sur le bouton.
- Mise à jour du nombre de likes en temps réel.

### Navigation :
- Barre de navigation pour accéder à la page d'accueil et à la page de profil.
- Affichage des tweets de l'utilisateur sur la page de profil.

## Installation et exécution
1. Cloner le projet : `git clone https://github.com/Simeontambu/X-Twitter-Clone.git`
2. Lancement de json serveur : `json-server --watch src/data/initial-json-data.js --port 8000`
2. Installer les dépendances : `npm install`
3. Démarrer le serveur de développement : `npm run dev`
4. Ouvrir votre navigateur web et accéder à l'adresse [http://localhost:5172]


## A venir
- Ajout d'images et de vidéos aux tweets
- Système de commentaires
- Fonctionnalité de recherche
- Gestion des utilisateurs et des authentifications

## Contributeurs
- Siméon tambu

## Licence
Ce projet est sous licence MIT.
