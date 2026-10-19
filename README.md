# 🚀 Saurabh Ajit Sangve — Futuristic Digital Resume & Developer Portfolio

An extraordinary, high-performance, futuristic digital resume and personal portfolio engineered for **Saurabh Ajit Sangve** (Software Developer specializing in Java, Spring Boot, Microservices, and React.js).

Designed to be hosted effortlessly on **GitHub Pages**, accessible by recruiters, engineering managers, and developers worldwide.

---

## ✨ Extraordinary Features & Capabilities

- **Interactive 3D Cyber Constellation**: Procedural WebGL/Canvas particle network that reacts to cursor proximity and physics at 60 FPS.
- **Dedicated Bravo Awards & Honors Showcase ("Hall of Fame")**:
  - Highlights official **Bravo Excellence**, **Bravo Spot**, and **Bravo Team Collaboration** recognitions.
  - Interactive LinkedIn post citations, simulated peer reactions, verified badges, and celebratory confetti effects.
- **Embedded Developer CLI Terminal (`saurabh@dev:~$`)**:
  - Full keyboard-interactive terminal emulator accessible via the `~` key or HUD button.
  - Try commands: `help`, `skills`, `awards`, `bravo`, `projects`, `experience`, `education`, `contact`, `matrix`, `download-cv`.
- **Procedural High-Tech Audio Synthesizer**:
  - Sci-fi feedback clicks and chimes using the **Web Audio API** (zero heavy audio files required).
  - Includes a global mute/unmute toggle persisted in `localStorage`.
- **ATS-Friendly 1-Click Print & PDF Export**:
  - Click **"Print CV"** or press `Ctrl + P` to instantly generate an ATS-optimized 2-page executive resume ready for corporate job applications.
- **Dynamic Text Scrambler**:
  - Matrix-style decoding animation cycling through core developer specialties.
- **1-Click Copy Coordinates**:
  - Click-to-copy email (`saurabhsangve05@gmail.com`) and phone (`+91 7057323228`) with animated toast feedback.

---

## 📁 Project Architecture

```text
Antigravity/
├── index.html                   # Master entrypoint for GitHub Pages
├── css/
│   ├── style.css                # Futuristic Cyberpunk design system & HUD cards
│   └── print.css                # ATS-compliant print and PDF export stylesheet
├── js/
│   ├── resume-data.js           # Central data source (Skills, Projects, Bravo Awards, Education)
│   ├── sound-effects.js         # Procedural Web Audio API sound generator
│   ├── canvas-bg.js             # 60fps particle constellation canvas animation
│   ├── terminal.js              # Interactive Developer CLI terminal emulator
│   └── main.js                  # Dynamic UI rendering, modals, and confetti
├── assets/
│   └── images/
│       └── saurabh.jpg          # Your professional photo
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
└── README.md                    # Setup and customization guide
```

---

## 🌐 How to Host on GitHub Pages (Step-by-Step)

### Option 1: Using Git via Terminal / Command Prompt

1. **Open PowerShell or Terminal** in this directory:
   ```bash
   cd "e:\Coding Work Space\Antigravity"
   ```

2. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of futuristic digital resume"
   ```

3. **Create a new repository on GitHub**:
   - Go to [GitHub.com/new](https://github.com/new)
   - Name the repository `resume` or `<your-username>.github.io`
   - Keep it **Public** (required for free GitHub Pages)

4. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub → **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **GitHub Actions** (it will automatically use the included `.github/workflows/deploy.yml` workflow).
   - *Alternatively*: Under **Source**, choose **Deploy from a branch** → select branch `main` and folder `/ (root)` → click **Save**.
   - Within 60 seconds, your site is live at:
     ```text
     https://<your-username>.github.io/<repo-name>/
     ```

---

## 🛠️ How to Customize Your Resume & Awards

All resume content is separated from the UI logic. To update your experience, projects, or add new LinkedIn Bravo awards:

Open `js/resume-data.js` and edit the relevant section:
- **`RESUME_DATA.personal`**: Update your contact info, location, or bio.
- **`RESUME_DATA.awards`**: Add additional Bravo awards, LinkedIn citations, likes/comments counters.
- **`RESUME_DATA.skills`**: Adjust skill proficiency percentages and tags.
- **`RESUME_DATA.projects`**: Add new repositories, live URLs, or technical achievements.

---

## 💻 Local Preview

You can preview the digital resume locally right away:
- Double-click `index.html` to open it in Chrome, Edge, or Firefox.
- Or run a lightweight local server:
  ```bash
  npx serve .
  # or
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000` in your browser.
