# Personal website — Giovanni Borraccia

Single-page academic site (plain HTML/CSS/JS, no build step). Palette: Oxford blue & muted gold, with a dark-mode toggle.

## Files
```
index.html      all content + section structure
style.css       design system (colours are CSS variables at the top)
script.js       dark mode, footer year, scroll reveals
assets/         CV_Giovanni_Borraccia.pdf (linked from the site)
```

## Before you publish — fill in the placeholders
Search the code for `TODO` and `data-todo`. The spots to complete:
- **Job market paper** — title, abstract, and the Paper/Slides links (`index.html`, section 02).
- **Second & third papers** — titles and one-line summaries.
- **LinkedIn / Google Scholar** — replace every `href="#"` with your real URLs (hero, contact).
- **Publications** — add the two real links (IMF paper, LSE discussion paper).

Any link left as `href="#"` will not jump anywhere; it just logs a note in the browser console.

## Preview locally
```bash
cd ~/personal-website
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages (free, your own URL)
1. Create a GitHub account if you don't have one. Your site will live at
   `https://<username>.github.io`.
2. Create a **public** repository named exactly `<username>.github.io`.
3. Upload these files to the repository root (either drag-and-drop in the
   GitHub web UI, or with git):
   ```bash
   cd ~/personal-website
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
4. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save. The site is live in a minute or two.

To update later: edit the files and push again (or re-upload).
