# BAT Website

Premium mobile-first website for **Bali Airport Transfer**, built with Next.js 15, TypeScript, Tailwind CSS, and the App Router.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production validation

```bash
npm run lint
npm run build
npm start
```

## Base URL

The default production URL is configured in `lib/constants.ts`:

```ts
https://bat-airport-transfer.vercel.app
```

For Vercel, you may set:

```bash
NEXT_PUBLIC_SITE_URL=https://bat-airport-transfer.vercel.app
```

After the final domain is connected, change only that environment variable to:

```bash
NEXT_PUBLIC_SITE_URL=https://baliairporttransfer.com
```

Metadata, canonical URLs, sitemap, robots, and structured data all use this shared value.

## Deploy to Vercel

1. Push the project to the `bat-website` GitHub repository.
2. Import the repository in Vercel.
3. Keep the detected framework as Next.js.
4. Add `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables.
5. Deploy.

## Content

- Destination pricing: `data/destinations.ts`
- Fleet: `data/fleet.ts`
- Testimonials: `data/testimonials.ts`
- FAQ: `data/faq.ts`
- Business constants: `lib/constants.ts`
- WhatsApp message builder: `lib/whatsapp.ts`

The booking form does not use a database. It sends the completed booking request to WhatsApp.
