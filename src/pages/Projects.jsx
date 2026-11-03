import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { Search, X } from "lucide-react";

export default function Projects() {
	const [searchTerm, setSearchTerm] = useState("");

	const searchText = searchTerm.trim().toLowerCase();

	const filteredProjects = projects.filter((project) => {
		const searchableText = [
			project.title,
			project.category,
			project.summary,
			...project.technologies,
		].join(" ").toLowerCase();

		return searchableText.includes(searchText);
	});

	return (
		<section className='projects-page'>
			<h1>My Projects</h1>

			<p>
				Web applications I've worked on and the machine learning research
				I'm doing now.
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
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
					placeholder='Search projects...'
					aria-label='Search projects'
				/>

				{searchTerm && (
					<button
						type='button'
						className='portfolio-search-clear'
						onClick={() => setSearchTerm("")}
						aria-label='Clear search'>
						<X size={18} />
					</button>
				)}
			</div>

			<p role='status'>
				{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
			</p>

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
