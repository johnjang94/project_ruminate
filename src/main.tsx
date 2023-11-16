import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserContextProvider from "./contexts/UserContext.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// List of pages
import NotFound from "@pages/404/index.tsx";
import Home from "@pages/home/index.tsx";
import Login from "@pages/login/index.tsx";
import AboutUs from "@pages/about-us/index.tsx";
import HowItWorks from "@pages/how-it-works/index.tsx";
import Price from "@pages/pricing/index.tsx";

// Detail page for Members
import AdminDashboard from "@pages/admin/admin-dashboard/index.tsx";
import ProducerDashboard from "@pages/producer/producer-dashboard/index.tsx";
import EvaluatorDashboard from "@pages/evaluator/evaluator-dashboard/index.tsx";
import LoginPage from "@pages/login-page/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/pricing", element: <Price /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/producer", element: <ProducerDashboard /> },
      { path: "/evaluator", element: <EvaluatorDashboard /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
