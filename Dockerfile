# Используем образ с Node.js для сборки проекта
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY package*.json ./

# Устанавливаем зависимости с флагом для игнорирования конфликтов
RUN npm install --legacy-peer-deps

COPY . .

# Сборка проекта
RUN npm run build

FROM nginx:1.23-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
