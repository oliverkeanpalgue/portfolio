function Home() {
  return (
    <section id="home" className="w-full p-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl mb-8 text-purple-900 font-bold">Oliver Kean Palgue</h1>
          <a
            href="#projects"
            className="bg-purple-950 hover:bg-purple-900 text-white p-2 rounded-full font-medium transition-colors"
          >
            View My Projects
          </a>
        </div>

        <div>
            {/* paragrpah */}
        </div>
      </div>
    </section>
  );
}

export default Home;
