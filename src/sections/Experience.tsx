import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { experiences } from '../data/experience';

function Experience() {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-24">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold my-12 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Experience
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg border transition-all duration-300 ${
                                exp.current
                                    ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20 hover:border-green-400'
                                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-blue-400'
                            }`}
                        >
                            <div className="flex flex-col items-center justify-center mb-4 gap-2 text-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                                </div>
                                {exp.current && (
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                        Current
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-2 text-md text-gray-400">
                                <FontAwesomeIcon icon={faCalendar} className="text-blue-400" />
                                <p>{exp.period}</p>
                            </div>
                            {exp.location && (
                                <div className="flex items-center justify-center gap-2 mb-4 text-md text-gray-500">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-400" />
                                    <p>{exp.location}</p>
                                </div>
                            )}
                            <p className="text-gray-300 mb-4 text-center">{exp.description}</p>
                            {exp.technologies && (
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;