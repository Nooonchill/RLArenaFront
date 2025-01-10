# RLArena Frontend

## Общее о проекте
RLArena — платформа для проведения соревнований по усиленному обучению (РL) и анализу данных. Данный репозиторий содержит frontend часть проекта, разработанную с использованием React и Tailwind CSS.

## Запуск проекта

### Требования
- Node.js версии 16.x или выше
- npm или yarn

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <URL_репозитория>
   cd RLArenaFront
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

### Запуск в режиме разработчика
   ```bash
   npm run dev
   ```
   Проект будет доступен по адресу: http://localhost:5173

### Сборка проекта
   ```bash
   npm run build
   ```

## Для запуска через Docker

    Выполните 
    ```bash
    cd RLArenaFront
    docker-compose up --build
    ```
