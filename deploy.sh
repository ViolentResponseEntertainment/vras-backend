# Zip current directory, recursively, excluding the database and node modules folder
zip -r dist.zip . -x node_modules/\* vras.db
# Copy the zip file to the pi
scp dist.zip pi:/home/pi/Server/Webserver/vras-backend/
# remove the zip file from the local file system
rm dist.zip
#  unzip the file, no prompts, update if existing, create if not existing, destination path is backend folder, target is the zip file and then remove the zip file afterwards
ssh pi 'unzip -o -u -d /home/pi/Server/Webserver/vras-backend/ /home/pi/Server/Webserver/vras-backend/dist.zip && rm /home/pi/Server/Webserver/vras-backend/dist.zip'
# execute yarn in the app directory to install all dependencies
ssh pi 'cd /home/pi/Server/Webserver/vras-backend && yarn'
# start the app with forever
ssh pi 'sudo systemctl restart vras-backend'

