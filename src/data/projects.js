export const projects = [
	{
		slug: "personality-sphere",
		title: "Personality Sphere",
		category: "Web Application",
		year: "Personal Project",
		technologies: ["Interactive UI", "Web Development"],
		summary:
			"A personality questionnaire that gives users a type and explains the preferences behind it.",
		problem:
			"I wanted to make personality preferences easier to explore through questions rather than long descriptions.",
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
		year: "Work Project",
		technologies: ["React", "TypeScript", "SPFx", "SCSS"],
		summary:
			"A SharePoint application for submitting, approving, and keeping track of conflict-of-interest declarations.",
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
		year: "Personal Project",
		technologies: ["Frontend Development", "Responsive Design", "CSS"],
		summary:
			"My portfolio, with project write-ups, work experience, and contact details.",
		problem:
			"A traditional résumé provides limited space to demonstrate technical work, design skills, and professional accomplishments.",
		role: "Designed and developed a personal website to present my professional background and projects.",
		approach:
			"Built responsive pages for my projects and experience, with project search and a light and dark theme.",
		outcome:
			"The site brings my projects, background, and contact information together in one place.",
		highlights: [
			"Responsive design",
			"Interactive interface",
			"Project write-ups",
		],
		liveUrl: "https://pelumi-tegbe.vercel.app/",
		accent: "blue",
	},
	{
		slug: "mtn-gtm-portal",
		title: "MTN Go-to-Market Portal",
		category: "Enterprise Software",
		year: "Work Project",
		technologies: ["React", "TypeScript", "SPFx", "SCSS"],
		summary:
			"A portal for submitting go-to-market requests and tracking them through multiple approval stages.",
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
		year: "Research Project",
		technologies: ["Python", "CLI", "Machine Learning", "Model Evaluation"],
		summary:
			"A model integrity verification framework that uses black-box testing to evaluate pretrained machine learning models.",
		problem:
			"Pretrained models need to be checked for unexpected behavior before they can be trusted in an application.",
		role: "Developing a command-line framework for machine learning model integrity verification.",
		approach:
			"Building black-box testing workflows with automated analysis and reporting of model behavior across classes and datasets.",
		outcome:
			"Still in development, with work focused on repeatable tests and reports of model behavior.",
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
		year: "Graduate Research",
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
