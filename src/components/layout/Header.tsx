import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setIsOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
                <li className="mx-2"><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                <li className="mx-2"><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
                <li className="mx-2"><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
                <li className="mx-2"><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                <li className="mx-2"><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;
