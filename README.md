# Pelumi Oluwategbe — Personal Portfolio

A responsive personal portfolio built with React and Vite to showcase my software engineering experience, education, technical skills, and selected projects.

The website features a modern interface, animated transitions, interactive project filtering, detailed project case studies, and persistent dark/light themes.

## Live Website

Portfolio: https://pelumitegbe.github.io/portfolio-react/

GitHub Repository: https://github.com/pelumitegbe/portfolio-react

## Technologies Used

- React: Component-based user interfaces
- Vite: Development server and production build
- React Router: Client-side routing
- JavaScript (JSX): Application logic and components
- CSS: Responsive layouts and custom styling
- Motion for React: Animations and page transitions
- Lucide React: Interface icons
- React Icons: Social media and brand icons
- Local Storage: Theme preference persistence

## Features

### 1. Home Page

- Animated introduction and professional summary
- Rotating professional roles
- Links to projects and contact information
- Professional highlights and achievements
- Interactive CSS-based illustration

### 2. Experience Page

- Educational background
- Professional work experience
- Technical skills organized by category
- Responsive experience cards and animations

### 3. Projects Page

- Six selected software engineering and research projects
- Search functionality using React's `useState`
- Dynamic filtering by project name, category, description, and technologies
- Reusable project cards
- Responsive project layouts

### 4. Project Details

Each project has a dedicated case study containing:

- Project overview
- Problem or challenge
- My role and contributions
- Technical approach
- Results and outcomes
- Technologies used

Dynamic routes are implemented using React Router and `useParams`.

### 5. Contact Page

- Contact information and professional links
- Controlled React form inputs
- Native form validation
- Email draft generation using `mailto:`

The contact form opens the visitor's email application with a prefilled message. It does not send messages to a backend server.

### 6. Dark and Light Themes

The website supports two visual themes.

Theme preferences are managed using:

- React `useState`
- React `useEffect`
- Browser `localStorage`

The selected theme persists after refreshing the page.

### 7. Responsive Design and Accessibility

- Responsive layouts for desktop, tablet, and mobile
- Mobile navigation menu
- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Reduced-motion support
- Accessible form labels
- Custom 404 page

## Application Routes

| Route             | Description                       |
| ----------------- | --------------------------------- |
| `/`               | Home page                         |
| `/experience`     | Education, skills, and experience |
| `/projects`       | Project gallery with search       |
| `/projects/:slug` | Individual project case study     |
| `/contact`        | Contact information and form      |
| `*`               | Page Not Found                    |

The application uses `HashRouter` to support navigation when deployed on GitHub Pages.

## Project Structure

```text
portfolio-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── Layout.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── projectArtwork.js
│   │   └── experience.js
│   ├── pages/
│   │   ├── BasicPages.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── hero.css
│   ├── navigation.css
│   ├── experience.css
│   ├── projects.css
│   └── contact.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Local Development

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/pelumitegbe/portfolio-react.git
```

### 2. Navigate to the project directory

```bash
cd portfolio-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Testing and Verification

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The application should be tested for:

- Navigation between all routes
- Project search and filtering
- Project detail pages
- Invalid routes and project slugs
- Theme switching and persistence
- Contact form validation
- Mobile responsiveness
- Keyboard accessibility

## Deployment

The portfolio is deployed using GitHub Pages.

The Vite configuration includes:

```javascript
export default defineConfig({
	plugins: [react()],
	base: "/portfolio-react/",
});
```

GitHub Actions handles building and deploying the application.

The website is available at:

https://pelumitegbe.github.io/portfolio-react/

## Updating Portfolio Content

Project information can be updated in:

`src/data/projects.js`

Experience, education, and skills can be updated in:

`src/data/experience.js`

The homepage introduction is maintained in:

`src/components/Hero.jsx`

Global styling and theme variables are maintained in:

`src/index.css`

## Attribution

This portfolio was developed using React, Vite, React Router, Motion for React, Lucide React, and React Icons.

Project information is based on my professional and academic experience.

Decorative project illustrations are implemented using CSS.

## Author

**Oluwategbe Pelumi Ayomikun**

M.S. Computer Science - Saint Louis University

Software Engineer | Full-Stack Developer

GitHub: https://github.com/pelumitegbe

LinkedIn: https://www.linkedin.com/in/pelumitegbe/

Email: pelumitegbe@gmail.com
