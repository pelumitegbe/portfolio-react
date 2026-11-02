import { Link } from "react-router";
import Hero from "../components/Hero.jsx";
import Highlights from "../components/Highlights.jsx";

const skills = [
	{
		category: "Frontend Development",
		items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
	},
	{
		category: "Backend Development",
		items: ["Node.js", "Express.js", "Python", "REST APIs"],
	},
	{
		category: "Tools & Technologies",
		items: ["Git", "GitHub", "SQL", "Linux", "Vite"],
	},
];

const experiences = [
	{
		title: "Course Grader",
		organization: "Saint Louis University",
		period: "2026 – Present",
		description:
			"Evaluate programming assignments for Concurrent and Parallel Programming, providing feedback on correctness, performance, and programming concepts.",
	},
	{
		title: "Graduate Teaching Assistant",
		organization: "Saint Louis University",
		period: "Previous Appointment – May 2026",
		description:
			"Supported computer science courses through grading, office hours, and technical assistance. Helped students understand programming concepts, debugging, and software development practices.",
	},
	{
		title: "Software Development",
		organization: "Professional & Academic Projects",
		period: "Ongoing",
		description:
			"Developed and tested applications involving frontend interfaces, backend APIs, databases, and data processing. Worked with technologies including JavaScript, React, Node.js, and Python.",
	},
];

function SkillGroup({ category, items }) {
	return (
		<div className='skill-group'>
			<h3>{category}</h3>

			<div className='skill-list'>
				{items.map((skill) => (
					<span
						className='skill-tag'
						key={skill}>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}

function ExperienceCard({ experience }) {
	return (
		<article className='experience-card'>
			<div className='experience-header'>
				<div>
					<h3>{experience.title}</h3>
					<p className='experience-organization'>{experience.organization}</p>
				</div>

				<span className='experience-period'>{experience.period}</span>
			</div>

			<p>{experience.description}</p>
		</article>
	);
}

export function Home() {
	return (
		<div className='home-redesign'>
			<Hero />
			<Highlights />
		</div>
	);
}

export function Experience() {
	return (
		<div className='experience-page'>
			<section className='page-intro'>
				<span className='section-label'>MY BACKGROUND</span>

				<h1>Experience & Skills</h1>

				<p>
					My background combines software development, graduate-level computer
					science education, and experience supporting students in technical
					learning environments.
				</p>
			</section>

			<section className='content-section'>
				<div className='section-heading'>
					<span className='section-label'>EDUCATION</span>
					<h2>Academic Background</h2>
				</div>

				<article className='education-card'>
					<div>
						<h3>Master of Science in Computer Science</h3>

						<p>Saint Louis University</p>

						<p>
							Focused on software engineering, web technologies, distributed
							systems, and advanced computing concepts.
						</p>
					</div>

					<span className='education-badge'>Graduate Student</span>
				</article>
			</section>

			<section className='content-section'>
				<div className='section-heading'>
					<span className='section-label'>EXPERIENCE</span>
					<h2>Professional Experience</h2>
				</div>

				<div className='experience-list'>
					{experiences.map((experience) => (
						<ExperienceCard
							key={`${experience.title}-${experience.organization}`}
							experience={experience}
						/>
					))}
				</div>
			</section>

			<section className='content-section'>
				<div className='section-heading'>
					<span className='section-label'>TECHNICAL SKILLS</span>
					<h2>Technologies I Work With</h2>
				</div>

				<div className='skills-grid'>
					{skills.map((group) => (
						<SkillGroup
							key={group.category}
							category={group.category}
							items={group.items}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export function Contact() {
	return (
		<div className='contact-page'>
			<section className='page-intro'>
				<span className='section-label'>LET'S CONNECT</span>

				<h1>Get in Touch</h1>

				<p>
					I'm interested in software engineering opportunities, technical
					collaborations, and projects involving modern web technologies and
					artificial intelligence.
				</p>
			</section>

			<div className='contact-grid'>
				<a
					href='https://github.com/pelumitegbe'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-card'>
					<div className='contact-icon'>GH</div>

					<h2>GitHub</h2>

					<p>Explore my repositories and software projects.</p>

					<span>View GitHub Profile →</span>
				</a>

				<a
					href='https://pelumi-tegbe.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-card'>
					<div className='contact-icon'>WEB</div>

					<h2>Personal Website</h2>

					<p>
						Learn more about my professional background and development
						experience.
					</p>

					<span>Visit Website →</span>
				</a>
			</div>

			<section className='contact-footer'>
				<h2>Let's Build Something Meaningful</h2>

				<p>
					I'm always interested in learning, collaborating, and exploring new
					opportunities in software development.
				</p>
			</section>
		</div>
	);
}

export function NotFound() {
	return (
		<section className='not-found-page'>
			<h1>404</h1>

			<h2>Page Not Found</h2>

			<p>The page you're looking for doesn't exist or may have been moved.</p>

			<Link
				to='/'
				className='btn btn-primary'>
				Return Home
			</Link>
		</section>
	);
}
