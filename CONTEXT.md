# Project Context: winnt-portfolio

This project is a customized, highly automated fork of [matumenar84's win98-portfolio](https://github.com/matumenar84/win98-portfolio). It has been re-engineered into a **Windows NT Server** themed interactive resume with a focus on data portability and automation.

## 🛠 Architecture & Automation

### 1. The Magic Setup (`setup.js`)
The core of this project's portability is the automated setup script. It uses `pdf-parse` to perform "Pattern Matching" on a standard Europass PDF.
- **Extraction**: It identifies sections like "Work Experience", "Education", and "Skills" by scanning for specific headers in both English and Spanish.
- **Pattern Recognition**: It uses Regular Expressions to accurately capture dates, emails, and LinkedIn profiles, ensuring that links are correctly formatted and functional.
- **Configuration**: It automatically generates `src/config.js`, which serves as the single source of truth for the React application.

### 2. Structured UI Components
Unlike the original project which used hardcoded data or simple Markdown, this version uses high-fidelity, structured React components:
- **`ResumeDoc`**: A complex UI component that renders professional experience, skills, and education in a format reminiscent of Windows NT era technical documents.
- **`CertificationsWindow`**: A dedicated space for professional badges and credentials.

### 3. Fully Static & Dependency-Free
- All Cloudflare R2/Pages dependencies have been removed.
- Assets (PDFs, icons) are served locally from the `public/` and `src/assets/` directories.
- The project is designed to be hosted anywhere as a static site.

## 📁 Key Files
- `setup.js`: The automation engine.
- `src/config.js`: The generated data file (personalized via `npm run setup`).
- `src/App.jsx`: The main OS simulation and UI logic.
- `public/cv.pdf`: The required input file for the setup script.

## 🚀 Future Roadmap
- Integration of more advanced PDF parsing using structured metadata (XML).
- Support for more CV formats beyond Europass.
- Expanded "Server Administration" tools in the MS-DOS prompt simulation.
