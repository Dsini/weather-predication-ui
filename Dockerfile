# Stage 1: Build the Angular application
FROM node:20.15.1-slim AS build

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve the Angular application using Nginx
FROM nginx:1.21.1-alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to allow external access
EXPOSE 80

# Start Nginx server (it runs by default in the Nginx Docker image)
CMD ["nginx", "-g", "daemon off;"]
