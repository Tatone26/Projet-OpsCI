# PART 1
df -h | grep sda[0-9] >> a.info 2>> a.error;
cat /proc/meminfo | grep MemTotal >> a.info 2>> a.error;
cat /proc/cpuinfo | grep MemTotal -m 1 >> a.info 2>> a.error;
GPU_ID= lspci | grep VGA | awk '{print $1}';
lspci -v -s 01:00.0 >> a.info 2>> a.error;

# PART 2
du ~ -hs >> b.info 2>> b.error;
du ~ -h --max-depth=1 >> b.info 2>> b.error;
quota >> b.info 2>> b.error;
find ~ | wc -l >> b.info 2>> b.error ;
find ~ -name *\.java | wc -l >> b.info 2>> b.error;

# PART 3

# ps -aux | grep ^`whoami`;
sleep 1664 &
ps -aux | grep ^`whoami` | grep sleep;

top -u $USER -b -n 1 -o %MEM| head -n 17 | tail -n 10 >> c.info 2>> c.error;
