"use server";

import ContactFormEmail from "@/template/email/ContactFormEmail";
import { Resend } from "resend";

const resend = new Resend("");

export async function sendContactEmail(data: any) {
  const { name, email, phoneNumber } = data;
  try {
    const data = await resend.emails.send({
      from: "Cesar@amphitryon.mx",
      to: ["Cesar@amphitryon.mx"],
      subject: "Nuevo contacto | Amphitryon",
      react: ContactFormEmail({
        name,
        email,
        phoneNumber,
      }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
