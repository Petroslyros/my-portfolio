import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function HomePage() {
    const projects = [
        {
            name: "Expense Tracker",
            description: "Full-stack expense tracking application with user authentication, real-time budget tracking, and detailed expense categorization.",
            tech: ["C#", ".NET", "React", "TypeScript", "SQL","REST API"],
            github: "https://github.com/Petroslyros/expense-tracker"
        },
        {
            name: "Reminder App",
            description: "Spring Boot reminder application for managing tasks and notifications efficiently.",
            tech: ["Java", "Spring Boot", "SQL", "REST API"],
            github: "https://github.com/Petroslyros/ReminderApp"
        },
        {
            name: "Musical Instrument Shop",
            description: "Android e-shop application for purchasing musical instruments with a modern Kotlin interface.",
            tech: ["Kotlin", "Android", ],
            github: "https://github.com/Petroslyros/Musical_Instrument_Shop"
        }
    ];

    const skills = [
        { category: "Backend", items: [".NET", "Spring Boot", "SQL"] },
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
        { category: "Languages", items: ["Java", "Kotlin", "C#"] },
        { category: "Tools", items: ["Git", "WebStorm", "Visual Studio"] }
    ];

    const experience = [
        {
            title: "Technical Support Representative",
            company: "Teleperformance (Microsoft Department)",
            period: "2022 - Present",
            description: "Provided technical support on Microsoft consumer and commercial products. Trained and mentored new hires."
        },
        {
            title: "Music Teacher",
            company: "Public School of Strovolos & Music School 'Mousikoi Orizontes'",
            period: "2017 - 2019",
            description: "Taught music theory and rhythm. Provided classical guitar lessons to students of various ages."
        }
    ];

    const education = [
        {
            school: "Athens University of Economics and Business, Coding Factory",
            degree: "Software Development Program",
            period: "Mar 2025 - Nov 2025"
        },
        {
            school: "European University of Cyprus",
            degree: "Bachelor's Degree in Music Education",
            period: "October 2013 - February 2018"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image & Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-8">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-xl">
                                <img
                                    src="/src/assets/profile.jpg"
                                    alt="Petros Lyros"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-center md:text-left">
                            <a href="mailto:petrosluros@gmail.com" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition font-medium">
                                <Mail size={20} />
                                <span>petrosluros@gmail.com</span>
                            </a>
                            <a href="tel:+306975620647" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition font-medium">
                                <Phone size={20} />
                                <span>+30 6975620647</span>
                            </a>
                            <div className="flex items-center gap-2 text-gray-600 justify-center md:justify-start font-medium">
                                <MapPin size={20} />
                                <span>Athens, Greece</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-2">Petros Lyros</h1>
                            <p className="text-2xl text-indigo-600 font-semibold">Junior Software Developer</p>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Full-stack developer passionate about building modern web applications. I specialize in creating robust backend solutions with C#, .NET, and SQL, paired with responsive frontends using React and TypeScript. Experienced in solving complex problems through code and delivering applications from database to user interface.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center md:justify-start pt-4">
                            <a
                                href="https://github.com/Petroslyros"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-lg transition transform hover:scale-110"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/petros-lyros-5285a4279/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-lg transition transform hover:scale-110"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:petrosluros@gmail.com"
                                className="p-3 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-lg transition transform hover:scale-110"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:border-l-4 border-indigo-600 transition">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-4">{skillGroup.category}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-gray-700 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition text-center font-medium"
                                    >
                                        View GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
                <div className="space-y-6">
                    {experience.map((job, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                            <div className="flex items-start gap-4">
                                <Briefcase className="text-indigo-600 mt-1" size={24} />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                                    <p className="text-indigo-600 text-lg font-medium">{job.company}</p>
                                    <p className="text-gray-500 text-sm mb-2">{job.period}</p>
                                    <p className="text-gray-700">{job.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
                <div className="space-y-6">
                    {education.map((edu, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                            <div className="flex items-start gap-4">
                                <GraduationCap className="text-indigo-600 mt-1" size={24} />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">{edu.degree}</h3>
                                    <p className="text-indigo-600 text-lg font-medium">{edu.school}</p>
                                    <p className="text-gray-500 text-sm">{edu.period}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*/!* Call to Action *!/*/}
            {/*<section className="container mx-auto px-4 py-16 text-center">*/}
            {/*    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg p-12">*/}
            {/*        <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>*/}
            {/*        <p className="text-indigo-100 mb-6 text-lg">I'm always interested in new projects and collaborations.</p>*/}
            {/*        <a*/}
            {/*            href="mailto:petrosluros@gmail.com"*/}
            {/*            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"*/}
            {/*        >*/}
            {/*            Get in Touch*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}