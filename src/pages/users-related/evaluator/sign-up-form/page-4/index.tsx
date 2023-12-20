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
import { useEffect, useState } from "react";

export default function EvaluatorPage4() {
  // always pull the windows to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const labelClass = "text-white text-2xl font-manrope font-bold";
  const inputClass = "w-full bg-white rounded-lg px-2 py-2 mt-2";

  // You get to check if the user typed an address
  // You get to check if the address is valid
  const [address, setAddress] = useState("");
  const [inputError, setInputError] = useState("");

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setInputError("Please enter a valid house address.");
      return false;
    }

    if (!/^\d/.test(value)) {
      setInputError("Please start the address with a number.");
      return false;
    }

    if (!/^\d/.test(value.slice(1))) {
      setInputError("Please enter a valid house address.");
      return false;
    }

    setInputError("");
    return true;
  };

  // You can check if the user has typed information about city
  // You can check if the user has typed only letters in city
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");

  const validateCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setCityError("The name of the city needs to be longer than 2 letters.");
      return false;
    }

    setCityError("");
    return true;

    // It is possible that you might need to add a function that validates the name of the city depending on the region.
  };

  // You can check if the user has typed information about ZIP CODE
  // You can check if the user has typed proper ZIP CODE
  const [zipcode, setZipcode] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const validateZipcode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 5) {
      setZipcodeError(
        "The name of the city needs to be longer than 2 letters."
      );
      return false;
    }

    if (!/^\d+$/.test(value)) {
      setZipcodeError("Zip Code can only be in numbers.");
      return false;
    }

    setZipcodeError("");
    return true;
  };

  // Same for the State
  // You can check if the user has typed information about ZIP CODE
  // You can check if the user has typed proper ZIP CODE
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");

  const validateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setStateError("The name of the state needs to be longer than 2 letters.");
      return false;
    }

    setStateError("");
    return true;

    // It is possible that you might need to add a function that validates the name of the city depending on the region.
  };

  // Same for the region
  // You can check if the user has typed information about ZIP CODE
  // You can check if the user has typed proper ZIP CODE
  const [region, setRegion] = useState("");
  const [regionError, setRegionError] = useState("");

  const validateRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setRegionError(
        "The name of the region needs to be longer than 2 letters."
      );
      return false;
    }

    setRegionError("");
    return true;

    // It is possible that you might need to add a function that validates the name of the city depending on the region.
  };

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
          <p className="text-white text-sm font-manrope font-normal">
            Personal Info
          </p>
          <p className="text-white text-sm font-manrope font-normal">
            Professional Info
          </p>
          <p className="text-white text-sm font-manrope font-normal">
            Qualifications
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-2">
            Contact & Shipment
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <div className="flex justify-end mr-60">
          <img src={Underline} alt="Underline" width={98} />
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <form>
          <h4 className="text-white text-2xl font-manrope font-bold pb-8">
            This is the address that will be used for product shipment. We will
            always reach out to re-confirm your shipping address prior to each
            evaluation!
          </h4>
          <h1 className={labelClass}>Street Address &#42;</h1>
          <input
            name="address"
            type="text"
            className={inputClass}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              validateInput(e);
            }}
            placeholder="Address 1"
            required
          />
          {inputError && <p className="mb-8 text-amber-500">{inputError}</p>}
          <div className="flex gap-1 items-end mt-4">
            <h4 className={labelClass}>Apartment or Unit Number</h4>
            <span className="text-white text-base font-manrope">
              (optional)
            </span>
          </div>
          <input
            name="address"
            type="text"
            className={inputClass}
            placeholder="Address 2"
          />
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4">
              <h4 className={labelClass}>City &#42;</h4>
              <input
                name="city"
                type="text"
                className={inputClass}
                value={city}
                placeholder="New York City"
                onChange={(e) => {
                  setCity(e.target.value);
                  validateCity(e);
                }}
                required
              />
              {cityError && <p className="mb-8 text-amber-500">{cityError}</p>}
              <h4 className={`${labelClass} mt-4`}>State &#42;</h4>
              <input
                name="address"
                type="text"
                className={inputClass}
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  validateState(e);
                }}
                placeholder="New York"
                required
              />
              {stateError && (
                <p className="mb-8 text-amber-500">{stateError}</p>
              )}
            </div>
            <div className="mt-4">
              <h4 className={labelClass}>ZIP CODE &#42;</h4>
              <input
                name="address"
                type="text"
                className={inputClass}
                value={zipcode}
                onChange={(e) => {
                  setZipcode(e.target.value);
                  validateZipcode(e);
                }}
                placeholder="10001"
                required
              />
              {zipcodeError && (
                <p className="mb-8 text-amber-500">{zipcodeError}</p>
              )}
              <h4 className={`${labelClass} mt-4`}>Region &#42;</h4>
              <input
                name="address"
                type="text"
                className={inputClass}
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                  validateRegion(e);
                }}
                placeholder="New York"
                required
              />
              {regionError && (
                <p className="mb-8 text-amber-500">{regionError}</p>
              )}
            </div>
          </div>
        </form>
        <div className="mt-9">
          <Link to="/evaluator-page-3">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/evaluator-completed">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
