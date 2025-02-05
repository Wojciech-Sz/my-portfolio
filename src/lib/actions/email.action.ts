"use server";

import { Resend } from "resend";

import EmailTemplate from "@/components/emails/EmailTemplate";

import handleError from "../handlers/error";
import logger from "../logger";

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(params: EmailParams) {
  const { name, email, message } = params;

  try {
    const { data, error } = await resend.emails.send({
      from: "Wojtek Szczygielski <onboarding@resend.dev>",
      to: ["w.szczygielski00@gmail.com"],
      subject: "Project",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      logger.error(error);
      throw new Error("Nie udało się wysłać wiadomości: " + error.message);
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
