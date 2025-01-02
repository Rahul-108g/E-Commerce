import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ".././src/Component/Responsive/Responsive.css";
import { Provider } from "react-redux";
import { Store } from "./Store/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList from "./Component/PostList.jsx";
import Cart from "./Component/Cart.jsx";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />

      {/* for tostifier */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </Provider>
  </StrictMode>
);
