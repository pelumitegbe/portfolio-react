import { motion, useReducedMotion } from "motion/react";

export default function PageTransition({ children }) {
	const reduceMotion = useReducedMotion();

	if (reduceMotion) {
		return <div className='page-transition'>{children}</div>;
	}

	return (
		<motion.div
			className='page-transition'
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -12 }}
			transition={{
				duration: 0.35,
				ease: "easeOut",
			}}>
			{children}
		</motion.div>
	);
}
