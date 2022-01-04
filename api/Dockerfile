FROM node:16

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8080
CMD ["node", "-u", "dist/main"]