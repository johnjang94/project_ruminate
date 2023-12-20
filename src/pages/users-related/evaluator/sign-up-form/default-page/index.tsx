// Default Stage
// The Sandwich
import StepOneInactive from "@assets/registration/progress-bar-1/step-1/step-1-inactive.svg";
import StepTwoInactive from "@assets/registration/progress-bar-1/step-2/step-2-inactive.svg";
import StepThreeInactive from "@assets/registration/progress-bar-1/step-3/step-3-inactive.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneInactive from "@assets/registration/progress-bar-2/step-1/step-1-inactive.svg";
import PageTwoInactive from "@assets/registration/progress-bar-2/step-2/step-2-inactive.svg";
import PageThreeInactive from "@assets/registration/progress-bar-2/step-3/step-3-inactive.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";

import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function EvaluatorDefault() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          EVALUATOR SIGN UP
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-32 items-end py-7">
          <img src={StepOneInactive} alt="Step One Inactive" />
          <img src={StepTwoInactive} alt="Step Two Inactive" />
          <img src={StepThreeInactive} alt="Step Three Inactive" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneInactive} alt="Page One Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageTwoInactive} alt="Page Two Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageThreeInactive} alt="Page Three Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFourInactive} alt="Page Four Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFiveInactive} alt="Page Five Inactive" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-[#ffffff80] text-sm font-manrope font-normal">
            Personal Info
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal">
            Professional Info
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal">
            Qualifications
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Contact & Shipment
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-14 py-14">
        <div>
          <h3 className="text-white text-2xl font-manrope font-bold">
            Taking Your Products to the Next Level!
          </h3>
          <p className="text-white text-base font-manrope font-normal py-6">
            We'll explore your background, your business, and your core values.
            This information will provide us with a deeper understanding of your
            profile and business, allowing us to assess compatibility more
            effectively.
          </p>
          <p className="text-white">Click “Sign up” below to get started!</p>
        </div>
        <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-32 py-3 rounded-3xl mt-14">
          <Link to="/evaluator-page-1">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
