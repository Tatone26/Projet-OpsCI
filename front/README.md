# Opsci Projet 1: Frontend

Seuls les fichiers utiles et modifiés (par rapport au [front fourni](https://github.com/arthurescriou/opsci-strapi-frontend)) ont été mis ici.
Il suffit donc de récupérer ce dépot git et de copier ce dossier src dedans, en remplaçant l'ancien. Cela était nécessaire car la version de strapi utilisée dans notre projet est la version 5. Nous avons donc modifié manuellement le front fourni pour être compatible avec cette version.

Il est nécessaire de mettre un token créé via l'interface administrateur de Strapi dans conf.ts

Pour ce faire, il faut lancer dans un premier temps docker-compose en enlevant le service 'front'. Cela permet de setup correctement Strapi et récupérer un Token. Après avoir copié ce token dans conf.ts, il est nécessaire également de lancer `npm run build` dans le front.
Une fois toutes ces étapes éxécutées, il est possible de lancer `docker-compose up` sans problème !