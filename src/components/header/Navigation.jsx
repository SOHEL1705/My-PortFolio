import { useState } from "react";
import sohel from "../../assets/icons/Sohel_.svg";
import Wrapper from "../Wrapper";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  { uid: 1, label: "Home", path: "#home" },
  { uid: 2, label: "About", path: "#about" },
  { uid: 3, label: "Projects", path: "#projects" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <header className="fixed top-0 left-0 w-full z-50 p-2 text-gray-100 bg-gradient-to-r from-slate-950/10 via-slate-900/50 to-slate-950/90 backdrop-blur-md shadow-md">
        <div className="container flex justify-between mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={sohel} alt="sohel" className="w-24 h-full" />
          </a>

          <ul className="items-stretch hidden space-x-3 md:flex">
            {links.map(({ uid, label, path }) => (
              <li key={uid} className="flex">
                <a
                  rel="noopener noreferrer"
                  href={path}
                  className={`flex items-center px-4 -mb-1 border-b-2 ${
                    uid === 1
                      ? "text-slate-400 dark:text-red-500 border-blue-400 dark:border-blue-500"
                      : "dark:border-transparent"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          {open ? (
  <button
    className="absolute top-4 right-4 text-xl"
    onClick={() => setOpen(false)}
  >
    <AiOutlineClose  className="w-4 h-4" />
  </button>
) : (
  <button
    className="absolute top-4 right-4 text-xl md:hidden"
    onClick={() => setOpen(true)}
  >
    <VscLayoutSidebarRight className="w-4 h-4" />
  </button>
)}

        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-slate-900 text-white shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        
        <ul className="flex flex-col space-y-6 mt-20 px-6">
          {links.map(({ uid, label, path }) => (
            <li key={uid}>
              <a
                rel="noopener noreferrer"
                href={path}
                className="block text-lg font-medium hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navigation;
