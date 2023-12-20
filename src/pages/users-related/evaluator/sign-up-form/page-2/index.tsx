// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeInactive from "@assets/registration/progress-bar-1/step-3/step-3-inactive.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeInactive from "@assets/registration/progress-bar-2/step-3/step-3-inactive.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";

// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const options = [
  "Retail",
  "Consulting",
  "Events",
  "Food Producer",
  "Distribution",
  "Media",
  "Other",
];

// I do think that there might be a better way to have these check marks, but I just can't think of it at the moment...
export default function EvaluatorPage2() {
  // always pull the windows to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [checkedOptions, setCheckedOptions] = useState(
    Array(options.length).fill(false)
  );

  const handleOptionClick = (index: number) => {
    const newCheckedOptions = [...checkedOptions];
    newCheckedOptions[index] = !newCheckedOptions[index];
    setCheckedOptions(newCheckedOptions);
  };

  const [selected, setSelected] = useState(0);
  const inputField = "w-full bg-white p-4 rounded-lg";

  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          EVALUATOR SIGN UP
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-32 items-end py-7">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeInactive} alt="Step Three Inactive" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
          <img src={Connector} alt="Connector" />
          <img src={PageThreeInactive} alt="Page Three Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFourInactive} alt="Page Four Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFiveInactive} alt="Page Five Inactive" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-white text-sm font-manrope font-normal">
            Personal Info
          </p>
          <p className="text-white text-sm font-manrope font-normal">
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
        <img src={Underline} alt="Underline" width={98} className="ml-64" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-44 py-20">
        <form>
          <div>
            <h4 className="text-white text-2xl font-manrope font-bold">
              Years working in the specialty food industry &#42;
            </h4>
          </div>
          <div className="flex border-b border-white gap-2 items-center pb-1 pt-2">
            <select
              value={selected}
              onChange={(e) => setSelected(parseInt(e.target.value))}
              className="bg-[#D9D9D9] px-1 py-1 rounded-lg"
              required
            >
              {[...Array(51)].map((_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <p className="text-xl text-white font-manrope font-medium uppercase">
              YEARS
            </p>
          </div>
          <div className="my-8">
            <h4 className="text-white text-2xl font-manrope font-bold">
              What industry sector, within food, do you currently work in? &#42;
            </h4>
            <span className="text-white text-sm font-manrope font-medium">
              (Select all that apply)
            </span>

            <div className="mt-4">
              {options.map((option, index) => (
                <div key={index} onClick={() => handleOptionClick(index)}>
                  {checkedOptions[index] ? (
                    <>
                      <div className="flex gap-2 items-center my-5 cursor-pointer">
                        <BiSolidCheckboxChecked className="text-white rounded text-xl -ml-1" />
                        <span className="text-white text-base font-manrope font-normal">
                          {option}
                        </span>
                      </div>
                      {index === options.length - 1 && (
                        <input type="text" className={inputField} />
                      )}
                    </>
                  ) : (
                    <div className="flex gap-2 items-center my-5 cursor-pointer">
                      <RiCheckboxBlankLine className="text-white rounded" />
                      <span className="text-white text-base font-manrope font-normal">
                        {option}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="mt-9">
          <Link to="/evaluator-page-1">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/evaluator-page-3">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
