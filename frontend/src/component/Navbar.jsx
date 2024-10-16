import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import avatar from "../asstes/hero-carosel/pexels-photo-261169.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";

import { logout } from "../redux/features/auth/authSlice";

const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [logoutUser] = useLogoutUserMutation();

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
                <li key={index}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={`${list.path}`}
                  >
                    {list.name}
                  </NavLink>
                </li>
              );
            })}
            {user && user.role === "user" ? (
              <li className="flex items-center gap-2">
                <img src={avatar} alt="" className="size-7 rounded-3xl" />

                <button
                  onClick={handleLogout}
                  className="bg-[#009808] py-1 px-4 text-white rounded"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}

            {user && user.role === "admin" && (
              <li className="flex items-center gap-2">
                <img src={avatar} alt="" className="size-7 rounded-3xl" />
                <Link to={"/dashboard"}>
                  <button className="bg-[#009808] py-1 px-4 text-white rounded">
                    Dashboard
                  </button>
                </Link>
              </li>
            )}
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
                <li className="mt-5 px-4" key={index}>
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
