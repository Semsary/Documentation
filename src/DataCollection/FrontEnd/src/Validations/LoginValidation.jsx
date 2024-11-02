
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email().min(5).max(255),
  password: z
    .string()
    .min(8)
    .max(255)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: "Password must contain at least one letter and one number",
    }),
});

export default LoginSchema;