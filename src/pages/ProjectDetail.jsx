import { Link, useParams } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	ExternalLink,
	ShieldCheck,
	GitBranch,
	BrainCircuit,
	Network,
	Globe2,
	Sparkles,
	CheckCircle2,
} from "lucide-react";

import { projects } from "../data/projects.js";

const projectVisuals = {
	"mtn-coi-portal": {
		icon: ShieldCheck,
		symbol: "COI",
		label: "ENTERPRISE WORKFLOW",
	},
	"mtn-gtm-portal": {
		icon: GitBranch,
		symbol: "GTM",
		label: "APPROVAL AUTOMATION",
	},
	"personality-sphere": {
		icon: Sparkles,
		symbol: "16",
		label: "PERSONALITY DISCOVERY",
	},
	mithridatium: {
		icon: BrainCircuit,
		symbol: "AI",
		label: "MODEL INTEGRITY",
	},
	"multimodal-model-stealing": {
		icon: Network,
		symbol: "ML",
		label: "MACHINE LEARNING RESEARCH",
	},
	"personal-portfolio": {
		icon: Globe2,
		symbol: "</>",
		label: "WEB EXPERIENCE",
	},
};

function ProjectHeroVisual({ project }) {
	const visual = projectVisuals[project.slug] ?? {
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

function Reveal({ children, className = "" }) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: "easeOut" }}>
			{children}
		</motion.div>
	);
}

export default function ProjectDetail() {
	const { slug } = useParams();

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
					Back to Selected Works
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
				Back to Selected Works
			</Link>

			{/* INTRODUCTION */}

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
							Visit Live Project
							<ExternalLink size={18} />
						</a>
					)}

					<a
						href='#case-study-content'
						className='case-study-text-link'>
						Explore Case Study
						<ArrowUpRight size={18} />
					</a>
				</div>
			</Reveal>

			{/* PROJECT VISUAL */}

			<Reveal>
				<ProjectHeroVisual project={project} />
			</Reveal>

			{/* PROJECT DETAILS */}

			<div
				id='case-study-content'
				className='case-study-content'>
				<Reveal className='case-study-overview'>
					<span className='case-study-section-number'>01 / OVERVIEW</span>

					<h2>Behind the project.</h2>

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

				{/* RESULTS */}

				<Reveal className='case-study-results'>
					<span className='case-study-section-number'>05 / IMPACT</span>

					<h2>Results & impact.</h2>

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

			{/* NEXT PROJECT */}

			<Reveal className='case-study-next'>
				<span className='case-study-section-number'>KEEP EXPLORING</span>

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
