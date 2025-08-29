const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function createUsers() {
  await prisma.user.createMany({
    data: [
      { name: 'Alice',   password: 'Hello123', isAdmin: false },
      { name: 'Bob',     password: 'World456', isAdmin: false },
      { name: 'Mallory', password: 'Hack789',  isAdmin: true },
    ]
  });
}

async function createTasks() {
  // Fetch user IDs
  const userIds = await prisma.user.findMany({ select: { id: true } });
  // Create tasks assigned to users
  const tasks = Array.from({ length: 20 }, (_, i) => ({
    name: `Task ${i + 1}`, 
    dueDate: new Date(Date.now() + (i * 24*60*60*1000)), // +i days
    isCompleted: i % 4 === 0,
    creatorId: userIds[i % userIds.length].id,
    assigneeId: userIds[(i + 1) % userIds.length].id,
  }));
  await prisma.task.createMany({ data: tasks });
}

async function main() {
  await createUsers();
  await createTasks();
  console.log('Database has been seeded.' );
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
  