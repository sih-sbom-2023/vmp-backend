import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  firstName: z.string().min(3, "First name must be at least 3 characters long"),
  lastName: z.string().optional().nullable(),
});

export type SignUpDto = z.infer<typeof SignUpSchema>;
