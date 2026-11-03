import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import PageTransition from "./PageTransition.jsx";

const navigation = [
	{ label: "Home", path: "/" },
	{ label: "Experience", path: "/experience" },
	{ label: "Projects", path: "/projects" },
	{ label: "Contact", path: "/contact" },
];

export default function Layout() {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		if (!menuOpen) return;

		function handleEscape(event) {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		}

		window.addEventListener("keydown", handleEscape);

		return () => {
			window.removeEventListener("keydown", handleEscape);
		};
	}, [menuOpen]);

	return (
		<>
			<a
				className='skip-link'
				href='#main-content'>
				Skip to content
			</a>

			<header className='site-header'>
				<div className='nav-container'>
					<NavLink
						to='/'
						end
						onClick={() => setMenuOpen(false)}
						className='site-logo'
						aria-label='Pelumi Oluwategbe - Home'>
						P<span>.</span>
					</NavLink>

					<nav
						className={`site-navigation ${menuOpen ? "nav-open" : ""}`}
						id='primary-navigation'
						aria-label='Main navigation'>
						{navigation.map(({ label, path }) => (
							<NavLink
								key={path}
								to={path}
								end={path === "/"}
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									`nav-item ${isActive ? "nav-item-active" : ""}`
								}>
								{label}
							</NavLink>
						))}
					</nav>

					<div className='nav-actions'>
						<ThemeToggle />

						<NavLink
							to='/contact'
							className='nav-contact-btn'>
							Let's Talk
							<ArrowUpRight size={17} />
						</NavLink>

						<button
							type='button'
							className='mobile-menu-toggle'
							aria-label={menuOpen ? "Close navigation" : "Open navigation"}
							aria-expanded={menuOpen}
							aria-controls='primary-navigation'
							onClick={() => setMenuOpen((open) => !open)}>
							{menuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</header>

			<main
				id='main-content'
				tabIndex={-1}>
				<AnimatePresence
					mode='wait'
					initial={false}>
					<motion.div
						key={location.pathname}
						initial={false}
						exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
						transition={{ duration: 0.2 }}>
						<PageTransition>
							<Outlet />
						</PageTransition>
					</motion.div>
				</AnimatePresence>
			</main>

			<footer className='site-footer'>
				<div className='footer-inner'>
					<div className='footer-brand'>
						<span className='footer-logo'>
							P<span>.</span>
						</span>

						<p>Building thoughtful software, one solution at a time.</p>
					</div>

					<div className='footer-links'>
						<a
							href='https://github.com/pelumitegbe'
							target='_blank'
							rel='noopener noreferrer'>
							GitHub
						</a>

						<a
							href='https://www.linkedin.com/in/pelumitegbe/'
							target='_blank'
							rel='noopener noreferrer'>
							LinkedIn
						</a>

						<NavLink to='/contact'>Contact</NavLink>
					</div>
				</div>

				<div className='footer-bottom'>
					<span>© {new Date().getFullYear()} Pelumi Oluwategbe</span>
					<span>Designed & built with React</span>
				</div>
			</footer>
		</>
	);
}
