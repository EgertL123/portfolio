import { skills } from '../data/skills';

function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-gray-800/70 transition-all duration-300"
                        >
                            <skill.icon className="text-4xl mb-3 text-blue-400 mx-auto" />
                            <span className="block text-lg md:text-xl text-gray-200 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
