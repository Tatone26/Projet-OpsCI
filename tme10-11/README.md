# TME 10-11 LO3IN403 (OpsCI)

SAINERO Anatole (21201990) & VEY Thomas (21206244)

Anatole.Sainero@etu.sorbonne-universite.fr ou Thomas.Vey@etu.sorbonne-universite.fr

## IMPORTANT :

Lien vers la vidéo : https://drive.google.com/file/d/1kPatMeoAG65pTcALJWBz7iBRWYRpGcdl/view?usp=sharing

Lien vers le Github : https://github.com/Tatone26/Projet-OpsCI

Malheureusement, il nous a été impossible de passer la dernière étape : la consommation de stock depuis kafka (récupérer un produit renvoie une erreur 404, malgré les bonnes autorisations, les bons ids et les bonnes addresses...). C'est bien la seule barrière entre nous et la complétion totale du projet...

## Informations

Tout le projet (Strapi, Kafka, consumers) doit être lancé au préalable.

Le dossier mqtt-js-test-master est un dossier fourni ([https://github.com/arthurescriou/mqtt-js-test]https://github.com/arthurescriou/mqtt-js-test).

Pour lancer mosquitto :

`docker run -it -p 1883:1883 -v "$PWD/mosquitto/config:/mosquitto/config" --name mqtt-broker --network mqttnetwork eclipse-mosquitto`


Pour lancer le connecteur mqtt/kafka:

dans `mqtt-kafka`, lancer `docker-compose up`


Avec le front fourni ([https://mqtt-test-front.onrender.com/]https://mqtt-test-front.onrender.com/),
on peut mettre à jour les stocks via le broker MQTT :

Le broker recevra la mise à jour, détectée par le connecteur mqtt-kafka, qui enverra la mise à jour à Kafka, à partir duquel un consommateur pourra lire le message et le transmettre à Strapi.
