
function Description({name}){
    return (
        <div className="w-1/2">
          <p className="text-gray-700 mb-5">
            Hi! I’m{" "}
            <span className="text-purple-900 font-bold text-lg">
              {name}
            </span>
            , a full stack developer who enjoys creating websites and
            applications that are helps in providing solutions. I’ve worked on
            different kinds of projects. I use PHP, Laravel, Vue.js, WordPress,
            and MySQL to build my projects, and I like working on both the
            frontend and the backend development. I’m always learning new things
            and love finding simple solutions to real-world problems. I enjoy
            working with others and creating, functional websites.
          </p>

          <a
            href="#projects"
            className="bg-purple-950 hover:bg-purple-900 text-white px-3 py-2 rounded-full font-medium transition-colors"
          >
            View My Projects
          </a>
        </div>
    )
}

export default Description;