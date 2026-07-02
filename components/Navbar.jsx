const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-8 bg-[#F5F3EF]/80 backdrop-blur-md px-8 py-4 rounded-full border border-[#D8D3CC] shadow-sm">
        {[
          ["Home", "#home"],
          ["About", "#about"],
          ["Projects", "#projects"],
          ["Resume", "#resume"],
          ["Contact", "#contact"],
        ].map(([title, href]) => (
          <li key={title}>
            <a
              href={href} className=" relative px-2 py-1 text-[#52525B] uppercase tracking-[0.18em] text-sm font-medium transition-colors duration-300 hover:text-black
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px]  after:w-0  after:bg-black after:transition-all  after:duration-300  hover:after:w-full
              "
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;