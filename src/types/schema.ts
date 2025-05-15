import { z } from "zod";

export const userProfileSchema = z.object({
  id: z.string(),
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  bio: z.string().max(350, "Bio must be 350 characters or less"),
  profile_photo: z.string().url("Profile photo must be a valid URL"),
  settings: z.object({
    dark_mode: z.boolean(),
    email_notifications: z.boolean(),
  }),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
