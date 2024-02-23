import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Your first name must be at least 3 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Your last name must be at least 3 characters" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Your phone number must be at least 10 characters" })
    .refine(
      (value) => {
        const phoneNumberRegex = new RegExp(/^\d{10}$/);

        return phoneNumberRegex.test(value);
      },
      {
        message: "Your phone number should match the format 8885559999",
      }
    ),
});
