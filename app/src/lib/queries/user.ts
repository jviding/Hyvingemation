import { prisma } from '@/lib/prisma';
import { CreateUserSchema, EditUserSchema } from '@/lib/schemas/user';
import { z } from 'zod';
import { AppError } from '@/lib/app_error';

export type CreateUser = z.infer<typeof CreateUserSchema>;
export type EditUser = z.infer<typeof EditUserSchema>;

export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByName(name: string) {
  return prisma.user.findUnique({ where: { name } });
}

export async function createUser(data: CreateUser) {  
  if (!!(await getUserByName(data.name))) {
    throw new AppError('Username is already taken.', 400);
  }
  const user = await prisma.user.create({ data });
  return user;
}

export async function updateUser(data: EditUser) {
  return prisma.user.update({ where: { id: data.id }, data });
}

export async function deleteUser(id: number) {
  return prisma.user.delete({ where: { id } });
}
