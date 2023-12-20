import { Link } from "react-router-dom";
import BrandLogo from "@assets/brand/brand-logo.svg";
import { useState } from "react";

export default function RegistrationNavbar() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="bg-black w-full px-[73px] pt-2 pb-10">
        <div className="flex gap-2 float-right items-center">
          <p className="text-white text-xl font-manrope font-normal">
            Already have an account?
          </p>
          <Link to="/login">
            <button
              className={`text-xl font-manrope font-normal ${
                hover
                  ? "bg-white px-2 py-1 rounded-lg text-black"
                  : "text-white"
              }`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
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
        {/* I am leaving the following button empty so that the spacing balance can be maintained */}
        <button className="text-[#0F7B41] w-48 h-11 rounded-2xl" disabled>
          .
        </button>
      </nav>
    </>
  );
}
