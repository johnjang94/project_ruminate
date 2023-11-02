import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from "./contexts/GeneralContext";
import Home from "./pages/home";
import Root from "./pages/root";
import AdminDashboard from "./pages/admin/admin-dashboard";
import ProducerDashboard from "./pages/producer/producer-dashboard";
import EvaluatorDashboard from "./pages/evaluator/evaluator-dashboard";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <GeneralContextProvider>
          <Root />
        </GeneralContextProvider>
      ),
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/admin", element: <AdminDashboard /> },
        { path: "/producer", element: <ProducerDashboard /> },
        { path: "/evaluator", element: <EvaluatorDashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
