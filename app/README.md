## Getting Started

Next.js project, with Typescript and React.
PostgreSQL database with Prisma, for models and ORM.

## Install
```bash
npm install
```

Set up env file.
DATABASE_URL

### Prisma
Apply all pending migrations.
```bash
npx prisma migrate deploy
```

Generate client to use the latest schema.
```bash
npx prisma generate
```

## Develop
Start dev server.
```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

### Prisma
Database schema is defined in /prisma/schema.prisma.

To create an SQL migration file and apply to the database:
```bash
npx prisma migrate dev --name [name-for-migration-file]
```
