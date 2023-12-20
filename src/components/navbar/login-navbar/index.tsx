import { Link } from "react-router-dom";
import BrandLogo from "@assets/brand/brand-logo.svg";

export default function LoginNavbar() {
  return (
    <>
      <nav className="bg-[#0F7B41] w-full h-20 py-8 px-14 flex justify-between items-center relative">
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <div className="flex items-center gap-14">
          <Link to="/about-us">
            <button className="text-white text-xl font-manrope font-normal">
              About us
            </button>
          </Link>
          <Link to="/how-it-works">
            <button className="text-white text-xl font-manrope font-normal">
              How it works
            </button>
          </Link>
          <Link to="/pricing">
            <button className="text-white text-xl font-manrope font-normal">
              Pricing
            </button>
          </Link>
        </div>
        <Link to="/registration">
          <button className="text-[#0F7B41] text-xl shrink-0 w-48 h-11 rounded-2xl bg-white text-center font-manrope font-bold">
            GET STARTED
          </button>
        </Link>
      </nav>
    </>
  );
}
