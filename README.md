# Pelumi Oluwategbe's portfolio

A React portfolio with work experience, searchable projects, project write-ups, and a contact form that opens an email draft. Uses React Router for navigation, Motion for animations, and plain CSS for styling.

## Local development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm run build
npm run preview
```

## Updating content

- `src/data/projects.js`: project descriptions, technologies, and links.
- `src/data/projectArtwork.js`: icons and labels shared by project cards and detail pages.
- `src/data/experience.js`: work history, education, and skills.
- `src/pages/Experience.jsx`: experience page layout.
- `src/components/Hero.jsx`: homepage introduction.
- `src/pages/Contact.jsx`: contact details and email draft form.

Styles live in `src/index.css` and the page stylesheets imported by `src/main.jsx`. Navigation uses `HashRouter` so routes work on static hosting.
