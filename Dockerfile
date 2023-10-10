FROM node:bullseye

# Create app directory
WORKDIR /usr/src/app

#Copy files

COPY . .

# Install app dependencies
RUN npm i 

CMD ["npm", "run", "start"]
