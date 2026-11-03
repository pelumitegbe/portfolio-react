import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import {
	ArrowUpRight,
	Mail,
	MapPin,
	Send,
	CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactEmail = "pelumitegbe@gmail.com";

function ContactForm() {
	const [messageDetails, setMessageDetails] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [emailOpened, setEmailOpened] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setMessageDetails((previous) => ({
			...previous,
			[name]: value,
		}));

		setEmailOpened(false);
	}

	function handleSubmit(event) {
		event.preventDefault();

		const subject = encodeURIComponent(
			messageDetails.subject.trim() || `Portfolio inquiry from ${messageDetails.name.trim()}`,
		);

		const body = encodeURIComponent(
			`Name: ${messageDetails.name.trim()}\n` +
				`Email: ${messageDetails.email.trim()}\n\n` +
				`${messageDetails.message.trim()}`,
		);

		const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

		window.location.href = mailto;
		setEmailOpened(true);
	}

	return (
		<form
			className='contact-form'
			onSubmit={handleSubmit}>
			<div className='contact-form-heading'>
				<span className='contact-form-eyebrow'>SEND A MESSAGE</span>

				<h2>Tell me about your idea.</h2>

				<p>
					Have a project, opportunity, or question in mind? I'd like to hear
					about it.
				</p>
			</div>

			<div className='contact-form-row'>
				<div className='contact-field'>
					<label htmlFor='contact-name'>Your name</label>

					<input
						id='contact-name'
						name='name'
						type='text'
						autoComplete='name'
						placeholder='Your name'
						value={messageDetails.name}
						onChange={handleChange}
						required
						maxLength={100}
					/>
				</div>

				<div className='contact-field'>
					<label htmlFor='contact-email'>Email address</label>

					<input
						id='contact-email'
						name='email'
						type='email'
						autoComplete='email'
						placeholder='you@example.com'
						value={messageDetails.email}
						onChange={handleChange}
						required
						maxLength={254}
					/>
				</div>
			</div>

			<div className='contact-field'>
				<label htmlFor='contact-subject'>Subject</label>

				<input
					id='contact-subject'
					name='subject'
					type='text'
					placeholder='What would you like to discuss?'
					value={messageDetails.subject}
					onChange={handleChange}
					maxLength={150}
				/>
			</div>

			<div className='contact-field'>
				<label htmlFor='contact-message'>Your message</label>

				<textarea
					id='contact-message'
					name='message'
					rows={6}
					placeholder='Tell me a little about your project or opportunity...'
					value={messageDetails.message}
					onChange={handleChange}
					required
					maxLength={5000}
				/>
			</div>

			<button
				type='submit'
				className='contact-submit'>
				Open Email App
				<Send
					size={18}
					aria-hidden='true'
				/>
			</button>

			<p className='contact-form-note'>
				This opens your email application with your message prepared. You'll
				need to send it from there.
			</p>

			{emailOpened && (
				<p
					className='contact-form-feedback'
					role='status'>
					<CheckCircle2
						size={18}
						aria-hidden='true'
					/>
					Your email application should open with the message ready to send.
				</p>
			)}
		</form>
	);
}

export default function Contact() {
	return (
		<section className='contact-page'>
			<Reveal amount={0.2} className='contact-page-intro'>
				<span className='contact-page-eyebrow'>CONTACT</span>

				<h1>
					Let's work <span>together.</span>
				</h1>

				<p>
					You can reach me about software engineering roles, web projects,
					or machine learning research.
				</p>
			</Reveal>

			<div className='contact-page-grid'>
				<Reveal amount={0.2} className='contact-info'>

					<div className='contact-info-heading'>
						<h2>Let's connect.</h2>

						<p>
							Email is the best way to reach me. You can also find my work
							on GitHub or connect with me on LinkedIn.
						</p>
					</div>

					<div className='contact-methods'>
						<a
							href={`mailto:${contactEmail}`}
							className='contact-method'>
							<span className='contact-method-icon'>
								<Mail size={22} />
							</span>

							<span className='contact-method-text'>
								<small>EMAIL ME</small>
								<strong>{contactEmail}</strong>
							</span>

							<ArrowUpRight size={20} />
						</a>

						<a
							href='https://www.linkedin.com/in/pelumitegbe/'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-method'>
							<span className='contact-method-icon'>
								<FaLinkedinIn size={22} />
							</span>

							<span className='contact-method-text'>
								<small>LINKEDIN</small>
								<strong>Pelumi Oluwategbe</strong>
							</span>

							<ArrowUpRight size={20} />
						</a>

						<a
							href='https://github.com/pelumitegbe'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-method'>
							<span className='contact-method-icon'>
								<FaGithub size={22} />
							</span>

							<span className='contact-method-text'>
								<small>GITHUB</small>
								<strong>pelumitegbe</strong>
							</span>

							<ArrowUpRight size={20} />
						</a>
					</div>

					<div className='contact-location'>
						<MapPin
							size={18}
							aria-hidden='true'
						/>

						<span>Based in St. Louis, Missouri, USA</span>
					</div>
				</Reveal>

				<Reveal amount={0.2} className='contact-form-panel'>
					<ContactForm />
				</Reveal>
			</div>

		</section>
	);
}
