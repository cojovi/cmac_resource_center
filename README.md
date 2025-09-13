# Welcome to the CMAC Resource Center Project 🎉
_Coded (and caffeinated) by **cojovi** and **alinacode**._

---

## Project Info
**Repo URL:** `https://github.com/cojovi/cmac_resource_center`  
**Live URL (optional):** `team.cmacroofing.com`

---

## How Can I Edit This Code?

### 🖥️ Use Your Preferred IDE
You know the drill: clone → code → push.  
Requires Node.js & npm — easiest path is nvm:  
https://github.com/nvm-sh/nvm#installing-and-updating

**Setup steps:**
    
    # 1) Clone the repository
    git clone <YOUR_GIT_URL>
    
    # 2) Enter the project directory
    cd <YOUR_PROJECT_NAME>
    
    # 3) Install dependencies
    npm i
    
    # 4) Start the dev server (hot reload included)
    npm run dev

### ✏️ Edit Directly on GitHub
- Open the file you want.
- Click the pencil icon.
- Make your edits.
- Commit like a responsible adult.

### 💻 GitHub Codespaces
- Click **Code** → **Codespaces** → **New codespace**.
- Edit in-browser, then commit & push. Magic without the setup pain.

---

## What’s Under the Hood?
- **Vite** ⚡
- **TypeScript** 📘
- **React** ⚛️
- **shadcn-ui** ✨
- **Tailwind CSS** 🌊

---

## Deployment Decision 

### Vercel (Also Fancy)
- **New Project** → Import your repo
- Framework preset: **Vite**
- Build command: `npm run build`
- Output: `dist/`
- Deploy. Brag.

### Manual (If You Like Control)
    
    # Build for production
    npm run build
    
    # Serve the dist/ folder with any static host or container

---

## Custom Domains
Yes, obviously. Point your DNS and go:
- team.cmacroofing.com

---

## Troubleshooting (Because Computers)
- Node too old? Use `nvm install --lts && nvm use --lts`.
- Blank page in prod? Check your `base` in `vite.config.ts` and your host’s output dir.
- Styles weird? Confirm Tailwind is included and `content` paths are correct.

---

Made with 🧠 + ☕ by **cojovi** and **alinacode**. If it breaks, we were never here.
