import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const tasks = await prisma.task.findMany();
  console.log('API fetched tasks:', tasks);
  return NextResponse.json(tasks);
}
