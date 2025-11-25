# --- Etapa 1: Construcción (Build) ---
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Etapa 2: Servidor Producción (Nginx) ---
FROM nginx:alpine
# Copiamos los archivos generados en la etapa anterior a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html
# (Nota: Si tu build crea una carpeta 'build' en vez de 'dist', cambia 'dist' por 'build' arriba)

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]