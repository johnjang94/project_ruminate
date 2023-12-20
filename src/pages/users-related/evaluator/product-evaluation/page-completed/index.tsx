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

import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";
import { Link } from "react-router-dom";

export default function EvaluationCompleted() {
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          PRODUCT EVALUATION FORM
        </h1>
        <div className="flex justify-between px-32 items-end py-7">
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
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageFiveActive} alt="Page Five Active" />
        </div>
        <div className="flex justify-between px-28">
          <p className="text-white text-sm font-manrope font-normal">
            Personal Info
          </p>
          <p className="text-white text-sm font-manrope font-normal -ml-3">
            Unboxing
          </p>
          <p className="text-white text-sm font-manrope font-normal -ml-3">
            Senses
          </p>
          <p className="text-white text-sm font-manrope font-normal">Overall</p>
          <p className="text-white text-sm font-manrope font-normal">
            Completed
          </p>
        </div>
        <div className="flex justify-end mr-24">
          <img src={Underline} alt="Underline" width={98} />
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-14 py-20">
        <h1 className="text-white text-2xl font-manrope font-normal">
          Your review has been submitted!
        </h1>
        <p className="text-white text-base font-manrope font-medium pt-6 pb-12">
          We thank you for taking your precious time to leave a review! Your
          review is important to the producers.
          <br />
          <br />
          Click below to access your Producer Dashboard!
        </p>
        <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
          <Link to="/evaluator">Dashboard Home</Link>
        </button>
      </div>
    </div>
  );
}
