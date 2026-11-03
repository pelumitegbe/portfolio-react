import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const highlights = [
	{
		number: "4+",
		label: "Years of development experience",
	},
	{
		number: "3,500+",
		label: "Enterprise submissions processed",
	},
	{
		number: "1,000+",
		label: "Estimated staff hours saved",
	},
	{
		number: "10+",
		label: "Enhancements and fixes delivered",
	},
];

export default function Highlights() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id='home-highlights'
			className='highlights-section'>
			<motion.div
				className='highlights-intro'
				initial={reduceMotion ? false : { opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.65 }}>
				<span className='section-label'>A LITTLE ABOUT ME</span>

				<h2>
					Software, teaching,
					<br />
					<span>and research.</span>
				</h2>

				<p>
					At Lotus Beta Analytics, I worked on MTN's declaration and approval
					portals. At SLU, I've helped students with programming coursework
					while studying how machine learning models can be tested and copied.
				</p>

				<Link
					to='/experience'
					className='highlights-link'>
					My experience <ArrowUpRight size={18} />
				</Link>
			</motion.div>

			<div className='highlights-grid'>
				{highlights.map((highlight, index) => (
					<motion.article
						className='highlight-stat'
						key={highlight.label}
						initial={reduceMotion ? false : { opacity: 0, y: 35 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.55, delay: index * 0.1 }}>
						<strong>{highlight.number}</strong>
						<span>{highlight.label}</span>
					</motion.article>
				))}
			</div>
		</section>
	);
}
