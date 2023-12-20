// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoInactive from "@assets/registration/progress-bar-1/step-2/step-2-inactive.svg";
import StepThreeInactive from "@assets/registration/progress-bar-1/step-3/step-3-inactive.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoInactive from "@assets/registration/progress-bar-2/step-2/step-2-inactive.svg";
import PageThreeInactive from "@assets/registration/progress-bar-2/step-3/step-3-inactive.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import Underline from "@assets/registration/progress-underline/underline.svg";

import { Link } from "react-router-dom";

// Component Import
import CheeseStyle from "./cheese-style-component";
import Reason from "./reason-component";
import MilkType from "./milk-type-component";
import RenntType from "./rennt-type-component";
import Status from "./status-component";

// Component Import - file uploader
import { IoFolderSharp } from "react-icons/io5";
import FileUploadButton from "@components/forms/upload";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ProductPage1() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedNumber = event.target.value;
    console.log(`Selected Number: ${selectedNumber}`);
  };

  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const display2 = (buttonType: string) => {
    if (buttonType === "resume") {
      setYesClicked(true);
      setNoClicked(false);
    } else if (buttonType === "ccp") {
      setNoClicked(true);
      setYesClicked(false);
    }
  };

  // Product Name
  const [productName, setProductName] = useState<string>("");
  const [productNameError, setProductNameError] = useState<string>("");
  const handleProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProductName(value);

    const validatedFullName = validateFullName(value);
    if (validatedFullName) {
      setProductName(validatedFullName);
    }
  };

  // const inputClass =
  //   "mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-input border-borderInput font-semibold border w-full";
  // const errorClass =
  //   "mt-2 pt-2 pb-3 px-4 rounded-lg text-base font-semibold border border-[#E46D64] w-full";

  // const [showError, setShowError] = useState(false);
  // const handleBlur = (e: React.SyntheticEvent) => {
  //   const target = e.target as HTMLInputElement;
  //   const input = target.value;
  //   if (!input) {
  //     errorClass;
  //     setShowError(true);
  //   } else {
  //     inputClass;
  //     setShowError(false);
  //   }
  // };

  const validateFullName = (name: string) => {
    if (name.length < 2) {
      setProductNameError("Please provide your product name.");
      return false;
    }

    setProductNameError("");
    return name;
  };

  // Product Year
  const [productYear, setProductYear] = useState<string>("");
  const [productYearError, setProductYearError] = useState<string>("");
  const handleProductYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProductYear(value);

    const validatedFullName = validateYear(value);
    if (validatedFullName) {
      setProductYear(validatedFullName);
    }

    // handleInputChange(e);
  };

  const validateYear = (name: string) => {
    if (name.length < 2) {
      setProductYearError(
        "Please let us know when you've released the product."
      );
      return false;
    }

    // Check if the name is not a four-digit number
    const isNotFourDigitNumber = !/^\d{4}$/.test(name);

    if (isNotFourDigitNumber) {
      setProductYearError("Year needs be a four-digit number.");
      return false;
    }

    setProductYearError("");
    return name;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          PRODUCT DETAILS
        </h1>
        <div className="flex justify-between px-32 items-end py-7">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoInactive} alt="Step Two Inactive" />
          <img src={StepThreeInactive} alt="Step Three Inactive" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
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
          <p className="text-white text-sm font-manrope font-normal -ml-3">
            Product Detail
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-6">
            Your Goal
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-7">
            Product Value
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Communication
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Completed
          </p>
        </div>
        <img src={Underline} alt="Underline" width={98} className="ml-28" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <form>
          <div>
            <label htmlFor="Name" className={inputTitle}>
              Product Name &#42;
            </label>
          </div>
          <div className="mb-16 mt-4">
            <input
              name="name"
              type="text"
              className={inputField}
              value={productName}
              onChange={handleProductName}
              required
            />
            {productNameError && (
              <p className="text-amber-500">{productNameError}</p>
            )}
          </div>
          <div>
            <label htmlFor="input" className={inputTitle}>
              Year of Product Release &#42;
            </label>
          </div>
          <div className="mb-16 mt-4">
            <input
              name="input"
              type="text"
              className={inputField}
              value={productYear}
              onChange={handleProductYear}
              required
            />
            {productYearError && (
              <p className="mb-8 text-amber-500">{productYearError}</p>
            )}
          </div>
          <Reason />
          {/* ================================================================ */}
          {/* I made multiple choice responses in components */}
          <CheeseStyle />
          <MilkType />
          <RenntType />
          {/* ================================================================ */}
          <div className="mt-9">
            <label htmlFor="numberDropdown" className={inputTitle}>
              Age in Months
            </label>
            <br />
            <br />
            <select
              id="numberDropdown"
              onChange={handleDropdownChange}
              className={inputField}
              placeholder="Select from Dropdown"
            >
              <option value="0" selected disabled></option>
              {/* Dynamically generate options from 1 to 50 */}
              {[...Array(50)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          {/* ================================================================ */}
          <Status />
          {/* ================================================================ */}
          <div className="mt-9">
            <h3 className={inputTitle}>
              What are the care instructions for the product? (Eg: Remove from
              refrigeration x time before eating) &#42;
            </h3>
            <div className="mb-16 mt-4">
              <textarea
                name="textarea"
                className="border border-white rounded-lg w-full h-full overflow-y-scroll p-5"
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-9">
            <h3 className={inputTitle}>
              How would you send this product to shops? Does it differ from how
              it will be packaged or shipped to evaluators? If so, please
              describe: &#42;
            </h3>
            <div className="mb-16 mt-4">
              <textarea
                name="textarea"
                className="border border-white rounded-lg w-full h-full overflow-y-scroll p-5"
                required
              ></textarea>
            </div>
          </div>
          {/* ============================= File Uploader ================================ */}
          <div className="mb-16">
            <h3 className="text-white text-xl font-manrope font-semibold pb-4">
              If you’d like, upload a photo of how the product is usually
              shipped in a retail scenario. This image will be provided to
              evaluators for context. &#42;
            </h3>
            <div className="border-dashed border-white border">
              <IoFolderSharp className="text-5xl text-[#B5B3B3] mx-auto mt-2" />
              <FileUploadButton />
            </div>
          </div>
          {/* ============================================================================ */}
          <h3 className="mt-4 text-white text-xl">
            Will your product be shipped/wrapped in branded packaging?
          </h3>
          <div className="mb-4">
            <button
              className="flex gap-2 items-center mt-4"
              type="button"
              onClick={() => display2("resume")}
            >
              {yesClicked ? (
                <>
                  <MdOutlineRadioButtonChecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    Yes
                  </span>
                </>
              ) : (
                <>
                  <MdOutlineRadioButtonUnchecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    Yes
                  </span>
                </>
              )}
            </button>
          </div>
          <div className="mb-4">
            <button
              className="flex gap-2 items-center mt-4"
              type="button"
              onClick={() => display2("ccp")}
            >
              {noClicked ? (
                <>
                  <MdOutlineRadioButtonChecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    No
                  </span>
                </>
              ) : (
                <>
                  <MdOutlineRadioButtonUnchecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    No
                  </span>
                </>
              )}
            </button>
          </div>
          {/* ============================== Shipping File Uploader ================ */}
          <div className="mb-16 mt-9">
            <h3 className="text-white text-xl font-manrope font-semibold pb-4">
              If you’d like, upload a photo of how the product is usually
              shipped in a retail scenario. This image will be provided to
              evaluators for context. &#42;
            </h3>
            <div className="border-dashed border-white border">
              <IoFolderSharp className="text-5xl text-[#B5B3B3] mx-auto mt-2" />
              <FileUploadButton />
            </div>
          </div>
          {/* I might need the warning thing for later */}
          {/* {showWarning && (
              <p className="text-amber-500">
                Password needs to be more than 8 characters long
              </p>
            )}
            {showWarning2 && (
              <p className="text-amber-500">
                Password should have at least 2 of special characters (i.e.
                !@%#&)
              </p>
            )} */}
        </form>
        <div className="justify-between flex items-center mt-12">
          <div>
            <Link to="/product-default">
              <button
                className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5"
                type="button"
              >
                Previous
              </button>
            </Link>
            <Link to="/product-intake-2">
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
