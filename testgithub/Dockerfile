# # Node.js kullanarak Angular uygulamasını build etmek için base image
# FROM node:16 as build

# # Çalışma dizinini ayarla
# WORKDIR /app

# # Paket dosyalarını kopyala ve bağımlılıkları yükle
# COPY package.json package-lock.json ./
# RUN npm install

# # Uygulamayı build et
# COPY . .
# RUN npm run build -- --configuration=production --project=sakai-ng

# # Build edilen dosyaları sunmak için Nginx image kullan
# FROM nginx:alpine

# # Build edilen dosyaları Nginx'in web sunucu dizinine kopyala
# COPY --from=build /app/dist/sakai-ng /usr/share/nginx/html

# # Nginx'i çalıştır
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
