import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, Globe2 } from "lucide-react";
import { projectArtwork } from "../data/projectArtwork.js";


function ProjectVisual({ project }) {
	const visual = projectArtwork[project.slug] ?? {
		icon: Globe2,
		label: "SOFTWARE PROJECT",
		symbol: "DEV",
	};

	const Icon = visual.icon;

	return (
		<div
			className={`project-visual project-visual--${project.accent ?? "gold"}`}
			aria-hidden='true'>
			<div className='project-visual-grid' />

			<div className='project-visual-orbit project-visual-orbit--one' />
			<div className='project-visual-orbit project-visual-orbit--two' />

			<div className='project-visual-center'>
				<span className='project-visual-symbol'>{visual.symbol}</span>
				<Icon
					size={26}
					strokeWidth={1.5}
				/>
			</div>

			<span className='project-visual-label'>{visual.label}</span>

			<div className='project-visual-decoration project-visual-decoration--one' />
			<div className='project-visual-decoration project-visual-decoration--two' />
		</div>
	);
}

export default function ProjectCard({ project }) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.article
			className='project-card'
			initial={reduceMotion ? false : { opacity: 0, y: 35 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: "easeOut" }}>
			<ProjectVisual project={project} />

			<div className='project-card-content'>
				<div className='project-card-meta'>
					<span className='project-category'>{project.category}</span>
					<span className='project-year'>{project.year}</span>
				</div>

				<h2>{project.title}</h2>

				<p className='project-card-summary'>{project.summary}</p>

				{project.highlights?.length > 0 && (
					<div className='project-highlights'>
						{project.highlights.slice(0, 2).map((highlight) => (
							<span key={highlight}>{highlight}</span>
						))}
					</div>
				)}

				<div className='technologies'>
					{project.technologies.slice(0, 4).map((technology) => (
						<span
							key={technology}
							className='tech-badge'>
							{technology}
						</span>
					))}
				</div>

				<div className='project-card-actions'>
					<Link
						to={`/projects/${project.slug}`}
						className='project-link'>
						Read more <ArrowUpRight size={18} />
					</Link>

					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='project-live-link'>
							Visit site <ExternalLink size={16} />
						</a>
					)}
				</div>
			</div>
		</motion.article>
	);
}
