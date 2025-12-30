<!-- 1. Switch to root -->

sudo su

<!-- 2. Update server packages -->

sudo apt update -y
sudo apt upgrade -y

<!-- 1. Install important packages -->

sudo apt install -y git nginx curl ufw build-essential certbot python3-certbot-nginx

<!-- 2. Nvm installation -->

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

nvm install --lts
nvm alias default lts/\*

<!-- OR -->

<!-- 2. Node installation -->

curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

<!-- 3. PM2 installation -->

npm install -g pm2
pm2 startup
pm2 save

<!-- 4. Enable basic firewall (UFW)  -->

sudo ufw allow OpenSSH <!-- Allows SSH (port 22) connections through the firewall. -->
sudo ufw allow 'Nginx Full' <!-- Allows HTTP & HTTPS traffic -->
sudo ufw Enable <!-- Turns the firewall ON -->
sudo ufw status <!-- Shows current firewall rules. -->
