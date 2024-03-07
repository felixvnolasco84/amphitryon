"use server";

import ContactFormEmail from "@/template/email/ContactFormEmail";
import * as z from "zod";
import { Resend } from "resend";
import { FormSchema } from "@/components/forms/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: z.infer<typeof FormSchema>) {
  const { name, email, phoneNumber, dateEvent, venue, eventDescription } = data;
  try {
    const data = await resend.emails.send({
      from: "felipe@amphitryon.mx",
      to: ["felipe@amphitryon.mx", email],
      subject: "Nuevo contacto | Amphitryon",
      react: ContactFormEmail({
        name,
        email,
        phoneNumber,
        dateEvent,
        venue,
        eventDescription,
      }),
    });
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}
