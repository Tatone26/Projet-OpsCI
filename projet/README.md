# PROJET OPSCI
SAINERO Anatole (21201990) & VEY Thomas (21206244)

## PARTIE 1

Exécuter `yarn create strapi-app notre-projet`, et copier le `.env` dedans.
Copier également le `Dockerfile_strapi` dedans, en le renommant `Dockerfile`.

Mettre `docker-compose.yml` dans le dossier parent.

Exécuter `docker compose up`, se connecter à strapi, créer les collections nécessaires comme indiqué dans le sujet et récupérer un Token API.

Récupérer le [front fourni](https://github.com/arthurescriou/opsci-strapi-frontend) et le mettre dans le dossier parent, sous le nom `opsci-strapi-frontend-master`. Copier le Token dans `conf.ts`.

Exécuter `docker-compose up` dans le dossier `opsci-strapi-frontend-master`.
(Il aurait été suffisant de créer un simple script exécutant `docker build` et `docker run`.)


## PARTIE 2


Dans le dossier kafka, exécuter `docker-compose up` pour lancer kafka et zookeeper. Ensuite, lancer la production de products via `docker-compose up` dans le sous-dossier scripts. 

Au bout de quelque temps, les products seront tous créés dans Strapi et en rechargeant le front, celui-ci devrait tous les afficher !

Nous n'avons pas continué (création d'events et mise à jour du stock) car les scripts fournis ne semblent pas être correctement configurés... (des erreurs de type "reading 'attributes' of null" par exemple). Mais il ne devrait pas y avoir le moindre souci à ce niveau là, avec des scripts fonctionnels. 