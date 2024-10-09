import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <header className="bg-white py-6 border">
        <nav className="container mx-auto flex justify-between px-5">
          <a href="/">
            <img src="/Logo.png" alt="" className="h-7" />
          </a>
          <ul className="sm:flex hidden items-center gap-6">
            {navLists.map((list, index) => {
              return (
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={`${list.path}`}
                  >
                    {list.name}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>

          {/* Toggle Menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-3 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <IoClose className="size-6" />
              ) : (
                <GiHamburgerMenu className="size-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu items */}
        {isMenuOpen && (
          <ul className="fixed top-[100px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
            {navLists.map((list, index) => {
              return (
                <li className="mt-5 px-4">
                  <NavLink
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={`${list.path}`}
                  >
                    {list.name}
                  </NavLink>
                </li>
              );
            })}
            <li className="mt-5 px-4">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};
export default Navbar;
