import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	tripguide,
	mysql,
	laravel,
	bootstrap,
	php,
	cig,
	gmnhome,
	sppd,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React JS',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Full Stack Developer',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'PHP',
		icon: php,
	},
	{
		name: 'Laravel',
		icon: laravel,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Bootstrap',
		icon: bootstrap,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'MySQL',
		icon: mysql,
	},
	{
		name: 'git',
		icon: git,
	},
];

const experiences = [
	{
		title: 'Freelance Web Developer',
		company_name: 'Creative Innovation Glory',
		icon: cig,
		iconBg: '#383E56',
		date: 'January 2022 - March 2022',
		points: [
			'Developing and maintaining web applications using Laravel Framework.',
			'Collaborate with the team including designers, to implement it into a website application.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Garda Mitra Nasional',
		description:
			'Web-based platform that allows users to view company profiles, look for jobs and contacts to ask admins. and there is an admin dashboard, namely there are modules for managing employees, uploading salary data, creating content and managing service complaint inboxes.',
		tags: [
			{
				name: 'laravel',
				color: 'blue-text-gradient',
			},
			{
				name: 'mysql',
				color: 'green-text-gradient',
			},
			{
				name: 'bootstrap',
				color: 'pink-text-gradient',
			},
		],
		image: gmnhome,
		source_code_link: 'http://gmn-511.com/',
	},
	{
		name: 'Official Travel',
		description:
			'web application for a government agency, namely an official travel order, there are modules for managing employee data, making assignment letters, official memos, reports.',
		tags: [
			{
				name: 'laravel',
				color: 'blue-text-gradient',
			},
			{
				name: 'breeze',
				color: 'green-text-gradient',
			},
			{
				name: 'mysql',
				color: 'pink-text-gradient',
			},
		],
		image: sppd,
		source_code_link: 'https://github.com/jaenal-dev/app_sppd.git',
	},
	{
		name: 'E-Commerce',
		description:
			'E-commerce web application that uses several reactjs, expressjs, nodejs and mongodb frameworks as the database of the application and besides that I use the react-paypal library as a payment handle.',
		tags: [
			{
				name: 'reactjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'expressjs',
				color: 'green-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'pink-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/',
	},
];

export { services, technologies, experiences, testimonials, projects };
