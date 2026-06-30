import emailjs from "@emailjs/browser";

// EmailJS configuration — values come from environment variables.
// See .env.example for the keys you need to set in .env.local.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

// Matches the variables used in the EmailJS template:
//   {{from_name}}, {{from_email}}, {{inquiry_type}}, {{message}}
export type ContactPayload = {
  from_name: string;
  from_email: string;
  inquiry_type: string;
  message: string;
};

export function isEmailServiceConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!isEmailServiceConfigured()) {
    throw new Error(
      "Email service is not configured. Add your EmailJS keys to .env.local."
    );
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, {
    publicKey: PUBLIC_KEY,
  });
}
