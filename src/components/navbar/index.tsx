import { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";
import { UserContext } from "@contexts/UserContext";
import BrandLogo from "@assets/images/brand-logo.svg";

function getDashboardRoute(role: "admin" | "producer" | "evaluator" | null) {
  if (role) {
    return role;
  }
  // XXX
  // somehow we got a user with "null" role...what should we do?
  return "login";
}

async function signOutUser() {
  try {
    await signOut(auth);
  } catch (err) {
    // XXX
    // Handle better
    console.error(err);
  }
}

export default function NavBar() {
  const user = useContext(UserContext);

  // XXX
  // i just copied & tweaked the navbar code below for now - sean
  if (user) {
    return (
      <>
        <div className="flex justify-end bg-black w-full h-10 text-right px-[73px] pt-2 pb-1">
          <div className="flex gap-6">
            <Link to={`/${getDashboardRoute(user.role)}`}>
              <button className="text-white text-xl font-Manrope font-semibold">
                My Dashboard
              </button>
            </Link>
            <button
              className="text-white text-xl font-Manropoe font-semibold"
              onClick={signOutUser}
              type="button"
            >
              Sign Out
            </button>
          </div>
        </div>
        <nav className="bg-[#0F7B41] w-full h-[88px] py-8 px-14 flex justify-between items-center">
          <Link to="/">
            <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
          </Link>
          <div className="flex items-center gap-14">
            <Link to="/about-us">
              <button className="text-white text-xl font-semibold font-Manrope">
                About us
              </button>
            </Link>
            <Link to="/how-it-works">
              <button className="text-white text-xl font-semibold font-Manrope">
                How it works
              </button>
            </Link>
            <Link to="/pricing">
              <button className="text-white text-xl font-semibold font-Manrope">
                Pricing
              </button>
            </Link>
          </div>
          <div></div>
        </nav>
      </>
    );
  }

  return (
    <>
      <div className="bg-black w-full h-10 text-right px-[73px] pt-2 pb-1">
        <Link to="/login">
          <button className="text-white text-xl font-Manrope font-semibold">
            Login
          </button>
        </Link>
      </div>
      <nav className="bg-[#0F7B41] w-full h-[88px] py-8 px-14 flex justify-between items-center">
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <div className="flex items-center gap-14">
          <Link to="/about-us">
            <button className="text-white text-xl font-semibold font-Manrope">
              About us
            </button>
          </Link>
          <Link to="/how-it-works">
            <button className="text-white text-xl font-semibold font-Manrope">
              How it works
            </button>
          </Link>
          <Link to="/pricing">
            <button className="text-white text-xl font-semibold font-Manrope">
              Pricing
            </button>
          </Link>
        </div>
        <button className="text-[#0F7B41] shrink-0 w-[200px] h-11 rounded-2xl bg-white">
          GET STARTED
        </button>
      </nav>
    </>
  );
}
