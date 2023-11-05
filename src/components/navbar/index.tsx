import { Link } from "react-router-dom";
import BrandLogo from "@assets/images/brand-logo.svg";

// REACT ICONS HERE
import { CgProfile } from "react-icons/cg";
import { login } from "../api/firebase";

export default function NavBar() {
  return (
    <nav className="bg-brand-green w-full h-[86px] flex justify-between items-center px-10">
      <Link to="/">
        <img alt="Feedback logo" src={BrandLogo} />
      </Link>
      <div className="gap-3 flex items-center">
        <CgProfile className="text-2xl text-white cursor-pointer" />
        <button onClick={() => login()} className="text-2xl text-white">
          Login
        </button>
      </div>
    </nav>
  );
}
