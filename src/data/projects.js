export const projects = [
	{
		slug: "personality-sphere",
		title: "Personality Sphere",
		category: "Web Application",
		featured: true,
		year: "Personal Project",
		technologies: ["Interactive UI", "Web Development"],
		summary:
			"An interactive personality discovery platform that helps users explore their personality type through a questionnaire and personalized results.",
		problem:
			"Personality theories can be difficult to explore through lengthy explanations. Users benefit from an engaging way to understand personality preferences and related characteristics.",
		role: "Developed a web application that guides users through personality questions and presents personalized insights.",
		approach:
			"Created an interactive questionnaire based on the four Myers-Briggs preference pairs: Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving. The application presents results and educational information about personality types.",
		outcome:
			"A deployed personality discovery platform where users can explore their personality type, potential career paths, strengths, weaknesses, personality rarity, and celebrities with similar personality types.",
		highlights: [
			"16 personality types",
			"Interactive questionnaire",
			"Personalized personality insights",
		],
		liveUrl: "https://personality-sphere.vercel.app/",
		accent: "green",
	},
	{
		slug: "mtn-coi-portal",
		title: "MTN Conflict of Interest Portal",
		category: "Enterprise Software",
		featured: true,
		year: "2023–2024",
		technologies: ["React", "TypeScript", "SPFx", "SCSS"],
		summary:
			"An enterprise application that automated conflict-of-interest declarations, approvals, and record management.",
		problem:
			"Manual conflict-of-interest declarations required significant administrative effort, including collecting submissions and tracking approval statuses.",
		role: "Business Applications Developer at Lotus Beta Analytics, contributing to the development of enterprise SharePoint applications.",
		approach:
			"Built features using React, TypeScript, SPFx, and SCSS to support structured declarations, edits, approval workflows, audit-friendly history, and retrieval of previous-year submissions.",
		outcome:
			"Processed over 3,500 submissions and saved more than 1,000 staff hours by reducing manual collation and approval tracking.",
		highlights: [
			"3,500+ submissions",
			"1,000+ staff hours saved",
			"Automated approval workflows",
		],
		accent: "gold",
	},
	{
		slug: "personal-portfolio",
		title: "Personal Portfolio Website",
		category: "Frontend Development",
		featured: false,
		year: "Personal Project",
		technologies: ["Frontend Development", "Responsive Design", "CSS"],
		summary:
			"A personal portfolio website showcasing my software engineering experience, technical skills, research, and selected projects.",
		problem:
			"A traditional résumé provides limited space to demonstrate technical work, design skills, and professional accomplishments.",
		role: "Designed and developed a personal website to present my professional background and projects.",
		approach:
			"Created a visually engaging portfolio with responsive layouts, interactive elements, and sections highlighting my experience, skills, and software development projects.",
		outcome:
			"A deployed portfolio that provides an accessible way for recruiters, collaborators, and other visitors to explore my work.",
		highlights: [
			"Responsive design",
			"Interactive interface",
			"Professional project showcase",
		],
		liveUrl: "https://pelumi-tegbe.vercel.app/",
		accent: "blue",
	},
	{
		slug: "mtn-gtm-portal",
		title: "MTN Go-to-Market Portal",
		category: "Enterprise Software",
		featured: true,
		year: "2024",
		technologies: ["React", "TypeScript", "SPFx", "SCSS"],
		summary:
			"An enterprise workflow application that streamlined go-to-market requests and multi-stage approvals.",
		problem:
			"Go-to-market approvals relied on fragmented email communication and manual routing, creating delays.",
		role: "Business Applications Developer at Lotus Beta Analytics, working on enterprise workflow applications.",
		approach:
			"Developed a multi-stage approval system with role-based dashboards and end-to-end request tracking using React, TypeScript, SPFx, and SCSS.",
		outcome:
			"Supported more than 500 requests and reduced approval turnaround from approximately three days to under 24 hours.",
		highlights: [
			"500+ requests processed",
			"Approval time reduced to under 24 hours",
			"Role-based dashboards",
		],
		accent: "blue",
	},
	{
		slug: "mithridatium",
		title: "Mithridatium",
		category: "AI & Machine Learning",
		featured: true,
		year: "2025–Present",
		technologies: ["Python", "CLI", "Machine Learning", "Model Evaluation"],
		summary:
			"A model integrity verification framework that uses black-box testing to evaluate pretrained machine learning models.",
		problem:
			"Assessing the integrity and behavior of pretrained machine learning models requires systematic testing and analysis.",
		role: "Developing a command-line framework for machine learning model integrity verification.",
		approach:
			"Building black-box testing workflows with automated analysis and reporting of model behavior across classes and datasets.",
		outcome:
			"Ongoing development of a framework for structured model integrity evaluation and reporting.",
		highlights: [
			"Black-box model testing",
			"Automated analysis and reporting",
			"Ongoing research",
		],
		accent: "purple",
	},
	{
		slug: "multimodal-model-stealing",
		title: "Multi-Modal Model Stealing Attack",
		category: "AI & Machine Learning",
		featured: true,
		year: "2024–Present",
		technologies: [
			"Python",
			"CLIP",
			"ResNet-50",
			"DenseNet-121",
			"Machine Learning",
		],
		summary:
			"Research exploring multimodal model-stealing attacks through CLIP-guided image generation and feature-space alignment.",
		problem:
			"Understanding model-stealing attacks requires investigating how generated data and proxy models can reproduce or transfer model behavior.",
		role: "Researching image generation, feature-space alignment, and model transferability across architectures and datasets.",
		approach:
			"Designed an image-generation pipeline guided by CLIP embeddings and feature-space alignment, avoiding supervised classification loss. Evaluating transferability using a ResNet-50 proxy trained on ImageNet and a DenseNet-121 victim trained on STL-10.",
		outcome:
			"Ongoing research evaluating transferability across different model architectures and datasets.",
		highlights: [
			"CLIP-guided image generation",
			"ResNet-50 and DenseNet-121",
			"Cross-architecture transferability",
		],
		accent: "rose",
	},
];
