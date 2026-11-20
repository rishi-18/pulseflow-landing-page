# ⚡ PulseFlow — Intelligent Workflow Automation Landing Page

PulseFlow is a modern, responsive product landing page built using semantic HTML5, CSS3 with CSS variables and flexbox/grid architectures, and vanilla JavaScript.

This project was built to demonstrate practical, production-level version control using Git and GitHub, specifically focusing on branching, merging, intentional merge conflict generation, manual conflict resolution, and distributed collaboration workflows.

---

## 🚀 Project Overview

- **Project Name:** PulseFlow Landing Page
- **Tech Stack:** HTML5, CSS3, Modern JavaScript (ES6+)
- **Responsive Design:** Optimized for mobile, tablet, and widescreen desktop
- **Version Control:** Git & GitHub

---

## 🌿 Git Version Control & Merge Conflict Demonstration

This repository contains a full hands-on demonstration of resolving an intentional merge conflict between two diverging feature branches modifying the Hero section in `index.html`:

1. **`main`**: Production-ready baseline code.
2. **`feature/headline-modern`**: Product team's revision emphasizing technical workflow automation and developer onboarding.
3. **`feature/headline-marketing`**: Marketing team's revision emphasizing fast conversion and zero-friction signup.

### The Conflict
Both feature branches modified lines 36–39 of `index.html` (the hero title, subtitle, and primary call-to-action button). 

When `feature/headline-modern` was merged into `main`, the merge succeeded cleanly. Subsequently, attempting to merge `feature/headline-marketing` into `main` triggered a 3-way merge conflict (`CONFLICT (content): Merge conflict in index.html`).

### Manual Resolution
The conflict was inspected via `git status` and `git diff`, and resolved by synthesizing both copies into a unified, high-converting hero section:
- **Consensus Headline:** `Supercharge your data workflows with intelligent automation`
- **Consensus Subtitle:** `Connect APIs, sync distributed databases, and eliminate pipeline latency with zero-maintenance infrastructure.`
- **Consensus CTA:** `Start Free Trial — No Credit Card Required`

---

## 🛠️ Step-by-Step Git Commands Used

```bash
# 1. Initialize repository and set default branch
git init -b main
git config user.name "Rishi"
git config user.email "rishi@example.com"

# 2. Stage and commit baseline files
git add .
git commit -m "Initial commit: PulseFlow landing page MVP structure"

# 3. Create and switch to first feature branch
git checkout -b feature/headline-modern
# (Edited hero section in index.html)
git add index.html
git commit -m "feat(hero): modernize hero headline and primary CTA for technical audience"

# 4. Switch back to main and create second feature branch
git checkout main
git checkout -b feature/headline-marketing
# (Edited same hero section in index.html with marketing copy)
git add index.html
git commit -m "feat(marketing): update hero copy with conversion-optimized value proposition"

# 5. Merge first branch into main (clean merge)
git checkout main
git merge feature/headline-modern -m "Merge branch 'feature/headline-modern' into main"

# 6. Attempt to merge second branch (triggers merge conflict)
git merge feature/headline-marketing
# Auto-merging index.html
# CONFLICT (content): Merge conflict in index.html
# Automatic merge failed; fix conflicts and then commit the result.

# 7. Check status and diff
git status
git diff

# 8. Manually resolve conflict in index.html, stage, and commit
git add index.html
git commit -m "Merge branch 'feature/headline-marketing' into main: resolve hero copy conflict"

# 9. Verify history
git log --graph --oneline --all
```

---

## 🌐 Connecting to GitHub Remote

To push this repository to GitHub:

```bash
# Link local repository to your remote GitHub repository
git remote add origin https://github.com/<YOUR-USERNAME>/pulseflow-landing-page.git

# Push main branch
git push -u origin main

# Push feature branches for audit/grading evidence
git push origin feature/headline-modern
git push origin feature/headline-marketing
```

---

## 📄 License
MIT License © 2026 PulseFlow Technologies Inc.
