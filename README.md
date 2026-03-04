# George Song Portfolio

Single-page portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update Portfolio Content

All text/data is centralized in one file:

- `src/content/siteContent.ts`

Update this file to change personal info, projects, experience, skills, links, and resume path.

## Resume File

Resume is expected at:

- `public/resume.pdf`

Replace that file when you want to update the Resume button target.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Keep default Next.js build settings.
4. Deploy.

## Optional Static Export

The project supports static export with:

```bash
STATIC_EXPORT=true npm run build
```

This writes static output to `out/`.
