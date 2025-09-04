import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CreateUserSchema, UpdateUserSchema, DeleteUserSchema } from '@/lib/schemas/user';
import { createUser, updateUser, deleteUser, 
    CreateUser, UpdateUser, DeleteUser } from '@/lib/queries/user';
import { handleRequest } from '@/lib/api/middleware';


export const GET = handleRequest(async (request: Request) => {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
})

export const POST = handleRequest(CreateUserSchema, async (request: Request, data: CreateUser) => {
  const user = await createUser(data);
  console.log('Created user:', user);
  return NextResponse.json({}, { status: 201 });
})

export const PUT = handleRequest(UpdateUserSchema, async (request: Request, data: UpdateUser) => {
    const user = await updateUser(data);
    console.log('Modified user:', user);
    return NextResponse.json({}, { status: 204 });
})

export const DELETE = handleRequest(DeleteUserSchema, async (request: Request, data: DeleteUser) => {
    const user = await deleteUser(data);
    console.log('Deleted user:', user);
    return NextResponse.json({}, { status: 204 });
})
