FROM node:21-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm cache clean --force
RUN npm install
COPY . .

#run stage
FROM node:21-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 5173
CMD [ "npm", "run", "dev" ]