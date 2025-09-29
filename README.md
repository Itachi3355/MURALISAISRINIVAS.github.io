# Creative Developer Portfolio Dashboard

This project is a creative developer portfolio designed as a dashboard/analytics interface. It showcases full-stack software engineering and data analytics skills through an interactive and engaging layout.

## Features

- **Homepage**: A unique layout that introduces the portfolio.
- **About Me Section**: A brief introduction and background.
- **Projects Section**: Displays projects in an interactive format with hover previews, descriptions, and links to GitHub and live demos.
- **Work Experience Section**: Highlights professional experience.
- **Skills Section**: Lists technical skills and proficiencies.
- **Contact Section**: Provides a way for visitors to get in touch.
- **Featured Project**: A highlighted project at the top with a demo video or image.
- **Dark Theme**: The entire interface is styled with a dark theme for a modern look.
- **Smooth Animations**: Utilizes Framer Motion for smooth transitions and animations.
- **Easter Eggs**: Interactive elements such as a command terminal and hidden projects.
- **Resume Download**: An option to download the resume directly from the portfolio.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Optional Node.js or Flask for dynamic data fetching
- **Deployment**: Vercel or Render

## Project Structure

The project is organized into the following structure:

```
creative-portfolio-dashboard
├── public
│   └── index.html
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data
│   │   └── projects.json
│   ├── components
│   │   ├── layout
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   ├── ui
│   │   │   ├── Card.jsx
│   │   │   ├── IconButton.jsx
│   │   │   └── Modal.jsx
│   │   ├── projects
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── FeaturedProject.jsx
│   │   │   └── ProjectGrid.jsx
│   │   ├── analytics
│   │   │   ├── KPIWidget.jsx
│   │   │   └── ChartWindow.jsx
│   │   └── interactive
│   │       ├── CommandTerminal.jsx
│   │       └── MapView.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── hooks
│   │   ├── useProjects.js
│   │   └── useTheme.js
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   └── tailwind.css
│   ├── animations
│   │   └── framerVariants.js
│   ├── utils
│   │   └── helpers.js
│   └── types
│       └── index.d.ts
├── server
│   ├── node (optional)
│   │   ├── package.json
│   │   └── src
│   │       ├── index.js
│   │       └── routes
│   │           └── projects.js
│   └── flask (optional)
│       ├── requirements.txt
│       └── app
│           ├── __init__.py
│           └── routes.py
├── .gitignore
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
└── README.md
```

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm run dev`.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.