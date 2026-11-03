import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { Search, X } from "lucide-react";

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

			<div className='portfolio-search'>
				<Search
					size={19}
					className='portfolio-search-icon'
					aria-hidden='true'
				/>

				<input
					id='project-search'
					type='search'
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder='Search projects...'
					aria-label='Search projects'
				/>

				{query && (
					<button
						type='button'
						className='portfolio-search-clear'
						onClick={() => setQuery("")}
						aria-label='Clear search'>
						<X size={18} />
					</button>
				)}
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
