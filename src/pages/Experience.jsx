import { motion, useReducedMotion } from "motion/react";
import {
	BriefcaseBusiness,
	GraduationCap,
	ArrowUpRight,
	Code2,
	Database,
	BrainCircuit,
	Cloud,
	Layers3,
} from "lucide-react";
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaJava,
	FaDocker,
	FaGitAlt,
	FaAws,
} from "react-icons/fa";
import {
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiMongodb,
	SiMysql,
	SiRedis,
	SiTensorflow,
	SiPytorch,
	SiScikitlearn,
} from "react-icons/si";

const experiences = [
	{
		id: "slu-grader",
		period: "2026 — PRESENT",
		role: "Computer Science Grader",
		organization: "Saint Louis University",
		location: "St. Louis, Missouri",
		description:
			"Supporting the Parallel and Concurrent Programming course through consistent, rubric-based evaluation and constructive feedback.",
		contributions: [
			"Evaluate programming assignments and technical explanations using established grading criteria.",
			"Provide actionable feedback on parallel programming concepts, correctness, and performance.",
			"Help maintain consistency and fairness across student submissions.",
		],
		tags: ["Parallel Programming", "Code Review", "Technical Evaluation"],
	},
	{
		id: "slu-ta",
		period: "AUG 2024 — MAY 2026",
		role: "Graduate Teaching Assistant",
		organization: "Saint Louis University",
		location: "St. Louis, Missouri",
		description:
			"Supported undergraduate and graduate computer science courses through instruction, laboratory assistance, and assessment.",
		contributions: [
			"Assisted with Distributed Computing, Concurrent and Parallel Programming, Software Engineering, and Machine Learning.",
			"Led office hours and helped students troubleshoot programming assignments.",
			"Evaluated coursework and provided technical feedback to reinforce core concepts.",
		],
		tags: ["Teaching", "Distributed Systems", "Software Engineering"],
	},
	{
		id: "lotus-beta",
		period: "NOV 2022 — JUL 2024",
		role: "Business Applications Developer",
		organization: "Lotus Beta Analytics",
		location: "Nigeria",
		description:
			"Developed and maintained enterprise business applications and workflow systems using React, TypeScript, and SharePoint Framework.",
		contributions: [
			"Contributed to the MTN Conflict of Interest portal, supporting more than 3,500 submissions and an estimated 1,000+ staff hours saved.",
			"Worked on the MTN Go-to-Market portal, supporting more than 500 requests and reducing approval turnaround from roughly three days to under 24 hours.",
			"Delivered more than 10 enhancements and bug fixes across enterprise applications.",
		],
		tags: ["React", "TypeScript", "SPFx", "SCSS", "Enterprise Applications"],
	},
];

const education = [
	{
		id: "slu",
		degree: "Master of Science in Computer Science",
		school: "Saint Louis University",
		location: "St. Louis, Missouri",
		period: "IN PROGRESS",
		detail:
			"Graduate study focused on advanced computer science topics, software engineering, and intelligent systems.",
		achievement: "GPA: 4.0 / 4.0",
	},
	{
		id: "covenant",
		degree: "Bachelor of Science in Computer Science",
		school: "Covenant University",
		location: "Nigeria",
		period: "2021",
		detail:
			"Undergraduate foundation in programming, algorithms, software development, and computer science fundamentals.",
		achievement: "CGPA: 4.63 / 5.0",
	},
];

const skillCategories = [
	{
		title: "Programming Languages",
		icon: Code2,
		skills: [
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "Python", icon: FaPython },
			{ name: "Java", icon: FaJava },
		],
	},
	{
		title: "Frontend Development",
		icon: Layers3,
		skills: [
			{ name: "React", icon: FaReact },
			{ name: "Next.js", icon: SiNextdotjs },
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "SPFx", icon: null },
			{ name: "SCSS", icon: null },
		],
	},
	{
		title: "Backend & Databases",
		icon: Database,
		skills: [
			{ name: "Node.js", icon: FaNodeJs },
			{ name: "MySQL", icon: SiMysql },
			{ name: "MongoDB", icon: SiMongodb },
			{ name: "Redis", icon: SiRedis },
		],
	},
	{
		title: "AI & Machine Learning",
		icon: BrainCircuit,
		skills: [
			{ name: "PyTorch", icon: SiPytorch },
			{ name: "TensorFlow", icon: SiTensorflow },
			{ name: "scikit-learn", icon: SiScikitlearn },
			{ name: "Model Evaluation", icon: null },
		],
	},
	{
		title: "Cloud & Development Tools",
		icon: Cloud,
		skills: [
			{ name: "AWS", icon: FaAws },
			{ name: "Docker", icon: FaDocker },
			{ name: "Git", icon: FaGitAlt },
			{ name: "GitHub Actions", icon: null },
			{ name: "CI/CD", icon: null },
		],
	},
];

function Reveal({ children, className = "", delay = 0 }) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y: 35 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.65, delay, ease: "easeOut" }}>
			{children}
		</motion.div>
	);
}

function ExperienceTimeline() {
	return (
		<section
			className='experience-section'
			aria-labelledby='work-title'>
			<Reveal className='experience-section-heading'>
				<span className='new-section-label'>01 / CAREER JOURNEY</span>
				<h2 id='work-title'>
					Where I've <span>worked.</span>
				</h2>
				<p>
					From building enterprise applications to supporting computer science
					education, each role has shaped how I approach engineering and
					problem-solving.
				</p>
			</Reveal>

			<div className='experience-timeline'>
				{experiences.map((experience, index) => (
					<Reveal
						className='experience-timeline-row'
						key={experience.id}
						delay={index * 0.08}>
						<div className='experience-date'>
							<span>{experience.period}</span>
						</div>

						<div
							className='experience-timeline-marker'
							aria-hidden='true'>
							<span className='experience-timeline-dot' />
						</div>

						<article className='experience-timeline-card'>
							<div className='experience-card-top'>
								<span className='experience-card-icon'>
									<BriefcaseBusiness size={20} />
								</span>
								<span className='experience-card-index'>0{index + 1}</span>
							</div>

							<h3>{experience.role}</h3>
							<p className='experience-company'>{experience.organization}</p>
							<p className='experience-location'>{experience.location}</p>

							<p className='experience-summary'>{experience.description}</p>

							<ul className='experience-contributions'>
								{experience.contributions.map((contribution) => (
									<li key={contribution}>{contribution}</li>
								))}
							</ul>

							<div className='experience-tags'>
								{experience.tags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</section>
	);
}

function EducationSection() {
	return (
		<section
			className='education-section'
			aria-labelledby='education-title'>
			<Reveal className='experience-section-heading'>
				<span className='new-section-label'>02 / ACADEMIC BACKGROUND</span>
				<h2 id='education-title'>
					My <span>education.</span>
				</h2>
			</Reveal>

			<div className='education-grid'>
				{education.map((item, index) => (
					<Reveal
						key={item.id}
						delay={index * 0.12}>
						<article className='education-card'>
							<div className='education-card-top'>
								<span className='education-icon'>
									<GraduationCap size={25} />
								</span>
								<span className='education-period'>{item.period}</span>
							</div>

							<h3>{item.degree}</h3>
							<p className='education-school'>{item.school}</p>
							<p className='education-location'>{item.location}</p>
							<p className='education-detail'>{item.detail}</p>

							<div className='education-achievement'>{item.achievement}</div>
						</article>
					</Reveal>
				))}
			</div>
		</section>
	);
}

function SkillsSection() {
	return (
		<section
			className='skills-section'
			aria-labelledby='skills-title'>
			<Reveal className='experience-section-heading'>
				<span className='new-section-label'>03 / MY TOOLKIT</span>
				<h2 id='skills-title'>
					Technologies I <span>work with.</span>
				</h2>
				<p>
					A collection of languages, frameworks, and tools I've used across
					software development, enterprise applications, and machine learning.
				</p>
			</Reveal>

			<div className='skills-category-grid'>
				{skillCategories.map((category, index) => {
					const CategoryIcon = category.icon;

					return (
						<Reveal
							key={category.title}
							delay={index * 0.06}>
							<article className='skill-category-card'>
								<div className='skill-category-heading'>
									<CategoryIcon size={21} />
									<h3>{category.title}</h3>
								</div>

								<div className='skill-chip-list'>
									{category.skills.map((skill) => {
										const SkillIcon = skill.icon;

										return (
											<span
												className='skill-chip'
												key={skill.name}>
												{SkillIcon && (
													<SkillIcon
														size={18}
														aria-hidden='true'
													/>
												)}
												{skill.name}
											</span>
										);
									})}
								</div>
							</article>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}

export default function Experience() {
	return (
		<div className='experience-page-new'>
			<Reveal className='experience-page-intro'>
				<span className='new-section-label'>GET TO KNOW ME</span>

				<h1>
					Experience<span>.</span>
				</h1>

				<p>
					My journey through software engineering, enterprise development,
					teaching, and continuous learning.
				</p>

				<a
					className='experience-intro-link'
					href='#work-title'>
					Explore My Journey <ArrowUpRight size={18} />
				</a>
			</Reveal>

			<ExperienceTimeline />
			<EducationSection />
			<SkillsSection />
		</div>
	);
}
