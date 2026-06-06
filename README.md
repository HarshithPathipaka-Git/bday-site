# Deployment Notes (Vite + React)

## 1. Create Project

```bash
npm create vite@latest my-project -- --template react
cd my-project
npm install
```

Create `.gitignore` immediately:

```gitignore
node_modules/
dist/
.env
.env.local
```

Why?

* `node_modules` can be recreated with `npm install`
* `dist` is generated during build
* `.env` may contain secrets

Never push these files.

---

# 2. Development

Start development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Always run build before deploying.

---

# 3. GitHub Setup

Initialize Git:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create GitHub repository:

```bash
git remote add origin <repo-url>
git push -u origin main
```

---

# 4. Vercel Deployment (Recommended)

Push only source code.

Repository should contain:

```text
src/
public/
package.json
package-lock.json
vite.config.js
.gitignore
```

Do NOT push:

```text
node_modules/
dist/
```

Deploy:

1. Push code to GitHub
2. Import repository into Vercel
3. Let Vercel auto-detect Vite
4. Deploy

Future updates:

```bash
git add .
git commit -m "Update project"
git push
```

Vercel automatically:

* Installs packages
* Builds project
* Deploys project

No manual build upload required.

---

# 5. GitHub Pages Deployment

GitHub Pages serves static files.

Option A: docs folder

Build:

```bash
npm run build
```

Copy dist contents into docs folder.

GitHub Pages:

Settings → Pages → Deploy from branch → main → /docs

---

Option B: gh-pages branch

Build project and deploy generated files to gh-pages branch.

GitHub serves the gh-pages branch.

---

# 6. Vite Base Configuration

## For Vercel

No base needed:

```js
export default defineConfig({
  plugins: [react()]
})
```

---

## For GitHub Pages

Repository:

```text
https://username.github.io/my-project/
```

Use:

```js
export default defineConfig({
  plugins: [react()],
  base: "/my-project/"
})
```

Replace:

```text
my-project
```

with the repository name.

---

# 7. Common Mistakes

❌ Pushing node_modules

❌ Pushing dist to Vercel

❌ Forgetting .gitignore

❌ Wrong base path on GitHub Pages

❌ Deploying without testing build

---

# 8. Deployment Checklist

Before every deployment:

```bash
npm install
npm run build
npm run preview
git add .
git commit -m "Update"
git push
```

Check:

✅ Build succeeds

✅ Website works locally

✅ .gitignore exists

✅ node_modules not tracked

✅ dist not tracked (for Vercel)

✅ package-lock.json committed

---

# 9. What I Learned

GitHub = stores source code

Vercel = builds and hosts automatically

GitHub Pages = hosts static files only

node_modules should never be pushed

dist should not be pushed to Vercel

Always create .gitignore before first commit
