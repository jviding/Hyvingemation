import { z } from 'zod';

export const UserSchema = z.object({
  id: z
    .number(),
  name: z
    .string()
    .min(3)
    .max(24)
    .regex(/^[a-zA-Z0-9_]+$/),
  password: z
    .string()
    .min(6)
    .max(64)
    .regex(/^[\x20-\x7E]+$/), // Printable ASCII
  isAdmin: z
    .boolean()
});

export const CreateUserSchema = UserSchema.omit({ id: true });

export const EditUserSchema = UserSchema.omit({ name: true });
