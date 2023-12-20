// import Navbar2 from "@components/navbar/dashboard";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar/default";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const noFooter = [
    // Producer pages list
    "/producer-approved",
    "/producer",
    "/product-default",
    "/product-intake-1",
    "/product-intake-2",
    "/product-intake-3",
    "/product-intake-4",
    "/product-completed",
    "/producer-pricing",
    "/producer-message",
    "/producer-help",
    "/producer-profile",
    // Evaluator pages list
    "/evaluator",
    "/evaluation-default",
    "/evaluation-page-1",
    "/evaluation-page-2",
    "/evaluation-page-3",
    "/evaluation-page-4",
    "/evaluation-completed",
    "/calendar",
    "/evaluator-payment",
    "/evaluator-notification",
    "/evaluator-message",
    "/evaluator-help",
    "/evaluator-profile",
    // Administrator pages list
    "/admin",
  ];
  const hideFooter = noFooter.includes(location.pathname);

  const newNav = [
    // Login page
    "/login",
    // Registration main landing page
    "/registration",
    // Producer Registration List
    "/producer-default",
    "/producer-page-1",
    "/producer-page-2",
    "/producer-page-3",
    "/producer-page-4",
    "/producer-completed",
    // Producer pages list
    "/producer-approved",
    "/producer",
    "/product-default",
    "/product-intake-1",
    "/product-intake-2",
    "/product-intake-3",
    "/product-intake-4",
    "/product-completed",
    "/producer-pricing",
    "/producer-message",
    "/producer-help",
    "/producer-profile",
    // Evaluator Registration List
    "/evaluator-default",
    "/evaluator-page-1",
    "/evaluator-page-2",
    "/evaluator-page-3",
    "/evaluator-page-4",
    "/evaluator-completed",
    // Evaluator pages list
    "/evaluator",
    "/evaluation-default",
    "/evaluation-page-1",
    "/evaluation-page-2",
    "/evaluation-page-3",
    "/evaluation-page-4",
    "/evaluation-completed",
    "/calendar",
    "/evaluator-payment",
    "/evaluator-notification",
    "/evaluator-message",
    "/evaluator-help",
    "/evaluator-profile",
    // Admin pages list
    "/admin",
  ];
  const newNav2 = newNav.includes(location.pathname);
  return (
    <>
      {newNav2 ? <></> : <NavBar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
