# Contact Form (EmailJS) Setup

The contact form sends email straight from the browser via [EmailJS](https://www.emailjs.com) — no backend required.

## Files

| File | Purpose |
| --- | --- |
| `src/components/section/contact-form.tsx` | The form UI, validation wiring, and success/error states |
| `src/components/section/contact-section.tsx` | Wraps the Email/LinkedIn/GitHub buttons + the form |
| `src/services/emailService.ts` | EmailJS send wrapper + config check |
| `src/utils/validation.ts` | Field validation logic |
| `.env.example` | Template for your EmailJS keys |

## 1. Install (already done)

```bash
npm install @emailjs/browser
```

## 2. EmailJS dashboard configuration

1. Create a free account at https://www.emailjs.com.
2. **Add an Email Service** (Email Services → Add New Service). Connect Gmail
   (or your provider) and authorize it. Copy the **Service ID**.
3. **Create an Email Template** (Email Templates → Create New Template). Set:
   - **Subject:** `New Portfolio Contact - {{inquiry_type}}`
   - **Content** (use these variables — they match the code exactly):

     ```
     You have a new message from your portfolio.

     Name: {{from_name}}
     Email: {{from_email}}
     Inquiry: {{inquiry_type}}

     Message:
     {{message}}
     ```
   - In the template settings, set **To Email** to your own address, and set
     **Reply To** to `{{from_email}}` so you can reply directly.
   - Save and copy the **Template ID**.
4. **Get your Public Key** (Account → General → Public Key / API Keys).

## 3. Environment variables

Create `.env.local` in the project root (copy from `.env.example`):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart `npm run dev` after creating it. These are public by design (EmailJS is a
client-side service), so the `NEXT_PUBLIC_` prefix is required and expected.

> Tip: In the EmailJS dashboard, restrict the public key to your domain(s)
> (Account → Security → Allowed Origins) so it can't be used from other sites.

## 4. Deploying on Vercel / Netlify

The same three variables must be set in your host's dashboard:

**Vercel**
1. Project → Settings → Environment Variables.
2. Add `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `..._TEMPLATE_ID`, `..._PUBLIC_KEY`
   (Production + Preview).
3. Redeploy.

**Netlify**
1. Site configuration → Environment variables → Add a variable.
2. Add the same three keys.
3. Trigger a new deploy.

## Behaviour notes

- All fields validate on submit; the email format is checked.
- The submit button is disabled and shows a spinner while sending.
- On success, the form is replaced by a confirmation card.
- If EmailJS fails (or keys are missing), an inline error banner appears.
