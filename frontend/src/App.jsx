import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <>
      <div className="bg-bgPrimary min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <footer className="mt-auto">Footer</footer>
      </div>
    </>
  );
}
