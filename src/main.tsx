import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import * as L from "@/components/lazy/LazyComponents.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/home",
    element: <L.LazyHomeScreen /> 
  },
  {
    path: "/photos",
    element: <L.LazyPhotosScreen />,
  },
  {
    path: "/posts/:id",
    element: <L.LazySinglePostScreen />,
  },
  {
    path: "*",
    element: <L.LazyErrorScreen />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
