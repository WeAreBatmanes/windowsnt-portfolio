# Windows NT Server Interactive Portfolio

A retro Windows NT Server inspired interactive resume built with React. This is a highly automated, portable portfolio designed for IT professionals and systems administrators.

## 🚀 Magic Setup (The 2-Step Deployment)

This project is designed to be fully portable. You don't need to edit complex JSON files manually.

1.  **Add your CV**: Copy your **Europass CV (PDF)** to `public/cv.pdf`.
2.  **Run Setup**:
    ```bash
    npm install
    npm run setup
    ```

**What happens next?** Our "Magic Setup" script (powered by `pdf-parse`) will automatically scan your PDF, extract your experience, skills, and certifications, and configure the entire portfolio for you.

## Credits

Original project by **Matias Menarguez**: [win98-portfolio](https://github.com/matumenar84/win98-portfolio)

## Features

- **Windows NT Server Interface**: A professional, retro server aesthetic.
- **Universal Europass Parser**: Automated data extraction from standard Europass PDFs.
- **Structured Resume Window**: A high-fidelity "Resume.doc" experience based on your actual data.
- **Certification Badges**: Automated extraction and display of your professional credentials.
- **Fully Static**: Zero external cloud dependencies (no Cloudflare R2 required).
- **Interactive Apps**: Play Solitaire or use the Command Prompt while browsing the resume.

## Local Development

```bash
npm run dev
```

## Customization

After running `npm run setup`, you can fine-tune your details in `src/config.js` (e.g., adding your nickname or specific Credly links).
