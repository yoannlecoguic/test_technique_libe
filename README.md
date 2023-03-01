## Task manager
Routes :
* GET http://localhost:8080/api/tasks/:id

* POST http://localhost:8080/api/tasks { title, description, assignee, priority, status }

* PUT http://localhost:8080/api/tasks/:id { title, description, assignee, priority, status }

* DELETE http://localhost:8080/api/tasks/:id

**With headers :**

Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InlvYW5uMSJ9LCJpYXQiOjE2Nzc2NzgzMzEsImV4cCI6MTY3Nzg1MTEzMX0.df8M4dkqlj283V2QgbnFEXl5UVc0igjqjwLC2MSI-tk

## Project Setup

Rename .env.example to .env in /
```sh
docker-compose up
docker exec -it backContainer bash
npx prisma generate
npx prisma migrate dev
```

## Regenerate new types when the model has changed

```sh
docker exec -it backContainer bash
npx prisma generate
```

## Create migration to update the DB after a schema update

```sh
docker exec -it backContainer bash
npx prisma migrate dev
```

### Run Unit Tests with Jest

```sh
cd back/
npm run test:unit
```
