import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "@contexts/UserContext";
import { auth } from "@components/api/firebase";

// React Icons
import { MdOutlineError } from "react-icons/md";

// interfaces for reducer
interface Action {
  type: "changeEmail" | "changePassword";
  value: string;
}

interface LoginInfo {
  email: string;
  password: string;
}

// reducer function for login email & password
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
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
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
    initialLoginState
  );

  // Login page at Default CSS
  const originalH1 = "font-manrope text-2xl font-normal mb-6";
  const originalLabel = "text-primary-B500 text-sm font-medium mb-2";

  const inputClass =
    "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-input border-borderInput font-semibold border w-full";
  const errorClass =
    "mt-2 pt-2 pb-3 px-4 rounded-lg text-base font-semibold border border-[#E46D64] w-full";
  const alertMessage = "text-error text-xs font-manrope font-normal";

  const [showError, setShowError] = useState(false); // for handleChange
  const [showError2, setShowError2] = useState(false); // for handleChange2

  // For Email Input,
  // handleChange function will allow the users to make any input
  // handleBlur function will check if the user has made a proper input
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
      errorClass;
      setShowError(true);
    } else {
      inputClass;
      setShowError(false);
    }
  };

  // the following function checks if the input is a valid email address with "@" and the domain
  function isValidEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // For password Input,
  // handleChange2 function will allow the users to make any input
  // handleBlur2 function will check if the user has made a proper input
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
      errorClass;
      setShowError2(true);
    } else {
      inputClass;
      setShowError2(false);
    }
  };

  // the following functions have installed the limit on how many times a user can attempt to login
  // the user is given up to 5 attempts at maximum and if they get their passwords wrong for more than 5 times, they will not be able to login.
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const maxLoginAttempts = 5;
  const remainingAttempts = maxLoginAttempts - loginAttempts;

  // Login Error CSS
  const loginError =
    "flex justify-center w-full border-red border-2 bg-errorBG rounded-xl mb-5";
  const loginErrorText = "text-error text-xs font-manrope font-normal py-4";
  const lockedOut =
    "flex justify-center w-full border-red border-2 bg-errorBG rounded-xl mb-5 px-5";

  const loginUser = async () => {
    if (loginAttempts >= maxLoginAttempts) {
      setErrorMessage(
        "Maximum login attempts reached. Please try again later."
      );
      return;
    }

    setLoginAttempts(0);
    if (!isValidEmail(loginInfo.email) || !loginInfo.password) {
      setErrorMessage("Invalid email or password");
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );
    } catch (err) {
      console.log(err);
      setLoginAttempts(loginAttempts + 1);
      setErrorMessage("Incorrect email or password");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      loginUser();
    }
  };

  return (
    <div className="py-[142px] w-[316px] mx-auto">
      <section>
        <form>
          {errorMessage && remainingAttempts > 0 && (
            <div className={loginError}>
              <p className={loginErrorText}>
                Please check your email and password.
                <br />
                you can try {remainingAttempts} more times.
              </p>
            </div>
          )}
          {remainingAttempts === 0 && (
            <div className={lockedOut}>
              <p className={loginErrorText}>
                You have reached the number of attempts that you can try. Please
                contact our Administrators at{" "}
                <a
                  href="mailto:info@letsruminate.org"
                  className="text-[blue] underline"
                >
                  info@letsruminate.org
                </a>{" "}
                for assistance.
              </p>
            </div>
          )}
          <h1 className={originalH1}>Log in</h1>
          <label className={originalLabel}>Email</label>
          <input
            type="text"
            placeholder="Email"
            className={showError ? errorClass : inputClass}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            value={loginInfo.email || ""}
          />
          {showError ? (
            <div className="flex mt-2 items-center mb-4">
              <MdOutlineError className="text-error mx-2" />
              <p className={alertMessage}>Email is required</p>
            </div>
          ) : null}
          <label className={originalLabel}>Password</label>
          <input
            type="password"
            placeholder="Password"
            className={showError ? errorClass : inputClass}
            onChange={handleChange2}
            onBlur={handleBlur2}
            value={loginInfo.password || ""}
            onKeyDown={handleKeyDown}
          />
          {showError2 ? (
            <div className="flex mt-2 items-center mb-4">
              <MdOutlineError className="text-error mx-2" />
              <p className={alertMessage}>Password is required</p>
            </div>
          ) : null}
        </form>
        <button className="text-buttonActive text-xs underline font-normal pb-4">
          Forgot my password
        </button>
      </section>
      <section>
        <button
          onClick={loginUser}
          className={
            remainingAttempts === 0
              ? "text-white text-base text-center font-normal leading-5 rounded-md bg-buttonDisabled px-6 w-full h-8"
              : "text-white text-base text-center font-normal leading-5 rounded-md bg-buttonActive px-6 w-full h-8"
          }
          type="button"
          disabled={remainingAttempts === 0}
        >
          Log in
        </button>
        <p className="text-primary-B500 text-xs font-normal text-center pt-4">
          By using Feedback you agree to the{" "}
          <span className="text-[#0563E0] text-xs font-normal">
            <Link to="/">Terms of Service</Link>
          </span>{" "}
          and{" "}
          <span className="text-[#0563E0] text-xs font-normal">
            <Link to="/">Privacy Policy</Link>
          </span>
        </p>
      </section>
    </div>
  );
}
