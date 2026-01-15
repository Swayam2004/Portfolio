# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and modern web technologies.

## Features

- ⚡ Built with Vite for fast development and optimized builds
- ⚛️ React 19 for modern component-based architecture
- 🎨 Modern, responsive design with CSS3
- 📱 Mobile-friendly and fully responsive
- 🚀 Smooth animations and transitions
- 📦 Component-based architecture
- 🎯 SEO-friendly

## Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal information and statistics
- **Projects** - Showcase of featured projects
- **Skills** - Technical skills organized by category
- **Contact** - Contact form and social links
- **Footer** - Copyright and attribution

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Node.js** - Runtime environment
- **npm** - Package manager
- **CSS3** - Styling
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Swayam2004/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## Customization

To customize the portfolio for your own use:

1. Update personal information in `/src/components/Hero.jsx`
2. Modify the about section in `/src/components/About.jsx`
3. Add your projects in `/src/components/Projects.jsx`
4. Update your skills in `/src/components/Skills.jsx`
5. Change contact information in `/src/components/Contact.jsx`
6. Update the title and meta tags in `/index.html`

## Project Structure

```
Portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx      # Main App component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## License

This project is open source and available for personal and commercial use.
