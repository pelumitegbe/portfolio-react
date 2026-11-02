import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState(() => {
		try {
			return localStorage.getItem("portfolio-theme") === "light"
				? "light"
				: "dark";
		} catch {
			return "dark";
		}
	});

	useEffect(() => {
		document.documentElement.dataset.theme = theme;

		try {
			localStorage.setItem("portfolio-theme", theme);
		} catch {
			// The theme still works if storage is unavailable.
		}
	}, [theme]);

	return (
		<button
			type='button'
			className='theme-toggle-new'
			onClick={() =>
				setTheme((current) => (current === "dark" ? "light" : "dark"))
			}
			aria-label={
				theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
			}
			title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
			{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
}
