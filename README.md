# Daily Inspiration - GitHub Pages Deployment Guide

This project has been converted to a static site compatible with GitHub Pages deployment.

## 🚀 Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

### Deployment to GitHub Pages

#### Option 1: Automatic Deployment (Recommended)

1. Push your code to the `main` branch on GitHub
2. The GitHub Actions workflow will automatically deploy your site to GitHub Pages
3. Your site will be available at: `https://<your-username>.github.io/<your-repo-name>/`

#### Option 2: Manual Deployment

1. Push your code to the `main` branch
2. Go to your repository on GitHub
3. Navigate to **Settings** → **Pages**
4. Under **Build and deployment** → **Source**, select **GitHub Actions**
5. The deployment will start automatically

## 📁 Project Structure

```
.
├── public/
│   └── index.html          # Main static HTML file
├── yes.json                # YES category sentences
├── no.json                 # NO category sentences
├── package.json            # Project configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── README.md               # This file
```

## 🔧 Features

- **Static Site**: No server required for deployment
- **Client-Side Logic**: JavaScript handles sentence randomization
- **Responsive Design**: Works on all devices
- **Theme Switching**: YES (green/teal) and NO (red/rose) themes
- **Glassmorphism UI**: Modern, beautiful interface

## 🎨 Customization

### Add New Sentences

Edit `yes.json` or `no.json` to add more sentences:

```json
[
  "Your new sentence here",
  "Another inspiring sentence"
]
```

### Custom Domain

To use a custom domain:

1. Create a `CNAME` file in the root directory
2. Add your domain name:
   ```
   yourdomain.com
   ```
3. Update your DNS settings with the following records:
   - Type: `CNAME`
   - Name: `@` (or `www` if you want www.yourdomain.com)
   - Value: `yourusername.github.io`

## 📝 Notes

- The `server.js` and `views/` directory are no longer needed for GitHub Pages deployment
- `yes.json` and `no.json` must remain in the root directory for the static site to work
- The static version uses client-side JavaScript to fetch and display random sentences

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
