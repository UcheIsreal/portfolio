FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Define a volume mount
VOLUME /var/lib/docker/tmp/buildkit-mount2182599300/Dockerfile
CMD npm run dev