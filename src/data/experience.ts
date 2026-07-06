export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    technologies?: string[];
    location?: string;
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        company: 'Prakti.net',
        position: 'Software Development',
        period: 'Jan 2026 - May 2026',
        description: 'Mainly took projects from clients which included WordPress projects and a forest valuation calculator. Also worked on my thesis aside from the client projects.',
        technologies: ['React', 'TypeScript', 'PHP', 'Supabase', 'WordPress', 'Tailwind CSS'],
        location: 'Tartu, Estonia',
    },
    {
        company: 'University of Tartu IT Department',
        position: 'Web Development',
        period: 'Apr 2025 - Jun 2025',
        description: 'Worked in a web team on projects for the University of Tartu, such as Sisu@UT, Moodle and Futulab. In addition, I also updated the documentation for setting up WPML and adding translations.',
        technologies: ['WordPress', 'PHP', 'Tailwind CSS', 'JavaScript'],
        location: 'Tartu, Estonia',
    },
];