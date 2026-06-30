"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export function JoinForm({ delay = 0.04 }: { delay?: number }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured properly.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      setIsSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join-form" className="flex flex-col gap-8 pt-12">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2 text-center items-center">
          <h2 className="text-3xl font-bold">Ready to Build?</h2>
          <p className="text-muted-foreground text-sm max-w-[500px]">
            Fill out the form below to apply for an open role or propose a new collaboration.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={delay * 2}>
        <div className="max-w-2xl mx-auto w-full border border-border rounded-2xl p-6 md:p-8 bg-background shadow-lg relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4 animate-in fade-in zoom-in duration-500">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-bold">Application Received!</h3>
              <p className="text-muted-foreground">
                Thanks for reaching out. I'll review your details and get back to you soon.
              </p>
              <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-primary">*</span></label>
                  <input required type="text" id="name" name="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email <span className="text-primary">*</span></label>
                  <input required type="email" id="email" name="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="github" className="text-sm font-medium">GitHub Profile <span className="text-primary">*</span></label>
                  <input required type="url" id="github" name="github" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="https://github.com/..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn (Optional)</label>
                  <input type="url" id="linkedin" name="linkedin" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="https://linkedin.com/in/..." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-medium">Desired Role <span className="text-primary">*</span></label>
                  <input required type="text" id="role" name="role" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="e.g. Frontend Developer" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="experience" className="text-sm font-medium">Years of Experience <span className="text-primary">*</span></label>
                  <input required type="text" id="experience" name="experience" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="e.g. 2 Years" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tech" className="text-sm font-medium">Primary Tech Stack <span className="text-primary">*</span></label>
                <input required type="text" id="tech" name="tech" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="React, Node.js, Python..." />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Why do you want to collaborate? <span className="text-primary">*</span></label>
                <textarea required id="message" name="message" rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell me a bit about yourself and which project excites you..." />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="hours" className="text-sm font-medium">Hours per week? <span className="text-primary">*</span></label>
                <input required type="text" id="hours" name="hours" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="e.g. 5 hours" />
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border mt-2">
                <input required type="checkbox" id="consent" className="mt-1 flex-shrink-0 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  I understand that these are open-source and collaborative passion projects, not paid employment opportunities.
                </label>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" size="lg" className="w-full sm:w-auto self-end mt-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          )}
        </div>
      </BlurFade>
    </section>
  );
}
