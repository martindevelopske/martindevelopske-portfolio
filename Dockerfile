FROM node:21-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm cache clean --force
RUN npm install --verbose
COPY . .

#run stage
FROM node:21-alpine
WORKDIR /app
COPY --from=build /app .
CMD [ "npm", "run", "dev" ]