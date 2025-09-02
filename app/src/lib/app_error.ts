import { NextResponse } from 'next/server';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, AppError.prototype);
  }
  
  static handle(error: unknown): AppError {
    if (error instanceof AppError) {
      console.error('AppError:', error.message);
      return error;
    } else if (error instanceof Error) {
      console.error('Unexpected error:', error);
      return new AppError("An unexpected error occurred.");
    } else {
      console.error('Unknown error:', error);
      return new AppError('An unknown error occurred.');
    }
  }

  static toNextResponse(error: unknown) {
    const appError = this.handle(error);
    return NextResponse.json({ error: appError.message }, { status: appError.statusCode });
  }
}
