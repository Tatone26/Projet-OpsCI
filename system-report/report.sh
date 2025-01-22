mkdir report

# PART 1
df -h | grep sda[0-9] >> ./report/a.info 2>> ./report/a.error;
cat /proc/meminfo | grep MemTotal >> ./report/a.info 2>> ./report/a.error;
cat /proc/cpuinfo | grep MemTotal -m 1 >> ./report/a.info 2>> ./report/a.error;
GPU_ID= lspci | grep VGA | awk '{print $1}';
lspci -v -s 01:00.0 >> ./report/a.info 2>> ./report/a.error;

# PART 2
du ~ -hs >> ./report/b.info 2>> ./report/b.error;
du ~ -h --max-depth=1 >> ./report/b.info 2>> ./report/b.error;
quota >> ./report/b.info 2>> ./report/b.error;
find ~ | wc -l >> ./report/b.info 2>> ./report/b.error ;
find ~ -name *\.java | wc -l >> ./report/b.info 2>> ./report/b.error;

# PART 3

# ps -aux | grep ^`whoami`;
sleep 1664 &
ps -aux | grep ^`whoami` | grep sleep;

top -u $USER -b -n 1 -o %MEM| head -n 17 | tail -n 10 >> ./report/c.info 2>> ./report/c.error;

: '
Exercice 2 :

cd ~ ; ls -al 
-> exécute simplement les deux instructions l une après l autre dans le terminal
cd ~ & ls -al
-> exécute "cd ~" en tâche de fond (backgroud) donc celle-ci n a pas d impact et ls -al s exécute dans le répertoire courant
cd ~ && ls -al
-> exécute "cd ~" et selon sa valeur de retour, exécute ou non "ls -al" (c est un ET logique)

Exercice 3 :

ps -aux | grep ^`whoami`
-> renvoie tous les processus en cours initiés par l utilisateur ou dans l espace utilisateur

Exercice 8 : 

addresse IP : 132.***.***.37/27
obtenue avec ip addr et ip route get 1.1.1.1

ports ouverts : utiliser netstat

Exercice 9 : 

commande crontab -> */5 * * * *  ~/Documents/LU3IN403/Projet-OpsCI/system-report/report.sh
exécute le report.sh toutes les 5 min (ATTENTION : ne supprime pas les exécutions précédentes,
report.sh ne fait que ajouter aux fichiers .info (il devrait les supprimer ça serait mieux))
'
