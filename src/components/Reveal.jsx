import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
	children,
	className = "",
	delay = 0,
	distance = 30,
	duration = 0.6,
	amount = 0.15,
}) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y: distance }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount }}
			transition={{ duration, delay, ease: "easeOut" }}>
			{children}
		</motion.div>
	);
}
