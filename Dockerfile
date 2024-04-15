FROM node:latest
WORKDIR /Mancilla_Francisco_final_site
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
