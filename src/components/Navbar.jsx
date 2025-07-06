import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="p-2 md:flex md:justify-between md:items-center bg-black text-white fixed w-full z-99">
        <div className="flex justify-between p-2">
          <Link to="/">
            <span>LOGO</span>
          </Link>

          <div className="px-4 cursor-pointer md:hidden">
            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <ul
          className={`text-sm px-2 gap-1 text-white ${
            isOpen ? "flex" : "hidden"
          } flex-col items-end md:flex md:flex-row md:items-center md:justify-between md:gap-3`}
        >
          <Link to="/">
            <li className="hover:text-amber-400 transition ease-out duration-500 cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hover:text-amber-400 transition ease-out duration-500 cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/programs">
            <li className="hover:text-amber-400 transition ease-out duration-500 cursor-pointer">
              Programs
            </li>
          </Link>

          <Link to="/join">
            <li className="hover:text-amber-400 transition ease-out duration-500 cursor-pointer">
              Join
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
