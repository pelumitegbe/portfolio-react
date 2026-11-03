import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const roles = [
	"Full-Stack Developer",
	"Software Engineer",
	"Machine Learning Researcher",
];

const introAnimation = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.16,
			delayChildren: 0.15,
		},
	},
};

const introItemAnimation = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: "easeOut" },
	},
};

function AnimatedRole() {
	const [roleIndex, setRoleIndex] = useState(0);
	const [characterCount, setCharacterCount] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		if (reduceMotion) return;

		const currentRole = roles[roleIndex];

		let delay = deleting ? 45 : 85;

		if (!deleting && characterCount === currentRole.length) {
			delay = 1700;
		}

		const timer = window.setTimeout(() => {
			if (!deleting && characterCount === currentRole.length) {
				setDeleting(true);
			} else if (deleting && characterCount === 0) {
				setDeleting(false);
				setRoleIndex((index) => (index + 1) % roles.length);
			} else {
				setCharacterCount((count) => count + (deleting ? -1 : 1));
			}
		}, delay);

		return () => window.clearTimeout(timer);
	}, [roleIndex, characterCount, deleting, reduceMotion]);

	return (
		<span className='typing-role'>
			{reduceMotion ? roles[0] : roles[roleIndex].slice(0, characterCount)}
			{!reduceMotion && (
				<span
					className='typing-cursor'
					aria-hidden='true'
				/>
			)}
		</span>
	);
}

export default function Hero() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			className='hero'
			aria-labelledby='hero-title'>
			<div
				className='hero-glow hero-glow-one'
				aria-hidden='true'
			/>
			<div
				className='hero-glow hero-glow-two'
				aria-hidden='true'
			/>

			<motion.div
				className='hero-content'
				variants={introAnimation}
				initial={reduceMotion ? false : "hidden"}
				animate='visible'>

				<motion.p
					className='hero-greeting'
					variants={introItemAnimation}>
					HI THERE, I'M
				</motion.p>

				<motion.h1
					id='hero-title'
					className='hero-name'
					variants={introItemAnimation}>
					PELUMI<span className='hero-period'>.</span>
				</motion.h1>

				<motion.div
					className='hero-role'
					variants={introItemAnimation}>
					<span className='sr-only'>
						Software Engineer, Full-Stack Developer, and Machine Learning Researcher
					</span>
					<span aria-hidden='true'>
						<AnimatedRole />
					</span>
				</motion.div>

				<motion.p
					className='hero-description'
					variants={introItemAnimation}>
					I'm a software engineer and computer science graduate student at
					Saint Louis University. I've built React and SharePoint applications
					for enterprise teams, and my current research focuses on machine
					learning model security.
				</motion.p>

				<motion.div
					className='hero-actions'
					variants={introItemAnimation}>
					<Link
						className='hero-btn hero-btn-primary'
						to='/projects'>
						View projects <ArrowUpRight size={18} />
					</Link>

					<Link
						className='hero-btn hero-btn-outline'
						to='/contact'>
						Get in touch <Mail size={17} />
					</Link>
				</motion.div>

				<motion.div
					className='hero-socials'
					variants={introItemAnimation}>
					<a
						href='https://github.com/pelumitegbe'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub profile'>
						<FaGithub size={22} />{" "}
					</a>

					<a
						href='https://www.linkedin.com/in/pelumitegbe/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn profile'>
						<FaLinkedinIn size={20} />
					</a>

					<span>BASED IN ST. LOUIS, MO</span>
				</motion.div>
			</motion.div>

			<motion.div
				className='hero-visual'
				initial={reduceMotion ? false : { opacity: 0, scale: 0.88, x: 50 }}
				animate={{ opacity: 1, scale: 1, x: 0 }}
				transition={{ duration: 1, delay: 0.35 }}
				aria-hidden='true'>
				<div className='hero-visual-ring hero-ring-one' />
				<div className='hero-visual-ring hero-ring-two' />

				<motion.div
					className='hero-visual-core'
					animate={reduceMotion ? {} : { y: [0, -14, 0] }}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
					}}>
					<span className='hero-code-symbol'>{"</>"}</span>
					<span className='hero-visual-caption'>REACT · TYPESCRIPT · PYTHON</span>
				</motion.div>

				<motion.div
					className='hero-floating-tag tag-react'
					animate={reduceMotion ? {} : { y: [0, -9, 0] }}
					transition={{ duration: 4, repeat: Infinity }}>
					React
				</motion.div>

				<motion.div
					className='hero-floating-tag tag-typescript'
					animate={reduceMotion ? {} : { y: [0, 10, 0] }}
					transition={{ duration: 4.8, repeat: Infinity }}>
					TypeScript
				</motion.div>

				<motion.div
					className='hero-floating-tag tag-python'
					animate={reduceMotion ? {} : { y: [0, -8, 0] }}
					transition={{ duration: 5.2, repeat: Infinity }}>
					Python
				</motion.div>

			</motion.div>

			<a
				className='hero-scroll'
				href='#home-highlights'>
				<span>MORE ABOUT ME</span>
				<ArrowDown size={17} />
			</a>
		</section>
	);
}
