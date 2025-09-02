import { prisma } from '@/lib/prisma';
import { UserSchema } from '@/lib/schemas/user';
import { z } from 'zod';
import { AppError } from '@/lib/app_error';

export type User = z.infer<typeof UserSchema>;


export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByName(name: string) {
  return prisma.user.findUnique({ where: { name } });
}

export async function createUser(data: User) {
  if (!!(await getUserByName(data.name))) {
    throw new AppError('Username is already taken.', 400);
  }
  const user = await prisma.user.create({ data });
  return user;
}

export async function updateUser(id: number, data: Partial<User>) {
  return prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: number) {
  return prisma.user.delete({ where: { id } });
}
