function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 py-8 border-b border-gray-200 bg-white shadow-sm">
      <a href="#home" className="text-purple-950 text-3xl font-bold">
        Oliver Kean Palgue
      </a>
      <ul className="flex gap-8">
        <li>
          <a href="#home" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;