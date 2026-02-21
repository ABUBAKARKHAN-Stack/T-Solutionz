import z from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be under 200 characters"),
    service: z.string().optional(),

  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;