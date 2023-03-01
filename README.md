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