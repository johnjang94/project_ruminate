// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeActive from "@assets/registration/progress-bar-1/step-3/step-3-active.svg";
import StepFourActive from "@assets/registration/progress-bar-1/step-4/step-4-active.svg";
import StepFiveActive from "@assets/registration/progress-bar-1/step-5/step-5-active.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeActive from "@assets/registration/progress-bar-2/step-3/step-3-active.svg";
import PageFourActive from "@assets/registration/progress-bar-2/step-4/step-4-active.svg";
import PageFiveActive from "@assets/registration/progress-bar-2/step-5/step-5-active.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";

import { Link } from "react-router-dom";

export default function ProducerCompleted() {
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          PRODUCER SIGN UP
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-28 items-end py-4">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeActive} alt="Step Three Active" />
          <img src={StepFourActive} alt="Step Four Active" />
          <img src={StepFiveActive} alt="Step Five Active" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageThreeActive} alt="Page Three Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageFourActive} alt="Page Four Active" />
          <img src={Connector} alt="Connector" />
          <img src={PageFiveActive} alt="Page Five Active" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-white text-sm font-manrope font-normal">
            About You
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Your Business
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Your Values
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-2">
            How You Found Us
          </p>
          <p className="text-white text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <div className="flex justify-end mr-28">
          <img src={Underline} alt="Underline" width={98} />
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-14 py-14">
        <h1 className="text-white text-2xl font-manrope font-normal">
          Congratulations!
        </h1>
        <p className="text-white text-base font-manrope font-medium pt-6 pb-12">
          You just signed up for an evaluation with Feedback! As you are reading
          this, we are reaching out to evaluators. Once evaluators have signed
          on to your evaluation, we’ll post their shipping addresses (and your
          next steps) in your dashboard.
          <br />
          <br />
          Click below to access your Producer Dashboard!
        </p>
        <Link to="/login">
          <button
            className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl"
            type="button"
          >
            Go to My Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
