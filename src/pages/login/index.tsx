import { Link } from "react-router-dom";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
// import { BiErrorCircle } from "react-icons/bi";

export default function Login() {
  const [className, setClassName] = useState(
    "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-[#6D778C] border-[#888D95] font-semibold leading-6 border w-full"
  );

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setShowError(false);
  };

  const handleBlur = (e) => {
    const input = e.target.value;
    if (!input || !isValidEmail(input)) {
      setClassName(
        "mt-2 pt-2 pb-3 px-4 rounded-lg text-base border-[#E46D64] text-[#E46D64] font-semibold leading-6 border w-full"
      );
      setShowError(true);
    } else {
      setClassName(
        "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-[#6D778C] border-[#888D95] font-semibold leading-6 border w-full"
      );
      setShowError(false);
    }
  };

  function isValidEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [className2, setClassName2] = useState(
    "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-[#6D778C] border-[#888D95] font-semibold leading-6 border w-full"
  );
  const [showError2, setShowError2] = useState(false);

  const handleChange2 = (e) => {
    setShowError2(false);
  };

  const handleBlur2 = (e) => {
    const input = e.target.value;
    if (!input) {
      setClassName2(
        "mt-2 pt-2 pb-3 px-4 rounded-lg text-base border-[#E46D64] text-[#E46D64] font-semibold leading-6 border w-full"
      );
      setShowError2(true);
    } else {
      setClassName2(
        "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-[#6D778C] border-[#888D95] font-semibold leading-6 border w-full"
      );
      setShowError2(false);
    }
  };

  return (
    <div className="py-[142px] w-[316px] mx-auto">
      <section>
        <form>
          <h1 className="font-Manrope text-2xl font-normal leading-7 mb-6">
            Log in
          </h1>
          <p className="text-[#344054] text-sm font-medium leading-5 mb-2">
            Email
          </p>
          <div>
            <input
              type="text"
              // placeholder={
              //   showError ? (
              //     <>
              //       <span className="#E46D64">Email</span>
              //       <BiErrorCircle className="#E46D64" />
              //     </>
              //   ) : (
              //     "Email"
              //   )
              // }
              placeholder="Email"
              className={className}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {showError && (
              <p className="text-[#CC4B3B] text-xs font-Manrope font-normal leading-5">
                Email is required
              </p>
            )}
          </div>
          <div>
            <p className="text-[#344054] text-sm font-medium leading-5 mb-2">
              Password
            </p>
            <input
              type="password"
              placeholder="Password"
              className={className2}
              onChange={handleChange2}
              onBlur={handleBlur2}
            />
            {showError2 && (
              <p className="text-[#CC4B3B] text-xs font-Manrope font-normal leading-5">
                Password is required
              </p>
            )}
          </div>
        </form>
        <button className="text-[#3E5BD1] text-xs underline font-normal leading-7 pb-4">
          Forgot my password
        </button>
      </section>
      <section>
        <button className="text-white text-base text-center font-normal leading-5 rounded-md bg-[#5772DA] px-6 w-full h-8">
          Log in
        </button>
        <p className="text-center py-4">OR</p>
        <div className="border border-[#BE493A] w-full h-8 rounded-md mb-4">
          <button className="gap-1 flex items-center mx-auto text-[#BE493A] text-base font-normal leading-7">
            <FcGoogle />
            Login with Google
          </button>
        </div>
        <p className="text-[#344054] text-xs font-normal leading-7 text-center">
          By using Feedback you agree to the{" "}
          <span className="text-[#0563E0] text-xs font-normal leading-7">
            <Link to="/">Terms of Service</Link>
          </span>{" "}
          and{" "}
          <span className="text-[#0563E0] text-xs font-normal leading-7">
            <Link to="/">Privacy Policy</Link>
          </span>
        </p>
      </section>
    </div>
  );
}