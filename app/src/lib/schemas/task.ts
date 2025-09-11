import { z } from 'zod';

export const TaskSchema = z.object({
  id: z
    .number(),
  name: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[\x20-\x7E]+$/), // Any printable ASCII
  dueDate: z
    .iso.datetime(),
  isCompleted: z
    .boolean(),
  creatorId: z
    .number(),
  assigneeId: z
    .number()
});
