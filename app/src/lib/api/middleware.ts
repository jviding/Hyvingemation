import { z, ZodObject, ZodRawShape } from 'zod';
import { NextResponse } from 'next/server';
import { AppError } from '@/lib/app_error'

function handleRequestWithoutSchema(
  handler: (req: Request) => Promise<NextResponse>
): (req: Request) => Promise<NextResponse> {
  return async (req: Request) => await handler(req);
}

function handleRequestWithSchema<T extends ZodObject<ZodRawShape>>(
  schema: T,
  handler: (req: Request, safeData: z.infer<T>) => Promise<NextResponse>
): (req: Request) => Promise<NextResponse> {
  return async (req: Request) => {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      console.error('Validation error:', result.error.issues);
      throw new AppError('Invalid request data', 400);
    }

    return await handler(req, result.data);
  }
}


export function handleRequest(
  handler: (req: Request) => Promise<NextResponse>
): (req: Request) => Promise<NextResponse>;

export function handleRequest<T extends ZodObject<ZodRawShape>>(
  schema: T,
  handler: (req: Request, data: z.infer<T>) => Promise<NextResponse>
): (req: Request) => Promise<NextResponse>;

export function handleRequest(
  arg1: unknown,
  arg2?: unknown
): (req: Request) => Promise<NextResponse> {
  return async (req: Request) => {
    try {
      const isHandlerFunction = (fn: unknown): fn is (req: Request) => Promise<NextResponse> =>
        typeof fn === 'function';
      const isZodSchema = (schema: unknown): schema is ZodObject<ZodRawShape> =>
        schema !== null && typeof schema === 'object' && 'safeParse' in schema;

      if (isHandlerFunction(arg1) && arg2 === undefined) {
        const handlerFn = handleRequestWithoutSchema(arg1);
        return await handlerFn(req);
      }
      if (isZodSchema(arg1) && isHandlerFunction(arg2)) {
        const handlerFn = handleRequestWithSchema(arg1, arg2);
        return await handlerFn(req);
      }

      throw new AppError('Invalid args in handleRequest. Expected (handler) or (schema, handler).');

    } catch (err: unknown) {
      return AppError.toNextResponse(err);
    }
  }  
}
