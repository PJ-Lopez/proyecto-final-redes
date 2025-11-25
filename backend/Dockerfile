# Usamos una versión ligera de Node
FROM node:18-alpine

# Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de dependencias (para aprovechar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto donde corre tu backend (asumiré que es el 3000 o 4000)
# IMPORTANTE: Asegúrate que en tu app.js el puerto coincida con este.
EXPOSE 3001 

# Comando para iniciar la app
CMD ["node", "app.js"]