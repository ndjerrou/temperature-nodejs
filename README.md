# Objectif

Créer un outil en ligne de commande pour calculer une température depuis une ville

> Exemple: npm start Paris // 2°

## Etapes

1. Récupérer l'argument : **la ville**

2. Récupérer les coordonnés GPS de cet argument [latitude/longitude] à l'aide de l'API suivante :

[API Météo](https://openweathermap.org/api)

3. Avec ces coordonnés, on récupére la température

4. Affichage de la température

## Architecture du projet

1. Initialiser un projet node

2. Télécharger axios et nodemon

`npm i axios && npm i -D nodemon`

3. Une fonctionnalité = un module

4. Un fichier de boostraping

5. Clean code
