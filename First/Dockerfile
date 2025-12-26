# IMPORTING BASE IMAGE (NODE)
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json .
RUN npm install

# CREATING DEVELOPEMENT CONTAINER
FROM base AS development
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

# CREATING PRODUCTION CONTAINER
FROM base AS production
ENV NODE_ENV=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]