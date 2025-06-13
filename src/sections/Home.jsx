function Home() {
    return (
    <section id="home" className="w-full max-w-4xl p-8 bg-white shadow-md rounded-lg mt-8">
          <h1 className="text-4xl font-bold text-purple-950 mb-4">Welcome to My Portfolio</h1>
          <p className="text-gray-700 mb-6">
            Hi, I'm Oliver Kean Palgue, a passionate web developer with a love for creating beautiful and functional websites.
          </p>
          <a href="#projects" className="text-purple-950 hover:text-purple-700 font-semibold transition-colors">
            View My Projects
          </a>
        </section>
    );
}

export default Home;