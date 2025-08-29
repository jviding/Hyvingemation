## Quick start
Database schema is defined in *schema.prisma*.

When starting from a scratch:

1) Apply migrations. <br />
To deploy the schema in the database.
```bash
npx prisma migrate deploy
```

2) Generate client. <br />
To use the latest schema from app.
```bash
npx prisma generate
```

3) (Optional) Generate test data.
```bash
npx ts-node prisma/seed.ts
```

## Development
Create an SQL migration file and apply it to the database:
```bash
npx prisma migrate dev --name [name-for-migration-file]
```

Wipe and reapply all migrations:
```bash
npx prisma migrate reset
```

## Production
Apply all the pending migrations:
```bash
npx prisma migrate deploy
```

Then, regenerate client.
