# Base image
FROM nginx:alpine

# Copy build output to nginx's html folder
COPY dist/<your-angular-project-name> /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
