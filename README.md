# Alvin Dzingai Ngwerume — Commercial Growth & GTM Systems Portfolio

Self-contained, zero-build static portfolio built with dependency-free HTML5, CSS3, and ES6 JavaScript. Engineered for immediate GitHub Pages deployment from the repository root with relative `./` asset references so both custom domains and `/<repo-name>/` project subpaths resolve cleanly.

## Flat Root Structure

```text
/
├── index.html   # Semantic editorial layout & accessible modal markup
├── styles.css   # Self-contained CSS3 design system & sticky card-stack styles
├── app.js       # ES6 interactivity (filters, modal, stacks, accordions, PDF CV generator)
└── README.md    # GitHub Pages deployment instructions
```

## GitHub Pages Deployment Setup

1. Create a new GitHub repository (for example, `alvin-ngwerume-portfolio`) and copy `index.html`, `styles.css`, `app.js`, `README.md`, and `assets/headshot.png` (or run `npm run build` and deploy `dist/`). An `AN` monogram plaque renders automatically if `./assets/headshot.png` is missing.
2. Commit and push to the `main` branch:
   ```bash
   git init
   git add index.html styles.css app.js README.md assets/
   git commit -m "Deploy portfolio to GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select **`main`** and **`/ (root)`**, then click **Save**.
5. GitHub Pages publishes directly without any Node.js or bundler build step at `https://<your-username>.github.io/<repo-name>/`.

## Local Preview (No Build Required)

- Open `index.html` directly in any browser, or run a lightweight static server from the repository root:
  ```bash
  python3 -m http.server 3000
  ```
- Customizing contact details or copy only requires editing `index.html` and the data arrays at the top of `app.js` (the **Resume** button links directly to your Google Drive folder).
