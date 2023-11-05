import { CgProfile } from "react-icons/cg";
import brandLogo from "../../assets/images/brand-logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-brand-green px-[72px] py-[30px] flex justify-between">
      <Link to="/">
        <img alt="Feedback logo" src={brandLogo} />
      </Link>
      <div className="flex items-center gap-3">
        <button>
          <CgProfile className="text-3xl text-white cursor-pointer" />
        </button>
        <button className="text-white text-2xl">Login</button>
      </div>
    </nav>
  );
}
