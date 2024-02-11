import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/home/HomeScreen.tsx";
import PhotosScreen from "./pages/photos/PhotosScreen.tsx";
import ErrorScreen from "./pages/error/ErrorScreen.tsx";
import SinglePostScreen from "./pages/singlePost/SinglePostScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/photos",
    element: <PhotosScreen />,
  },
  {
    path: "/posts/:id",
    element: <SinglePostScreen />,
  },
  {
    path: "*",
    element: <ErrorScreen />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
