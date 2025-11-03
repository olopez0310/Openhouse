# OpenHouse Static Site (starter)

This is a small, static "Open House" site you can host on GitHub Pages or Netlify. It includes a contact form that can post to Formspree or Netlify Forms.

## Files
- `index.html` — main page
- `styles.css` — simple styling
- `script.js` — client-side listing storage + admin UI
- `README.md` — this file

## Quick steps to use

### Option A — Formspree (recommended, easiest)
1. Sign up at https://formspree.io and create a new form. Copy your **Form ID** (looks like `abcxyz`).
2. In the site, open the Admin (button bottom-right) and unlock with password: `openhouse2025`.
3. Paste your Formspree ID into the "Formspree ID" field and save.
4. Deploy the site (see below). When visitors submit the form, Formspree will forward submissions to your email and show them in the Formspree dashboard.

### Option B — Netlify Forms
1. Deploy the site to Netlify (see Deploying below).
2. Netlify detects forms automatically; enable form detection in the Netlify site settings if needed.
3. Submissions will appear in Netlify dashboard → Forms.

### Deploying to GitHub Pages
1. Create a GitHub repository (e.g. `yourname.github.io` or any repo).
2. Copy these files into the repo root, commit, and push.
3. In the repository settings → Pages, choose branch `main` and `/ (root)` as the source.
4. Your site will be available at `https://yourname.github.io/reponame/` (or `https://yourname.github.io` for a repo named `yourname.github.io`).

Command-line quick deploy:
```bash
git init
git add .
git commit -m "initial openhouse site"
git branch -M main
# replace YOUR_REMOTE with your GitHub repo SSH or HTTPS URL
git remote add origin YOUR_REMOTE
git push -u origin main
```

## Notes & next steps
- The admin password is client-side only (not secure). For multi-user editing use a real backend (Netlify Identity + functions, Firebase, etc.).
- If you want, I can:
  - create a GitHub repo for you and push these files (you'll need to give GitHub access), OR
  - create a ZIP you can download and deploy yourself (I've included a ZIP).
