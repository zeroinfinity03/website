# surya-singh-portfolio

Personal site. Static HTML, CSS and JS. No framework, no build step.

```
index.html    markup + all content
styles.css    design tokens, layout, light/dark themes
script.js     theme toggle, sticky nav, scroll reveal
resume.pdf    linked from the hero
_redirects    Netlify SPA fallback
```

## Editing

All copy lives in `index.html`. Colours and spacing are CSS custom properties at the
top of `styles.css` (`:root` for light, `[data-theme="dark"]` for dark).

## Local preview

```bash
python3 -m http.server 4321
```

## Deploy (Netlify)

Connect this repo in Netlify. No build command, publish directory `.`.
