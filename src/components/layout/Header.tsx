import { Link } from "react-router";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-50 to-indigo-50 w-full fixed top-0 z-50 shadow-md border-b border-indigo-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo + Name */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 hover:opacity-80 transition"
                    >
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
                            PL
                        </div>
                        <h1 className="text-gray-900 text-lg md:text-xl font-bold">
                            Petros Lyros
                        </h1>
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Petroslyros"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/petros-lyros-5285a4279/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:petrosluros@gmail.com"
                            className="text-gray-600 hover:text-indigo-600 transition"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;