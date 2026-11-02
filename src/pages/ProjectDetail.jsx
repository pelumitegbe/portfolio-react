import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
	const { slug } = useParams();

	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return (
			<section className='project-detail'>
				<h1>Project Not Found</h1>

				<p>The project you're looking for doesn't exist.</p>

				<Link to='/projects'>Back to Projects</Link>
			</section>
		);
	}

	return (
		<article className='project-detail'>
			<Link
				to='/projects'
				className='back-link'>
				← Back to Projects
			</Link>

			<p className='project-category'>{project.category}</p>

			<h1>{project.title}</h1>

			<div className='technologies'>
				{project.technologies.map((technology) => (
					<span
						key={technology}
						className='tech-badge'>
						{technology}
					</span>
				))}
			</div>

			<section>
				<h2>Problem</h2>
				<p>{project.problem}</p>
			</section>

			<section>
				<h2>My Contribution</h2>
				<p>{project.role}</p>
			</section>

			<section>
				<h2>Implementation</h2>
				<p>{project.approach}</p>
			</section>

			<section>
				<h2>Results & Lessons Learned</h2>
				<p>{project.outcome}</p>
			</section>
		</article>
	);
}
