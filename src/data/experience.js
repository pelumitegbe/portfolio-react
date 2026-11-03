import { Code2, Database, BrainCircuit, Cloud, Layers3 } from "lucide-react";
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

export const experiences = [
	{
		id: "slu-grader",
		period: "2026 — PRESENT",
		role: "Computer Science Grader",
		organization: "Saint Louis University",
		location: "St. Louis, Missouri",
		description:
			"I grade assignments for the Parallel and Concurrent Programming course.",
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
			"I helped teach undergraduate and graduate computer science courses, ran office hours, and graded coursework.",
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
			"I built and maintained business applications with React, TypeScript, and SharePoint Framework.",
		contributions: [
			"Contributed to the MTN Conflict of Interest portal, supporting more than 3,500 submissions and an estimated 1,000+ staff hours saved.",
			"Worked on the MTN Go-to-Market portal, supporting more than 500 requests and reducing approval turnaround from roughly three days to under 24 hours.",
			"Delivered more than 10 enhancements and bug fixes across enterprise applications.",
		],
		tags: ["React", "TypeScript", "SPFx", "SCSS", "Enterprise Applications"],
	},
];

export const education = [
	{
		id: "slu",
		degree: "Master of Science in Computer Science",
		school: "Saint Louis University",
		location: "St. Louis, Missouri",
		period: "IN PROGRESS",
		detail:
			"My graduate work includes software engineering and machine learning research.",
		achievement: "GPA: 4.0 / 4.0",
	},
	{
		id: "covenant",
		degree: "Bachelor of Science in Computer Science",
		school: "Covenant University",
		location: "Nigeria",
		period: "2021",
		detail:
			"Studied programming, algorithms, and software development.",
		achievement: "CGPA: 4.63 / 5.0",
	},
];

export const skillCategories = [
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
