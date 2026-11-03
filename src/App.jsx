import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					index
					element={<Home />}
				/>

				<Route
					path='experience'
					element={<Experience />}
				/>

				<Route
					path='projects'
					element={<Projects />}
				/>

				<Route
					path='projects/:slug'
					element={<ProjectDetail />}
				/>

				<Route
					path='contact'
					element={<Contact />}
				/>

				<Route
					path='*'
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	);
}
