# Portfolio Website

A modern, responsive portfolio website built with Vue 3 and Vite. This project showcases personal, school, and work projects with advanced filtering capabilities.

## Features

- **LinkedIn-Style Home Page**: Professional profile page with skills, statistics, and recent projects
- **Interactive Projects Gallery**: Display all projects with filtering options
- **Category Filtering**: Filter projects by Personal, School, or Work categories
- **Skill-Based Filtering**: Filter projects by technologies/skills (PHP, JavaScript, Vue, etc.)
- **Project Details Modal**: View detailed information about each project
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Gradient designs and smooth animations

## Technologies Used

- Vue 3 (Composition API)
- Vite (Build tool)
- Modern CSS with CSS Grid and Flexbox
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lake3205/portofolio.git
cd portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portofolio/
├── src/
│   ├── components/
│   │   ├── Home.vue          # Home page with profile
│   │   └── Projects.vue      # Projects page with filtering
│   ├── data/
│   │   └── projects.js       # Project data
│   ├── App.vue               # Root component
│   ├── main.js               # Application entry point
│   └── style.css             # Global styles
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Customization

### Adding Your Own Projects

Edit the `src/data/projects.js` file to add or modify projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  category: "personal", // or "school" or "work"
  tags: ["PHP", "JavaScript", "MySQL"],
  description: "Short description of your project",
  details: "Detailed description with more information"
}
```

### Updating Profile Information

Edit the `src/components/Home.vue` file to update:
- Your name
- Profile headline
- Location
- About section
- Skills list

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/ff7104ac-13db-4e50-817f-4361c0c6794a)

### Projects Page
![Projects Page](https://github.com/user-attachments/assets/47ff9b9b-460e-440a-9f7a-5ef91ac0fab2)

### Filtered Projects
![Filtered Projects](https://github.com/user-attachments/assets/ebafbfb2-94ff-4f36-9cf9-393c18ea8b57)

### Project Details Modal
![Project Modal](https://github.com/user-attachments/assets/5107a6bd-84d7-423d-8692-2e83a44e4d69)

## License

This project is open source and available for educational purposes.
