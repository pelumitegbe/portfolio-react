export const projects = [
	{
		slug: "campusflow",
		title: "CampusFlow",
		category: "Full-Stack Development",
		technologies: ["JavaScript", "Node.js", "SQLite", "HTML", "CSS"],
		summary:
			"A student project management application for organizing coursework, assignments, and deadlines.",
		problem:
			"Students often struggle to organize assignments and track deadlines across multiple courses.",
		role: "Developed and tested features for managing assignments, filtering tasks, and tracking progress.",
		approach:
			"Built a full-stack application with REST API endpoints, assignment management, filtering, and calendar views.",
		outcome:
			"Implemented a functional student planner with task management and progress tracking.",
	},
	{
		slug: "careertrack",
		title: "CareerTrack",
		category: "Web Development",
		technologies: ["TypeScript", "Node.js", "React", "SQLite"],
		summary:
			"A job application tracking system that helps users organize applications and interviews.",
		problem:
			"Managing multiple job applications and interview schedules can become difficult without a centralized system.",
		role: "Worked on backend functionality, API validation, testing, and CSV export capabilities.",
		approach:
			"Implemented REST endpoints, application tracking, interview date validation, and CSV export functionality.",
		outcome:
			"Developed and tested features that improve job application organization and data portability.",
	},
	{
		slug: "housing-price-predictor",
		title: "California Housing Price Predictor",
		category: "Machine Learning",
		technologies: ["Python", "Scikit-learn", "Pandas", "Gradio"],
		summary:
			"A machine learning application that predicts California housing prices using K-nearest neighbors regression.",
		problem:
			"Housing prices depend on several factors, making manual estimation difficult.",
		role: "Prepared the dataset, trained the regression model, evaluated predictions, and developed the user interface.",
		approach:
			"Applied data preprocessing, feature scaling, KNN regression, and model evaluation using RMSE.",
		outcome:
			"Built a working prediction interface and evaluated the model using root mean squared error.",
	},
];
