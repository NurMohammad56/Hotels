import React from "react";
import adminPng from "../../asstes/hero-carosel/admin.png";
import { NavLink } from "react-router-dom";
import { useLogoutUserMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";

const AdminNavigation = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Faild to logout", error);
    }
  };

  return (
    <div className="space-y-5 bg-white p-6 md:h-[calc(100vh-98px)] flex flex-col justify-between">
      {/* Header section */}
      <div>
        <div className="mb-4">
          <img src={adminPng} alt="" className="size-12" />
          <p className="font-semibold">Admin</p>
        </div>
        <hr />
        <ul className="text-sm space-y-4 pt-5">
          <li>
            <NavLink
              to="/dashboard"
              end
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
              className={({ isActive }) =>
                isActive ? "text-green-600 font-bold" : ""
              }
            >
              {" "}
              Add new post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage-items"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-bold" : ""
              }
            >
              {" "}
              Manage items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-bold" : ""
              }
            >
              {" "}
              User
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <hr />
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 font-medium px-4 py-1 rounded-sm mt-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavigation;
