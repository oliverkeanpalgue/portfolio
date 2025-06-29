import SocialLinks from "../../sections/Home/components/SocialLinks"
function Home() {
  return (
    <section id="home" className="w-full h-1/2 p-18">
      <div className="flex justify-between gap-2">
        <div className="w-1/2">
          <div className="mb-5">
            <h1 className="text-6xl text-purple-900 font-bold mr-3">
              Oliver Kean Palgue
            </h1>
            <p className="text-2xl text-gray-600 mt-1.5 mb-2">
              Full Stack Developer
            </p>
            <SocialLinks/>
          </div>

          <a
            href="#projects"
            className="bg-purple-950 hover:bg-purple-900 text-white px-3 py-2 rounded-full font-medium transition-colors"
          >
            View My Projects
          </a>
        </div>

        <div className="w-1/2">
          <p className="text-gray-700 ">
            Hi! I’m{" "}
            <span className="text-purple-900 font-bold text-lg">
              Oliver Kean Palgue
            </span>
            , a full stack developer who enjoys creating websites and
            applications that are helps in providing solutions. I’ve worked on
            different kinds of projects. I use PHP, Laravel, Vue.js, WordPress,
            and MySQL to build my projects, and I like working on both the
            frontend and the backend development. I’m always learning new things
            and love finding simple solutions to real-world problems. I enjoy
            working with others and creating, functional websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
