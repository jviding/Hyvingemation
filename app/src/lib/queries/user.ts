import { prisma } from '@/lib/prisma';
import { CreateUserDataObj, DeleteUserDataObj, UpdateUserDataObj } from '@/lib/schemas/user';
import { AppError } from '@/lib/app_error';


export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUserById(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}

export async function getUserByName(name: string) {
  return await prisma.user.findUnique({ where: { name } });
}

export async function createUser(data: CreateUserDataObj) {  
  if (!!(await getUserByName(data.name))) {
    throw new AppError('Username is already taken.', 400);
  }
  const user = await prisma.user.create({ data });
  return user;
}

export async function updateUser(data: UpdateUserDataObj) {
  const user = await prisma.user.update({ where: { id: data.id }, data });
  return user;
}

export async function deleteUser({ id }: DeleteUserDataObj) {
  return await prisma.user.delete({ where: { id } });
}
