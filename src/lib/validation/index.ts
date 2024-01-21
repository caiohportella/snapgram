import * as z from "zod";

export const SignUpValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must contain at least 2 characters." })
    .max(50),
  username: z
    .string()
    .min(3, { message: "Username must contain at least 3 characters." })
    .max(20),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});

export const SignInValidationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});

export const PostValidationSchema = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string(),
  tags: z.string(),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});
