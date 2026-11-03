import Reveal from "../components/Reveal.jsx";
import { BriefcaseBusiness, GraduationCap, ArrowUpRight } from "lucide-react";
import { experiences, education, skillCategories } from "../data/experience.js";

function ExperienceTimeline() {
	return (
		<section
			className='experience-section'
			aria-labelledby='work-title'>
			<Reveal
				distance={35}
				duration={0.65}
				className='experience-section-heading'>
				<span className='section-label'>WORK</span>
				<h2 id='work-title'>
					Where I've <span>worked.</span>
				</h2>
				<p>
					I've worked in business application development and computer science
					teaching. Here's what I did in each role.
				</p>
			</Reveal>

			<div className='experience-timeline'>
				{experiences.map((experience, index) => (
					<Reveal
						distance={35}
						duration={0.65}
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
			<Reveal
				distance={35}
				duration={0.65}
				className='experience-section-heading'>
				<span className='section-label'>EDUCATION</span>
				<h2 id='education-title'>
					My <span>education.</span>
				</h2>
			</Reveal>

			<div className='education-grid'>
				{education.map((item, index) => (
					<Reveal
						distance={35}
						duration={0.65}
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
			<Reveal
				distance={35}
				duration={0.65}
				className='experience-section-heading'>
				<span className='section-label'>SKILLS</span>
				<h2 id='skills-title'>
					Technologies I <span>work with.</span>
				</h2>
				<p>
					The languages and tools I use for web applications and machine
					learning research.
				</p>
			</Reveal>

			<div className='skills-category-grid'>
				{skillCategories.map((category, index) => {
					const CategoryIcon = category.icon;

					return (
						<Reveal
							distance={35}
							duration={0.65}
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
		<div className='experience-page'>
			<Reveal
				distance={35}
				duration={0.65}
				className='experience-page-intro'>
				<span className='section-label'>BACKGROUND</span>

				<h1>
					Experience<span>.</span>
				</h1>

				<p>
					My work in software development and teaching, along with my
					education and technical skills.
				</p>

				<a
					className='experience-intro-link'
					href='#work-title'
					onClick={(event) => {
						event.preventDefault();
						document.getElementById("work-title")?.scrollIntoView();
					}}>
					Work experience <ArrowUpRight size={18} />
				</a>
			</Reveal>

			<ExperienceTimeline />
			<EducationSection />
			<SkillsSection />
		</div>
	);
}
