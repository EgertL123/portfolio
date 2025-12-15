import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiMariadb,
    SiMongodb,
    SiPhp,
    SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Skill {
    name: string;
    icon: IconType;
}

export const skills: Skill[] = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Java', icon: FaJava },
    { name: 'CSS', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'MariaDB', icon: SiMariadb },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PHP', icon: SiPhp },
    { name: 'MySQL', icon: SiMysql }
];
