# Windows NT Server Interactive Portfolio (High-Fidelity)

A professional, high-fidelity Windows NT Server 4.0 inspired interactive resume built with React. This is a highly automated, portable portfolio designed for IT professionals and systems administrators who appreciate the classic "server room" aesthetic.

## 🚀 Quick Start (Portable Setup)

This project is designed to be fully portable. No manual editing of complex JSON/JS files is required.

### 1. Clone & Install
```bash
git clone https://github.com/WeAreBatmanes/windowsnt-portfolio.git
cd windowsnt-portfolio
npm install
```

### 2. Add your CV
Copy your **Europass CV (PDF)** to `public/cv.pdf`. 
*(Note: Your PDF is ignored by git to keep your data private)*.

### 3. Run Magic Setup
```bash
npm run setup
```
This script (powered by `pdf-parse`) will automatically scan your PDF, extract your experience, skills, and certifications, and configure the entire portfolio for you by generating `src/config.js`.

### 4. Preview
```bash
npm run dev
```

## ☁️ Deployment (Cloudflare Pages)

This portfolio is built with Vite and is ready for **Cloudflare Pages**.

### Recommended Settings:
1. **Framework preset**: `Vite`
2. **Build command**: `npm run setup && npm run build`
3. **Build output directory**: `dist`
4. **Environment Variables**: Make sure to include your CV as `public/cv.pdf` if you are deploying from a private repo, or ensure the setup script runs during the build.

## 📁 Project Structure
- `setup.js`: The automation engine that parses your PDF.
- `src/config.js`: The generated data file (the "Source of Truth").
- `src/App.jsx`: The Windows NT OS simulation and UI logic.
- `public/cv.pdf`: Your input file for the setup script.

## Credits

This project is a customized, highly automated fork of [matumenar84's win98-portfolio](https://github.com/matumenar84/win98-portfolio), re-engineered for a high-fidelity **Windows NT Server 4.0** aesthetic.
