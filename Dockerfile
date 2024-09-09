# Dockerfile for Angular Frontend
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage to serve the built files
FROM nginx:alpine
COPY --from=build /app/dist/jobfinder-ui /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
