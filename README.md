# Portfolio — Edson Cudjoe

Minimal static portfolio for a Barcelona-based photographer/videographer.
Plain HTML/CSS/vanilla JS — no build step, no dependencies.

Live at [edsoncudjoe.com](https://edsoncudjoe.com), deployed on Vercel.
Every push to `main` auto-redeploys.

## Files

```
index.html          homepage — photo feed
photography.html    photo gallery + lightbox
video.html          video page (Bunny Stream embed)
about.html          portrait + bio + services + contact links
contact.html        email + social
assets/css/style.css
assets/js/main.js   email obfuscation + lightbox (ESC / click-outside / arrow keys)
assets/favicon.ico
assets/img/         email.svg (obfuscated address), og-image.jpg (social share)
content/images/     portfolio photography
```

## Editing notes

- **Adding photos**: add an `<a>`/`<img>` pair to the gallery grid in `index.html` or `photography.html`. The `<a href>` is the full-size image shown in the lightbox, the `<img src>` is the image in the grid — they can be the same file (lazy loading keeps it acceptable).
- **Adding videos**: duplicate the `.video-embed` block in `video.html` and swap in the Bunny Stream player URL.
- **Email**: the address is deliberately obfuscated — it lives as vector outlines in `assets/img/email.svg` and is assembled from parts in `assets/js/main.js`. To change it, edit the `user`/`domain`/`tld` variables in `main.js` and regenerate the SVG paths.
- **Social links**: Instagram URL appears on `about.html` and `contact.html`.
