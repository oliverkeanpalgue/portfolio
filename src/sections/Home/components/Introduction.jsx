import SocialLinks from "./SocialLinks"

function Introduction({name, role}){
    return (
        <div className="w-1/2">
          <div className="mb-5">
            <h1 className="text-6xl text-purple-900 font-bold mr-3">
              {name}
            </h1>
            <p className="text-2xl text-gray-600 mt-1.5 mb-2">
              {role}
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
    )
}

export default Introduction;