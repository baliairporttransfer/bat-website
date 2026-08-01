import { z } from "zod";

export const bookingContactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
      whatsapp: z.string().min(8, "WhatsApp number is invalid"),
        email: z.string().email("Email address is invalid"),
        });

        export type BookingContactValues = z.infer<typeof bookingContactSchema>;