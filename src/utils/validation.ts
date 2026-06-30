export type ContactValues = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

// Pragmatic email check: one @, a domain, and a TLD. Good enough for a form;
// the real source of truth is whether the email actually delivers.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.inquiryType.trim()) {
    errors.inquiryType = "Please select what we're building.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share a few details.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message is a little short — tell me more.";
  }

  return errors;
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}
