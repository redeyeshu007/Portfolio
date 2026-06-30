"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/services/emailService";
import {
  validateContact,
  hasErrors,
  type ContactErrors,
} from "@/utils/validation";

const INQUIRY_OPTIONS = [
  "Hire Me",
  "Project Collaboration",
  "Freelance Opportunity",
  "Software Engineering Role",
  "Hackathon Team-Up",
  "Startup Idea",
  "Other",
] as const;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-[invalid=true]:border-red-500/70 aria-[invalid=true]:ring-red-500/30";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sending = status === "sending";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const values = { name, email, inquiryType, message };
    const validationErrors = validateContact(values);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactEmail({
        from_name: name.trim(),
        from_email: email.trim(),
        inquiry_type: inquiryType,
        message: message.trim(),
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message."
      );
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setInquiryType("");
    setMessage("");
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        role="status"
        aria-live="polite"
        className="mt-2 flex w-full max-w-md flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
      >
        <CheckCircle2 className="size-12 text-emerald-500" aria-hidden />
        <h4 className="text-lg font-semibold">Message Sent</h4>
        <p className="text-sm text-muted-foreground text-balance">
          Thank you for reaching out. Your message has been received, and
          I&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-1 rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-2 flex w-full max-w-md flex-col gap-4 text-left"
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          disabled={sending}
          suppressHydrationWarning
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={fieldClass}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={sending}
          suppressHydrationWarning
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Inquiry type */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-inquiry" className="text-sm font-medium">
          What are we building?
        </label>
        <select
          id="contact-inquiry"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          disabled={sending}
          suppressHydrationWarning
          aria-invalid={Boolean(errors.inquiryType)}
          aria-describedby={
            errors.inquiryType ? "contact-inquiry-error" : undefined
          }
          className={fieldClass}
        >
          <option value="" disabled>
            Select an option…
          </option>
          {INQUIRY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p
            id="contact-inquiry-error"
            role="alert"
            className="text-xs text-red-500"
          >
            {errors.inquiryType}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about it…"
          disabled={sending}
          suppressHydrationWarning
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p
            id="contact-message-error"
            role="alert"
            className="text-xs text-red-500"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            aria-live="assertive"
            className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500"
          >
            <AlertTriangle className="mt-0.5 size-4 flex-none" aria-hidden />
            <span>
              {errorMessage ||
                "Your message couldn't be sent. Please try again, or email me directly."}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={sending}
        suppressHydrationWarning
        className="inline-flex items-center justify-center gap-2 self-end rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Start the Conversation"
        )}
      </button>
    </form>
  );
}
