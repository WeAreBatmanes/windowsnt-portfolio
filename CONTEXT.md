# Project Context: winnt-portfolio (High-Fidelity & Portable)

This project is a highly automated, high-fidelity fork of [matumenar84's win98-portfolio](https://github.com/matumenar84/win98-portfolio). It has been re-engineered into a **Windows NT Server 4.0** themed interactive resume designed for maximum portability and ease of use.

## 🛠 Architecture & Visual Evolution

### 1. High-Fidelity UI Re-engineering
The visual layer has been upgraded from a simple pixelated look to a "High-Color" 24-bit aesthetic:
- **Typography**: Uses Tahoma/Verdana for crisp readability on modern high-DPI displays, moving away from bitmapped fonts for a more professional look.
- **Borders**: 2px beveled borders with high-contrast shadows for a defined 3D look.
- **Gradients**: Active title bars use the classic NT 4.0 / 2000 Pro gradient (Blue to Azure), while inactive windows shift to a flat gray.
- **Authentic Branding**: The Start button features the original 4-color Windows logo, and the Start menu includes the classic vertical "Windows NT Server" banner.

### 2. Automation Engine: The Magic Setup (`setup.js`)
The core of this project's portability is the automated setup script. It uses `pdf-parse` to perform pattern matching on a standard Europass PDF.
- **Data Extraction**: Automatically identifies sections like "Work Experience", "Education", and "Skills".
- **Regex Logic**: Accurately captures dates, emails, and LinkedIn profiles.
- **Single Source of Truth**: Generates `src/config.js` dynamically, meaning the user never has to edit the React code to update their profile.

### 3. Structured UI Components
- **`ResumeDoc`**: A high-fidelity React component that renders professional experience in a format reminiscent of Windows NT era technical documents.
- **`CertificationsWindow`**: A dedicated UI space for professional badges and credentials.
- **`BootScreen`**: An authentic recreation of the Windows NT Server 4.0 boot sequence.

### 4. Portability & Privacy
- **Template State**: The repository is maintained in a clean, data-free state.
- **Private by Default**: `public/cv.pdf` is included in `.gitignore` to ensure users don't accidentally push their personal documents to public repositories.
- **Fully Static**: Zero external cloud dependencies; assets are served locally.

## 📁 Key Files
- `setup.js`: The automation engine.
- `src/config.js`: The generated configuration file.
- `src/App.jsx`: The main OS simulation and UI logic.
- `src/index.css`: High-fidelity visual styles and scrollbar overrides.
- `CHANGELOG.md`: Detailed version history and feature roadmap.

## 🚀 Deployment Goal
Optimized for **Cloudflare Pages**, utilizing a build command that runs the setup engine (`npm run setup`) before compiling the final static assets.
