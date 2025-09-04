import { z, ZodObject, ZodRawShape } from 'zod';
import { NextResponse } from 'next/server';
import { AppError } from '@/lib/app_error'

export function handleRequest<T extends ZodObject<ZodRawShape>>(
  schema: T | undefined,
  handler: (req: Request, data?: z.infer<T>) => Promise<NextResponse>
) {
  return async (req: Request) => {
    try {

      if (!schema) return await handler(req);

      const body = await req.json();
      const result = schema.safeParse(body);

      if (!result.success) {
        console.error('Validation error:', result.error.issues);
        throw new AppError('Invalid user data', 400);
      }

      return await handler(req, result.data);

    } catch (err: unknown) {
      return AppError.toNextResponse(err);
    }
  }
}
