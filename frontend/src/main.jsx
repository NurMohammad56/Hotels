import ReactDom from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
