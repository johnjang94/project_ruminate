// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeActive from "@assets/registration/progress-bar-1/step-3/step-3-active.svg";
import StepFourActive from "@assets/registration/progress-bar-1/step-4/step-4-active.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeActive from "@assets/registration/progress-bar-2/step-3/step-3-active.svg";
import PageFourActive from "@assets/registration/progress-bar-2/step-4/step-4-active.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";
import { Link } from "react-router-dom";
import Region from "./region";
import { useEffect } from "react";

export default function ProductPage4() {
  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedNumber = event.target.value;
    console.log(`Selected Number: ${selectedNumber}`);
  };

  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          COMMUNICATION
        </h1>
        <div className="flex justify-between px-32 items-end py-7">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeActive} alt="Step Three Active" />
          <img src={StepFourActive} alt="Step Four Active" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
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
          <img src={PageFiveInactive} alt="Page Five Inactive" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-white text-sm font-manrope font-normal -ml-3">
            Product Detail
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-4">
            Your Goal
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Product Value
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-2">
            Communication
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Completed
          </p>
        </div>
        <div className="flex justify-end mr-60">
          <img src={Underline} alt="Underline" width={98} />
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <Region />
        {/* ======================= Dropdown 1 =========================== */}
        <div className="mt-9">
          <label htmlFor="numberDropdown" className="text-white">
            <span className="font-bold">Optional:</span> I prefer to have a
            minimum of X evaluators who are interested in video conferencing or
            telephone communications after feedback is received.{" "}
          </label>
          <br />
          <br />
          <select
            id="numberDropdown"
            onChange={handleDropdownChange}
            className="w-full p-5 rounded-lg"
          >
            <option value="0" selected disabled></option>
            {/* Dynamically generate options from 1 to 50 */}
            {[...Array(4)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* ======================= Dropdown 2 =========================== */}
        <div className="mt-9">
          <label htmlFor="numberDropdown" className="text-white">
            <span className="font-bold">Optional:</span> I prefer to have a
            minimum of X evaluators who are interested in multiple rounds of
            feedback.{" "}
          </label>
          <br />
          <br />
          <select
            id="numberDropdown"
            onChange={handleDropdownChange}
            className="w-full p-5 rounded-lg"
          >
            <option value="0" selected disabled></option>
            {/* Dynamically generate options from 1 to 50 */}
            {[...Array(4)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-9">
          <h3 className="text-white text-xl font-manrope">
            Please provide information regarding the point of contact for any
            shipping coordination. This should be the person that is packaging
            and mailing your product for this evaluation.
          </h3>
          <form action="">
            <div className="mt-8">
              <label htmlFor="Name" className={inputTitle}>
                Name &#42;
              </label>
            </div>
            <div className="mb-16 mt-4">
              <input
                name="name"
                type="text"
                className={inputField}
                // value={fullName}
                // onChange={handleFullNameChange}
                required
              />
              {/* {fullNameError && <p className="text-amber-500">{fullNameError}</p>} */}
            </div>
            <div>
              <label htmlFor="title" className={inputTitle}>
                Title &#42;
              </label>
            </div>
            <div className="mb-16 mt-4">
              <input
                name="title"
                type="text"
                className={inputField}
                // value={fullName}
                // onChange={handleFullNameChange}
                required
              />
              {/* {fullNameError && <p className="text-amber-500">{fullNameError}</p>} */}
            </div>
            <div>
              <label htmlFor="Email" className={inputTitle}>
                Email Address &#42;
              </label>
            </div>
            <div className="mb-16 mt-4">
              <input
                name="email"
                type="text"
                className={inputField}
                // value={fullName}
                // onChange={handleFullNameChange}
                required
              />
              {/* {fullNameError && <p className="text-amber-500">{fullNameError}</p>} */}
            </div>
            <div>
              <label htmlFor="number" className={inputTitle}>
                Phone Number &#42;
              </label>
            </div>
            <div className="mb-16 mt-4">
              <input
                name="number"
                type="number"
                className={inputField}
                // value={fullName}
                // onChange={handleFullNameChange}
                required
              />
              {/* {fullNameError && <p className="text-amber-500">{fullNameError}</p>} */}
            </div>
          </form>
        </div>
        <div className="justify-between flex items-center mt-12">
          <div>
            <Link to="/product-intake-3">
              <button
                className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5"
                type="button"
              >
                Previous
              </button>
            </Link>
            <Link to="/product-completed">
              <button
                className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl"
                type="button"
              >
                Next
              </button>
            </Link>
          </div>
          <button className="text-white" type="button">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
