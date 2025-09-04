import { prisma } from '@/lib/prisma';
import { CreateUserSchema, DeleteUserSchema, UpdateUserSchema } from '@/lib/schemas/user';
import { z } from 'zod';
import { AppError } from '@/lib/app_error';

export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type DeleteUser = z.infer<typeof DeleteUserSchema>;

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

export async function updateUser(data: UpdateUser) {
  const user = prisma.user.update({ where: { id: data.id }, data });
  return user;
}

export async function deleteUser({ id }: DeleteUser) {
  return prisma.user.delete({ where: { id } });
}
