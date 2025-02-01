import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({required_error:"Email is required"}).email({message:"Please enter Valid Email"}),
    password: z.string({required_error:"Email is required"}).min(1),
})

export type LoginSchema = z.infer<typeof loginSchema>