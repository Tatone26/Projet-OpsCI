# PROJET OPSCI
SAINERO Anatole (21201990) & VEY Thomas (21206244)

## PARTIE 1

Exécuter `yarn create strapi-app notre-projet`, et copier le `.env` dedans.
Copier également le `Dockerfile_strapi` dedans, en le renommant `Dockerfile`.

Mettre `docker-compose.yml` dans le dossier parent, et retirer temporairement le service `front`.

Exécuter `docker compose up`, se connecter à strapi, créer les collections nécessaires comme indiqué dans le sujet et récupérer un Token API. 

Récupérer le [front fourni](https://github.com/arthurescriou/opsci-strapi-frontend) et le mettre dans le dossier parent, sous le nom `opsci-strapi-frontend-master`. Copier le Token dans `conf.ts`.

Exécuter `npm run build` dans le dossier `opsci-strapi-frontend-master`.

Restaurer le `docker-compose.yml` à son état initial (avec le service front).

Exécuter `docker compose up`.

Les trois containers devraient alors communiquer entre eux, et une mise à jour des collections strapi via l'interface administrateur devrait se répercuter sans soucis vers le front !


## PARTIE 2