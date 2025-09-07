import { NextResponse } from 'next/server';
import { 
    CreateUserSchema, CreateUserDataObj, 
    UpdateUserSchema, UpdateUserDataObj,
    DeleteUserSchema, DeleteUserDataObj } from '@/lib/schemas/user';
import { getAllUsers, createUser, updateUser, deleteUser } from '@/lib/queries/user';
import { handleRequest } from '@/lib/api/middleware';


export const GET = handleRequest(async (request: Request) => {
    const users = await getAllUsers();
    return NextResponse.json(users, { status: 200 });
})

export const POST = handleRequest(CreateUserSchema, async (request: Request, data: CreateUserDataObj) => {
  const user = await createUser(data);
  console.log('Created user:', user);
  return new NextResponse(null, { status: 201 });
})

export const PUT = handleRequest(UpdateUserSchema, async (request: Request, data: UpdateUserDataObj) => {
    const user = await updateUser(data);
    console.log('Modified user:', user);
    return new NextResponse(null, { status: 204 });
})

export const DELETE = handleRequest(DeleteUserSchema, async (request: Request, data: DeleteUserDataObj) => {
    const user = await deleteUser(data);
    console.log('Deleted user:', user);
    return new NextResponse(null, { status: 204 });
})
