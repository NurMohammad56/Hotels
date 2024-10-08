import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <nav>Navbar</nav>
        <div>
          <Outlet />
        </div>
        <footer>Footer</footer>
      </div>
    </>
  );
}
