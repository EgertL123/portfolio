export interface Project {
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
    github?: string;
    inProgress?: boolean;
}

export const projects: Project[] = [
    {
        title: 'VOCO Bingo',
        description: 'Simple bingo game about basic knowledge of IT terms that was brought to life by a team of 4.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        link: 'https://github.com/JarlBurget/ITBingoEdu',
    },
    {
        title: 'PACE App',
        description: 'A mobile app that lets you track your daily steps and cooperate with friends to defeat bosses.',
        technologies: ['React Native', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        link: 'https://github.com/CarlRobertMots/PACE',
        inProgress: true,
    },
    {
        title: 'CRUD Operation',
        description: 'Create, Read, Update and Delete operations using Java and MySQL.',
        technologies: ['Java', 'MySQL', 'Bootstrap'],
        link: 'https://github.com/EgertL123/MyWebApp',
    },
    {
        title: 'Weather App',
        description: 'Simple weather app that uses API to fetch weather data based on location.',
        technologies: ['JavaScript', 'Bootstrap'],
        link: 'https://github.com/EgertL123/weather_express',
    },
];
