const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      password: 'Hello123',
      isAdmin: true,
    },
  });
  await prisma.user.create({
    data: {
      name: 'Bob',
      password: 'World456',
      isAdmin: false,
    },
  });
}

main().finally(() => prisma.$disconnect());