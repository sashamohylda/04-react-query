# 04-react-query

Застосунок пошуку фільмів за допомогою TMDB API з пагінацією результатів.
Серверний стан (запити, кеш, стани завантаження) керується через **TanStack Query**,
пагінація — через **React Paginate**.

## Стек

- React 19 + TypeScript
- Vite
- axios — HTTP-запити
- @tanstack/react-query — робота із серверними даними
- react-paginate — пагінація
- CSS Modules + modern-normalize

## Запуск локально

```bash
npm install
```

Створіть у корені файл `.env` і додайте свій TMDB Read Access Token:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

```bash
npm run dev
```

## Посилання

- Репозиторій: https://github.com/sashamohylda/04-react-query
- Робоча сторінка (Vercel): https://04-react-query-movies.vercel.app/
