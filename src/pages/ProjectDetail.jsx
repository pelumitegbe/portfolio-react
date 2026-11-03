import { useRef } from "react";
import { Link, useParams } from "react-router";
import Reveal from "../components/Reveal.jsx";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	ExternalLink,
	Globe2,
	CheckCircle2,
} from "lucide-react";

import { projectArtwork } from "../data/projectArtwork.js";
import { projects } from "../data/projects.js";


function ProjectHeroVisual({ project }) {
	const visual = projectArtwork[project.slug] ?? {
		icon: Globe2,
		symbol: "DEV",
		label: "SOFTWARE PROJECT",
	};

	const Icon = visual.icon;

	return (
		<div
			className={`case-study-visual project-visual--${project.accent ?? "gold"}`}
			aria-hidden='true'>
			<div className='case-study-visual-grid' />

			<div className='case-study-orbit case-study-orbit-one' />
			<div className='case-study-orbit case-study-orbit-two' />
			<div className='case-study-orbit case-study-orbit-three' />

			<div className='case-study-visual-center'>
				<span>{visual.symbol}</span>
				<Icon
					size={38}
					strokeWidth={1.5}
				/>
			</div>

			<span className='case-study-visual-label'>{visual.label}</span>

			<span className='case-study-visual-index'>PROJECT / {project.year}</span>
		</div>
	);
}

export default function ProjectDetail() {
	const { slug } = useParams();
	const detailsRef = useRef(null);

	const projectIndex = projects.findIndex((project) => project.slug === slug);

	if (projectIndex === -1) {
		return (
			<section className='case-study-not-found'>
				<span className='case-study-eyebrow'>PROJECT NOT FOUND</span>

				<h1>Nothing here.</h1>

				<p>The project you're looking for doesn't exist.</p>

				<Link
					to='/projects'
					className='case-study-back'>
					<ArrowLeft size={18} />
					Back to projects
				</Link>
			</section>
		);
	}

	const project = projects[projectIndex];
	const nextProject = projects[(projectIndex + 1) % projects.length];

	return (
		<article className='case-study-page'>
			<Link
				to='/projects'
				className='case-study-back'>
				<ArrowLeft size={18} />
				Back to projects
			</Link>

			<Reveal className='case-study-intro'>
				<div className='case-study-meta'>
					<span className='case-study-eyebrow'>{project.category}</span>

					<span className='case-study-year'>{project.year}</span>
				</div>

				<h1>{project.title}</h1>

				<p className='case-study-summary'>{project.summary}</p>

				<div className='case-study-intro-actions'>
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='case-study-primary-button'>
							Visit project
							<ExternalLink size={18} />
						</a>
					)}

					<button
						type='button'
						onClick={() => detailsRef.current?.scrollIntoView({ block: "start" })}
						className='case-study-text-link'>
						Project details
						<ArrowUpRight size={18} />
					</button>
				</div>
			</Reveal>

			<Reveal>
				<ProjectHeroVisual project={project} />
			</Reveal>

			<div
				id='case-study-content'
				ref={detailsRef}
				className='case-study-content'>
				<Reveal className='case-study-overview'>
					<span className='case-study-section-number'>01 / OVERVIEW</span>

					<h2>Overview</h2>

					<p>{project.summary}</p>

					<div className='case-study-tech-list'>
						{project.technologies.map((technology) => (
							<span key={technology}>{technology}</span>
						))}
					</div>
				</Reveal>

				<div className='case-study-story'>
					<Reveal className='case-study-story-item'>
						<div className='case-study-story-heading'>
							<span>02 / THE CHALLENGE</span>
							<h2>The problem.</h2>
						</div>

						<p>{project.problem}</p>
					</Reveal>

					<Reveal className='case-study-story-item'>
						<div className='case-study-story-heading'>
							<span>03 / MY CONTRIBUTION</span>
							<h2>My role.</h2>
						</div>

						<p>{project.role}</p>
					</Reveal>

					<Reveal className='case-study-story-item'>
						<div className='case-study-story-heading'>
							<span>04 / IMPLEMENTATION</span>
							<h2>The approach.</h2>
						</div>

						<p>{project.approach}</p>
					</Reveal>
				</div>

				<Reveal className='case-study-results'>
					<span className='case-study-section-number'>05 / IMPACT</span>

					<h2>Results</h2>

					<p>{project.outcome}</p>

					{project.highlights?.length > 0 && (
						<div className='case-study-highlights'>
							{project.highlights.map((highlight) => (
								<div
									key={highlight}
									className='case-study-highlight'>
									<CheckCircle2
										size={20}
										aria-hidden='true'
									/>
									<span>{highlight}</span>
								</div>
							))}
						</div>
					)}
				</Reveal>
			</div>

			<Reveal className='case-study-next'>
				<span className='case-study-section-number'>UP NEXT</span>

				<Link
					to={`/projects/${nextProject.slug}`}
					className='case-study-next-link'>
					<span>
						<small>Next project</small>
						<strong>{nextProject.title}</strong>
					</span>

					<ArrowRight size={34} />
				</Link>
			</Reveal>
		</article>
	);
}
