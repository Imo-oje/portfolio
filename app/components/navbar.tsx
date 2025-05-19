import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full p-6 rounded-2xl relative bg-transparent">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-align-horizontal-justify-center-icon lucide-align-horizontal-justify-center"
          >
            <rect width="6" height="14" x="2" y="5" rx="2" />
            <rect width="6" height="10" x="16" y="7" rx="2" />
            <path d="M12 2v20" />
          </svg>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="border p-1 rounded-full cursor-pointer"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </div>
        <ul
          className={`${
            isOpen
              ? "absolute top-0 border-1 dark:bg-gray-950 -z-1 w-full left-0 flex flex-col justify-center items-center pt-20 pb-16 space-y-6  rounded-xl font-bold capitalize"
              : "hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="px-2 rounded-sm">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default Navbar;
