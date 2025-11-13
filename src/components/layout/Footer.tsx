import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Petroslyros",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/petros-lyros-5285a4279/",
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "mailto:petrosluros@gmail.com",
            icon: Mail,
        },
    ];

    return (
        <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 border-t border-indigo-200">
            <div className="container mx-auto px-6 py-8">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-gray-900 font-semibold text-lg mb-2">
                            Petros Lyros
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Junior Software Developer
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-indigo-600 transition duration-200 hover:scale-110 transform"
                                    aria-label={link.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-indigo-200 mt-8 pt-6">
                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <div>
                            © {currentYear}{" "}
                            <span className="font-medium text-gray-900">
                                Petros Lyros
                            </span>
                            . All Rights Reserved.
                        </div>
                        <div className="text-xs text-gray-500">
                            Built with React • TypeScript • Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;