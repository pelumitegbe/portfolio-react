import { NavLink, Outlet } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Layout() {
	return (
		<>
			<button
				className='skip-link'
				onClick={() => {
					document.getElementById("main-content")?.focus();
				}}>
				Skip to content
			</button>

			<header>
				<div className='brand'>Pelumi Oluwategbe</div>

				<nav aria-label='Main navigation'>
					<NavLink
						to='/'
						end>
						Home
					</NavLink>
					<NavLink to='/experience'>Experience</NavLink>
					<NavLink to='/projects'>Projects</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
				</nav>

				<ThemeToggle />
			</header>

			<main
				id='main-content'
				tabIndex={-1}>
				<Outlet />
			</main>

			<footer>
				<p>© 2026 Pelumi Oluwategbe. All rights reserved.</p>
			</footer>
		</>
	);
}
