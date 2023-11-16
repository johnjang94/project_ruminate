import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { UserContext } from "@contexts/UserContext";
import { auth } from "@components/api/firebase";
import alertCircle from "@assets/images/alert-circle.svg";

// interfaces for reducer
interface Action {
  type: "changeEmail" | "changePassword";
  value: string;
}

interface LoginInfo {
  email: string;
  password: string;
}

// reducer function for login email & pass
function loginReducer(loginInfo: LoginInfo, action: Action) {
  switch (action.type) {
    case "changeEmail":
      return { ...loginInfo, email: action.value };
    case "changePassword":
      return { ...loginInfo, password: action.value };
    default:
      throw Error(`unknown action: ${action.type}`);
  }
}

export default function Login() {
  // get the logged in user (or lack thereof) from context provider
  const user = useContext(UserContext);

  // for redirecting to dashboard if a user is already signed in
  const navigate = useNavigate();

  useEffect(() => {
    // will redirect user to correct dashboard according to their role
    if (user) {
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "producer":
          navigate("/producer");
          break;
        case "evaluator":
          navigate("/evaluator");
          break;
        default:
          // XXX
          // what should we do here, if for some reason user doesn't have role?
          break;
      }
    }
  });

  const initialLoginState = {
    email: "",
    password: "",
  };

  const [loginInfo, dispatchLoginInfo] = useReducer(
    loginReducer,
    initialLoginState,
  );

  const [className, setClassName] = useState(
    "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-[#6D778C] border-[#888D95] font-semibold leading-6 border w-full"
  );

  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setShowError(false);
    dispatchLoginInfo({
      type: "changeEmail",
      value: target.value,
    });
  };

  const handleBlur = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const input = target.value;
    if (!input || !isValidEmail(input)) {
      setClassName(
        "mt-2 pt-2 pb-3 px-4 rounded-lg text-base border-[#E46D64] text-[#E46D64] font-semibold leading-6 border w-full placeholder-[#E46D64]"
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

  const handleChange2 = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    dispatchLoginInfo({
      type: "changePassword",
      value: target.value,
    });
  };

  const handleBlur2 = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const input = target.value;
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

  const loginUser = async () => {
    // XXX
    // gotta validate input before attempting login
    try {
      await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password,
      );
    } catch (err) {
      // XXX
      // Handle better (display to user)
      console.error(err);
    }
  };

  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
      loginUser(); 
    }
  });

  const provider = new GoogleAuthProvider();

  const loginUserGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      // XXX
      // Handle better (display to user)
      console.error(err);
    }
  };

  return (
    <div className="py-[142px] w-[316px] mx-auto">
      <section>
        <form>
          <h1 className="font-Manrope text-2xl font-normal leading-7 mb-6">
            Log in
          </h1>
          <label className="text-[#344054] text-sm font-medium leading-5 mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className={className}
              onChange={handleChange}
              onBlur={handleBlur}
              value={loginInfo.email || ""}
            />
            {showError ? (
              <img
                alt=""
                // XXX
                // hard-coded these offsets here...better solution?
                className="absolute right-0 -mt-8 mr-3"
                src={alertCircle}
              />
            ) : null}
            {showError && (
              <p className="text-[#CC4B3B] text-xs font-Manrope font-normal leading-5">
                Email is required
              </p>
            )}
          </div>
          <div className="relative">
            <label className="text-[#344054] text-sm font-medium leading-5 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className={className2}
              onChange={handleChange2}
              onBlur={handleBlur2}
              value={loginInfo.password || ""}
            />
            {showError2 ? (
              <img
                alt=""
                // XXX
                // hard-coded these offsets here...better solution?
                className="absolute right-0 -mt-8 mr-3"
                src={alertCircle}
              />
            ) : null}
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
        <button
          onClick={loginUser}
          className="text-white text-base text-center font-normal leading-5 rounded-md bg-[#5772DA] px-6 w-full h-8"
        >
          Log in
        </button>
        <p className="text-center py-4">OR</p>
        <div className="border border-[#BE493A] w-full h-8 rounded-md mb-4">
          <button
            onClick={loginUserGoogle}
            className="gap-1 flex items-center mx-auto text-[#BE493A] text-base font-normal leading-7"
          >
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
