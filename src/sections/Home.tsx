function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    Hello, my name is{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Egert Linnas
                    </span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                    I am a 21-year-old student, currently studying at Tartu Vocational College to become a junior software developer
                </h2>
            </div>
        </section>
    );
}

export default Home;
