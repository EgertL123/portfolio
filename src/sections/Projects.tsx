import { projects } from '../data/projects';

function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold my-12 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg border transition-all duration-300 ${
                                project.inProgress
                                    ? 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-400'
                                    : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                {project.inProgress && (
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                        In Progress
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            {project.technologies && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {(project.link || project.github) && (
                                <div className="flex gap-4">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            View Project
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
