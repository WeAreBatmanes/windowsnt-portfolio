# Project Context: winnt-portfolio (High-Fidelity)

This project is a highly automated, high-fidelity fork of [matumenar84's win98-portfolio](https://github.com/matumenar84/win98-portfolio). It has been re-engineered into a **Windows NT Server 4.0** themed interactive resume.

## 🛠 Architecture & Visual Evolution

### 1. High-Fidelity UI Re-engineering
The visual layer has been upgraded from a simple pixelated look to a "High-Color" 24-bit aesthetic:
- **Typography**: Uses Tahoma/Verdana for crisp readability on high-DPI displays.
- **Borders**: 2px beveled borders with high-contrast shadows for a defined 3D look.
- **Gradients**: Title bars use the classic NT 4.0 / 2000 Pro gradient (Blue to Azure).

### 2. The Magic Setup (`setup.js`)
The core automation uses `pdf-parse` for data extraction from Europass PDFs:
- **Extraction**: Scans for "Work Experience", "Education", and "Skills".
- **Pattern Matching**: Accurate Regex for dates, links, and profile information.
- **Configuration**: Generates `src/config.js` as the single source of truth.

### 3. Structured UI Components
- **`ResumeDoc`**: Renders professional experience in a structured, technical document format.
- **`CertificationsWindow`**: Dedicated space for Credly/Professional badges.

### 4. Fully Static & Portable
- Assets are local; no external cloud storage dependencies.
- Deployable as a static site on any provider (Pages, Netlify, Vercel).

## 📁 Key Files
- `setup.js`: Automation engine.
- `src/App.jsx`: OS Simulation logic.
- `src/index.css`: High-fidelity visual styles.
- `public/cv.pdf`: Required input file.
