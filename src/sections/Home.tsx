import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    Hello, my name is{' '}
                    <span className="text-blue-400 bg-clip-text">
                        Egert Linnas
                    </span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                    I am a 21-year-old junior software developer
                </h2>
                <div className="mt-8">
                    <FontAwesomeIcon icon={faArrowDown} className="text-blue-400 text-3xl animate-bounce" />
                </div>
            </div>
        </section>
    );
}

export default Home;
