import { Link } from "react-router";

export default function ProjectCard({ project }) {
	return (
		<article className='project-card'>
			<div className='project-category'>{project.category}</div>

			<h2>{project.title}</h2>

			<p>{project.summary}</p>

			<div className='technologies'>
				{project.technologies.map((technology) => (
					<span
						key={technology}
						className='tech-badge'>
						{technology}
					</span>
				))}
			</div>

			<Link
				to={`/projects/${project.slug}`}
				className='project-link'>
				View Project →
			</Link>
		</article>
	);
}
