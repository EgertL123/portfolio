function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left">
                        In 2023, I graduated Luunja Secondary School with a letter of accomodation, after graduating I served in the Estonian Defence Forces for 8 months. Since I have had an interest for computers and software development for a very long time, I figured it would be the perfect job to do, so in 2024 summer I applied to study at Tartu Vocational College to become a junior software developer. I am a hard-working, responsible person with great attention to detail. I enjoy spending my free time working out or behind the computer, playing games and learning coding through different websites.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
