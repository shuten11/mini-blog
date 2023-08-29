import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { AppLayout } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import PostDetails from "./pages/PostDetails/BlogDetails";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <AppLayout>
        <ErrorPage />
      </AppLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/posts/:id", element: <PostDetails /> },
      { path: "/posts/:id/edit", element: <div>Edit</div> },
      { path: "/posts/:id/destroy" },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
