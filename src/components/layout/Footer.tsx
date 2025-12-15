function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Egert Linnas. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
