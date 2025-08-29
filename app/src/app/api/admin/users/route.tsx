import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany();
  console.log('API fetched users:', users);
  return NextResponse.json(users);
}
