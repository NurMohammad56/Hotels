import React from "react";
import adminPng from "../../asstes/hero-carosel/admin.png";
import { NavLink } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <div className="space-y-5 bg-white p-6 md:h-[calc(100vh-98px)] flex flex-col justify-between">
      {/* Header section */}
      <div className="mb-4">
        <img src={adminPng} alt="" className="size-12" />
        <p className="font-semibold">Admin</p>
      </div>
      <hr />
      <ul className="text-sm">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-bold" : ""
            }
          >
            {" "}
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-new-post"
            className={({ isActive }) => (isActive ? "text-green " : "")}
          >
            {" "}
            Add new post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-items"
            className={({ isActive }) => (isActive ? "text-green " : "")}
          >
            {" "}
            Manage items
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/user"
            className={({ isActive }) => (isActive ? "text-green " : "")}
          >
            {" "}
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
