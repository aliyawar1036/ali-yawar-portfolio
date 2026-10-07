# Ali Yawar — AI Automation Engineer & AI Agent Developer Portfolio

Production-ready React + TypeScript + Vite + Tailwind CSS portfolio website.

## Why You Saw a Blank / White Screen in VS Code (Live Server vs. Vite)

Because this project uses **React and TypeScript (`.tsx` files)**, opening `index.html` directly in the browser or using the **VS Code "Live Server" extension** will show a blank screen (browsers cannot execute raw `/src/main.tsx` files directly without Vite bundling them).

### How to Run Locally in VS Code

1. Open the terminal in VS Code (`Ctrl + ~`) inside this project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal:
   `http://localhost:3000`

### How to Build & Deploy Live (Vercel, Netlify, GitHub Pages, or Static Hosting)

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. This creates a `dist/` folder containing compiled HTML, CSS, and JavaScript.
   - If deploying to **Vercel** or **Netlify**: Set Build Command to `npm run build` and Output Directory to `dist`.
   - If uploading manually to a static host or testing with Live Server: Serve the **`dist/`** folder (not the root `index.html`).
