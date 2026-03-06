# George Song Portfolio

Portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Deploying to GitHub Pages

This project is configured to deploy automatically with GitHub Actions.

1. Push this repo to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` (or run the `Deploy to GitHub Pages` workflow manually from `Actions`).

The workflow builds the app at repo root and publishes the static output from `out/`.

Free GitHub Pages URL for this repo:
`https://gsongg1.github.io/Personal-Web`

## Local static export check (PowerShell)

```powershell
cd "C:\Users\GEORGE\OneDrive\Documents\Personal Website\Personal-Web"
$env:STATIC_EXPORT = "true"
$env:BASE_PATH = "/Personal-Web"
npm run build
```

Use `BASE_PATH=""` only when deploying with a custom domain and a `public/CNAME` file.
