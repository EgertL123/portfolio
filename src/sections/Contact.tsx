import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-24">
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Contact Me
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    If you see me as a suitable candidate for your next project, do not hesitate to contact me so we can further discuss our cooperation.
                </p>
                <div className="flex justify-center gap-8">
                    <a
                        href="mailto:egert.linnas@voco.ee"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center hover:bg-red-500/30 hover:border-red-400 transition-all duration-300"
                        aria-label="Email"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="text-red-400 text-2xl md:text-3xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/egert-linnas-0113b1263/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/30 hover:border-blue-400 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-2xl md:text-3xl" />
                    </a>
                    <a
                        href="https://github.com/EgertL123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-purple-400 text-2xl md:text-3xl" />
                    </a>
                    <a
                        href="https://www.canva.com/design/DAGVVAg0qoI/HFOrzBd12zZHNXNkuXdnAA/edit?utm_content=DAGVVAg0qoI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center hover:bg-green-500/30 hover:border-green-400 transition-all duration-300"
                        aria-label="CV"
                    >
                        <FontAwesomeIcon icon={faFileAlt} className="text-green-400 text-2xl md:text-3xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
