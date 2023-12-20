import Producer from "@assets/registration/landing-page/producer.png";
import Evaluator from "@assets/registration/landing-page/evaluator.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (selectedAccount === "producer") {
      navigate("/producer-default");
    } else if (selectedAccount === "evaluator") {
      navigate("/evaluator-default");
    }
  };

  const selectAccount = (account: string) => {
    setSelectedAccount(account);
  };

  const [hover, setHover] = useState(false);

  return (
    <div className="px-32 my-12">
      <h1 className="text-5xl font-manrope font-bold">Welcome to Feedback!</h1>
      <h3 className="text-2xl font-manrope font-semibold mt-9">
        Choose your account type
      </h3>
      <div className="flex items-start grid-cols-2">
        <div className="w-full">
          <div
            className={`my-7 px-16 py-14 flex gap-14 border border-black rounded-lg cursor-pointer ${
              selectedAccount === "producer" ? "bg-gray-200" : ""
            }`}
            onClick={() => selectAccount("producer")}
          >
            <div>
              <h3 className="text-2xl font-manrope font-semibold">Producer</h3>
              <p className="text-base font-manrope font-normal mt-2">
                For producers who want to get their food evaluated
              </p>
            </div>
            <div>
              <img src={Producer} alt="Producer" width={144} height={126} />
            </div>
          </div>
          <div
            className={`px-16 py-14 flex gap-14 border border-black rounded-lg cursor-pointer ${
              selectedAccount === "evaluator" ? "bg-gray-200" : ""
            }`}
            onClick={() => selectAccount("evaluator")}
          >
            <div>
              <h3 className="text-2xl font-manrope font-semibold">Evaluator</h3>
              <p className="text-base font-manrope font-normal mt-2">
                For evaluators who want to evaluate products
              </p>
            </div>
            <div>
              <img src={Evaluator} alt="Evaluator" width={144} height={126} />
            </div>
          </div>
          <div className="text-center mt-4 mb-8">
            <button
              className={`rounded-2xl py-4 w-full text-white cursor-pointer ${
                hover ? "bg-[#38a2d6]" : "bg-[#023047]"
              }`}
              type="button"
              onClick={handleGetStarted}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              disabled={!selectedAccount}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="ml-32 mt-7">
          <h3 className="text-xl font-manrope font-bold">
            A Feedback account is the best way to manage your personal products,
            evaluations, and market price performance.
          </h3>
          <h6 className="text-xl font-manrope font-bold mt-8">
            Access to Feedback library and tools
          </h6>
          <p className="text-base font-manrope font-medium mt-4">
            Get the best
          </p>
          <h6 className="text-xl font-manrope font-bold mt-10">
            Access to Feedback library and tools
          </h6>
          <p className="text-base font-manrope font-medium mt-4">
            Get the best
          </p>
          <h6 className="text-xl font-manrope font-bold mt-10">
            Anytime, anywhere
          </h6>
          <p className="text-base font-manrope font-medium mt-4">
            Stay on top of the markets with the Feedback, responsive on all
            devices.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
