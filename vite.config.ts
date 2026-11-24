import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

/**
 * Minimal Vite pass-through configuration for the flat static portfolio
 * (`index.html`, `styles.css`, `app.js`) so AI Studio preview and build checks
 * run cleanly while keeping root files 100% build-free for GitHub Pages.
 */
export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      {
        name: 'copy-vanilla-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) {
            return;
          }
          for (const filename of ['app.js', 'styles.css']) {
            const srcFile = path.resolve(__dirname, filename);
            const destFile = path.resolve(distDir, filename);
            if (fs.existsSync(srcFile)) {
              fs.copyFileSync(srcFile, destFile);
            }
          }
        },
      },
    ],
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
