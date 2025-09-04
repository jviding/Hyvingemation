import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CreateUserSchema } from '@/lib/schemas/user';
import { createUser } from '@/lib/queries/user';
import { AppError } from '@/lib/app_error';


export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err: unknown) {
    return AppError.toNextResponse(err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = CreateUserSchema.safeParse(body);

    if (!result.success) {
      console.error('Validation error:', result.error.issues);
      throw new AppError('Invalid user data', 400);
    }
  
    const user = await createUser(result.data);
    console.log('Created user:', user);
    return NextResponse.json({}, { status: 201 });

  } catch (err: unknown ) {
    return AppError.toNextResponse(err);
  }
}


