import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const roles = [
	"Full-Stack Developer",
	"Software Engineer",
	"AI & ML Enthusiast",
];

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.16,
			delayChildren: 0.15,
		},
	},
};

const item = {
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
			className='hero-new'
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
				className='hero-new-content'
				variants={container}
				initial={reduceMotion ? false : "hidden"}
				animate='visible'>
				<motion.p
					className='hero-eyebrow'
					variants={item}>
					<span className='availability-dot' />
					OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
				</motion.p>

				<motion.p
					className='hero-greeting'
					variants={item}>
					HI THERE, I'M
				</motion.p>

				<motion.h1
					id='hero-title'
					className='hero-name'
					variants={item}>
					PELUMI<span className='hero-period'>.</span>
				</motion.h1>

				<motion.div
					className='hero-role'
					variants={item}>
					<span className='sr-only'>
						Software Engineer, Full-Stack Developer, and AI/ML Enthusiast
					</span>
					<span aria-hidden='true'>
						<AnimatedRole />
					</span>
				</motion.div>

				<motion.p
					className='hero-description'
					variants={item}>
					I build software that makes complex processes simpler. With over four
					years of full-stack development experience, I've worked on enterprise
					applications, backend systems, and intelligent software. Currently
					pursuing an M.S. in Computer Science at Saint Louis University.
				</motion.p>

				<motion.div
					className='hero-actions'
					variants={item}>
					<Link
						className='hero-btn hero-btn-primary'
						to='/projects'>
						Explore My Work <ArrowUpRight size={18} />
					</Link>

					<Link
						className='hero-btn hero-btn-outline'
						to='/contact'>
						Let's Connect <Mail size={17} />
					</Link>
				</motion.div>

				<motion.div
					className='hero-socials'
					variants={item}>
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

					<span className='hero-social-line' />
					<span>BASED IN ST. LOUIS, MO</span>
				</motion.div>
			</motion.div>

			<motion.div
				className='hero-new-visual'
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
					<span className='hero-visual-caption'>BUILD · CREATE · INNOVATE</span>
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

				<span className='hero-visual-coordinate coordinate-top'>
					38.6270° N
				</span>

				<span className='hero-visual-coordinate coordinate-bottom'>
					90.1994° W
				</span>
			</motion.div>

			<a
				className='hero-scroll'
				href='#home-highlights'>
				<span>SCROLL TO EXPLORE</span>
				<ArrowDown size={17} />
			</a>
		</section>
	);
}
