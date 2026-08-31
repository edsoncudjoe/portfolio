# Portfolio Website

Minimal static portfolio. Plain HTML/CSS/vanilla JS — no build step, no dependencies.

## Files

```
index.html          homepage — category grid (Photography, Video)
photography.html    photo gallery + lightbox
video.html          video gallery (stills for now; Vimeo embed block commented at bottom)
about.html          portrait + bio + contact links
contact.html        email + social
assets/css/style.css
assets/js/main.js   lightbox (ESC / click-outside / arrow keys)
```

## Before deploying

1. Search every file for `[YOUR` and `<!-- REPLACE` — fill in your name, bio, email, social URL, and swap placeholder images for real photos.
2. Add a favicon at `assets/favicon.ico`.
3. For gallery images: the `<a href>` is the full-size image shown in the lightbox, the `<img src>` is the thumbnail shown in the grid. Point both at your files (they can be the same file if you only export one size — lazy loading keeps it acceptable).

## Deploy: GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
```

Create a new repo on github.com (New repository → name it e.g. `portfolio` → don't initialise with README), then:

```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Deploy: Vercel (free)

1. Sign up at vercel.com with your GitHub account.
2. New Project → Import your `portfolio` repo.
3. No settings needed (static site, zero config) → Deploy.
4. You get a free `yourproject.vercel.app` URL immediately.

Every push to `main` auto-redeploys.

## Custom domain: Porkbun → Vercel

1. Buy your domain at porkbun.com (~€10–15/yr).
2. In Vercel: Project → Settings → Domains → add `yourdomain.com` and `www.yourdomain.com`.
3. In Porkbun: Domain → DNS Records, add:
   - **A record**: Host `@` (or blank) → Answer `76.76.21.21`
   - **CNAME record**: Host `www` → Answer `cname.vercel-dns.com`
4. Delete any conflicting parked/parking records Porkbun adds by default.
5. Wait a few minutes for DNS to propagate; Vercel provisions HTTPS automatically.

## Adding a new category later

See the `HOW TO ADD A NEW CATEGORY` comment block in `index.html`.
