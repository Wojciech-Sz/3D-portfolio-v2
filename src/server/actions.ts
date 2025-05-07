"use server";

import { env } from "~/env";
import emailjs from "@emailjs/browser";

export const sendEmail = async ({
  from_name,
  from_email,
  subject,
  message,
}: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}) => {
  try {
    await emailjs.send(
      env.EMAILJS_SERVICE_ID,
      env.EMAILJS_TEMPLATE_ID,
      {
        from_name,
        from_email,
        subject,
        message,
      },
      env.EMAILJS_PUBLIC_KEY,
    );
  } catch (error) {
    console.log(error);
  }
};
