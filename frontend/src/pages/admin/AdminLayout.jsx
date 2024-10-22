import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

const AdminLayout = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start mt-6">
      <header className="lg:w-1/5 sm:w-2/5 w-full">
        <AdminNavigation />
      </header>
      <main className="p-8 bg-white w-full">
        <p>For admin content</p>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
