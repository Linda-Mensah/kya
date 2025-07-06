import { MenuIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = location.pathname;

  return (
    <div>
      <nav className="py-2 px-6 md:flex md:justify-between md:items-center bg-gray-900 text-white fixed w-full z-99">
        <div className="flex justify-between p-2">
          <Link to="/">
            <span>LOGO</span>
          </Link>

          <div className="px-4 cursor-pointer md:hidden">
            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <ul
          className={`text-sm font-medium px-2 gap-1 text-white ${
            isOpen ? "flex" : "hidden"
          } flex-col items-end md:flex md:flex-row md:items-center md:justify-between md:gap-3`}
        >
          <Link to="/">
            <li
              className={`transition ease-in-out duration-500 cursor-pointer ${
                currentPath === "/"
                  ? "text-orange-500 border-b-2 border-orange-500 font-semibol"
                  : "text-white"
              }`}
            >
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              className={`transition easein--out duration-500 cursor-pointer ${
                currentPath === "/about"
                  ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                  : "text-white"
              }`}
            >
              About
            </li>
          </Link>

          <Link to="/programs">
            <li
              className={`transition ease-in-out duration-500 cursor-pointer ${
                currentPath === "/programs"
                  ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                  : "text-text"
              }`}
            >
              Programs
            </li>
          </Link>

          <Link to="/join">
            <li
              className={`transition ease-in-out duration-500 cursor-pointer ${
                currentPath === "/join"
                  ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                  : "text-white"
              }`}
            >
              Join
            </li>
          </Link>
        </ul>
        <div className="hidden md:flex md:items-center md:justify-center">
          <span>
            <PhoneIcon className="size-5" />
          </span>
          <span>+233 20 000 0000</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
