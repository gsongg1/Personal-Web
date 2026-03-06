# George Song Portfolio

Portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Deploying to GitHub Pages

This project is configured to deploy automatically with GitHub Actions.

1. Push this repo to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` (or run the `Deploy to GitHub Pages` workflow manually from `Actions`).

The workflow builds the app at repo root and publishes the static output from `out/`.

## Custom domain (georgesong.xyz)

- `public/CNAME` is committed with `georgesong.xyz`.
- Add these DNS records at your domain provider:
  - `A @ 185.199.108.153`
  - `A @ 185.199.109.153`
  - `A @ 185.199.110.153`
  - `A @ 185.199.111.153`
  - `CNAME www gsongg1.github.io`

## Local static export check (PowerShell)

```powershell
cd "C:\Users\GEORGE\OneDrive\Documents\Personal Website\Personal-Web"
$env:STATIC_EXPORT = "true"
$env:BASE_PATH = ""
npm run build
```

Use `BASE_PATH="/Personal-Web"` only when testing the default project URL (`https://gsongg1.github.io/Personal-Web`).
