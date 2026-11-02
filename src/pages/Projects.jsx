import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
	const [query, setQuery] = useState("");

	const normalizedQuery = query.trim().toLowerCase();

	const filteredProjects = projects.filter((project) => {
		const searchableText = `
      ${project.title}
      ${project.category}
      ${project.summary}
      ${project.technologies.join(" ")}
    `.toLowerCase();

		return searchableText.includes(normalizedQuery);
	});

	return (
		<section className='projects-page'>
			<h1>My Projects</h1>

			<p>
				A selection of projects showcasing my experience in software
				engineering, web development, and machine learning.
			</p>

			<div className='filter-container'>
				<label htmlFor='project-search'>Search Projects</label>

				<input
					id='project-search'
					type='search'
					placeholder='Search by name, category, or technology...'
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
			</div>

			<p role='status'>{filteredProjects.length} project(s) found</p>

			{filteredProjects.length > 0 ? (
				<div className='projects-grid'>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.slug}
							project={project}
						/>
					))}
				</div>
			) : (
				<div className='no-results'>
					<h2>No projects found</h2>
					<p>Try searching for a different keyword.</p>
				</div>
			)}
		</section>
	);
}
