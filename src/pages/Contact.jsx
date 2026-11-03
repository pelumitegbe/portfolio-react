import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
	ArrowUpRight,
	ArrowRight,
	Mail,
	MapPin,
	Send,
	CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const EMAIL = "pelumitegbe@gmail.com";

function Reveal({ children, className = "" }) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: "easeOut" }}>
			{children}
		</motion.div>
	);
}

function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setForm((previous) => ({
			...previous,
			[name]: value,
		}));

		setSubmitted(false);
	}

	function handleSubmit(event) {
		event.preventDefault();

		const subject = encodeURIComponent(
			form.subject.trim() || `Portfolio inquiry from ${form.name.trim()}`,
		);

		const body = encodeURIComponent(
			`Name: ${form.name.trim()}\n` +
				`Email: ${form.email.trim()}\n\n` +
				`${form.message.trim()}`,
		);

		const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

		window.location.href = mailto;
		setSubmitted(true);
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
						value={form.name}
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
						value={form.email}
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
					value={form.subject}
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
					value={form.message}
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

			{submitted && (
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
			<Reveal className='contact-page-intro'>
				<span className='contact-page-eyebrow'>04 / GET IN TOUCH</span>

				<h1>
					Let's work <span>together.</span>
				</h1>

				<p>
					I'm interested in software engineering opportunities, meaningful
					collaborations, and projects that solve real problems. Have something
					in mind? Let's talk.
				</p>
			</Reveal>

			<div className='contact-page-grid'>
				<Reveal className='contact-info'>
					<div className='contact-availability'>
						<span className='contact-availability-dot' />

						<span>Open to opportunities and collaborations</span>
					</div>

					<div className='contact-info-heading'>
						<h2>Let's connect.</h2>

						<p>
							Whether it's a software project, a research collaboration, or
							simply a conversation about technology, feel free to reach out.
						</p>
					</div>

					<div className='contact-methods'>
						<a
							href={`mailto:${EMAIL}`}
							className='contact-method'>
							<span className='contact-method-icon'>
								<Mail size={22} />
							</span>

							<span className='contact-method-text'>
								<small>EMAIL ME</small>
								<strong>{EMAIL}</strong>
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
								<strong>Connect professionally</strong>
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
								<strong>Explore my code</strong>
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

				<Reveal className='contact-form-panel'>
					<ContactForm />
				</Reveal>
			</div>

			<Reveal className='contact-bottom-cta'>
				<span>HAVE SOMETHING INTERESTING IN MIND?</span>

				<a href={`mailto:${EMAIL}`}>
					Let's make it happen.
					<ArrowRight size={28} />
				</a>
			</Reveal>
		</section>
	);
}
