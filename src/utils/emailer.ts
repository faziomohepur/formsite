// emailer.ts (after)
import { env } from "cloudflare:workers";

export const sendEmail = async (
  fromEmail: string,
  text: string,
  subject: string
) => {
  await env.EMAIL.send({
    to: "me@jamesqquick.com",
    from: "speaking@jamesqquick.com",
    replyTo: fromEmail,
    subject,
    text,
  });
};