// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeActive from "@assets/registration/progress-bar-1/step-3/step-3-active.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeActive from "@assets/registration/progress-bar-2/step-3/step-3-active.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";
import { Link } from "react-router-dom";

// React Icons
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { IoFolderSharp } from "react-icons/io5";
import FileUploadButton from "@components/forms/upload";
import List from "@components/forms/upload-list";
import Calendar from "@components/calendar";

import { useEffect, useState } from "react";
import CalendarButton from "@components/calendar";

export default function EvaluatorPage3() {
  // always pull the windows to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showCalendar, setShowCalendar] = useState(false);

  const display = () => {
    setShowCalendar(true);
  };

  const [resumeClicked, setResumeClicked] = useState(false);
  const [ccpClicked, setCcpClicked] = useState(false);

  const display2 = (buttonType: string) => {
    if (buttonType === "resume") {
      setResumeClicked(true);
      setCcpClicked(false);
    } else if (buttonType === "ccp") {
      setCcpClicked(true);
      setResumeClicked(false);
    }
  };

  // File Upload
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (file: File) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
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
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageThreeActive} alt="Page Three Active" />
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
          <p className="text-white text-sm font-manrope font-normal">
            Qualifications
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Contact & Shipment
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <img src={Underline} alt="Underline" width={98} className="mx-auto" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <form>
          <h4 className="text-white text-2xl font-manrope font-bold">
            What industry sector, within food, do you currently work in? &#42;
          </h4>
          <span className="text-white text-sm font-manrope font-medium">
            (Select one)
          </span>
          <div className="border-white border-b mb-4">
            <button
              className="flex gap-2 items-center mt-4"
              type="button"
              onClick={() => display2("resume")}
            >
              {resumeClicked ? (
                <>
                  <MdOutlineRadioButtonChecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    Resume
                  </span>
                </>
              ) : (
                <>
                  <MdOutlineRadioButtonUnchecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    Resume
                  </span>
                </>
              )}
            </button>
            <span className="text-white text-sm font-manrope pl-6">
              4+ years of relevant experience (does not need to be sequential)
            </span>
          </div>
          <div className="border-white border-b mb-4">
            <button
              className="flex gap-2 items-center mt-4"
              type="button"
              onClick={() => display2("ccp")}
            >
              {ccpClicked ? (
                <>
                  <MdOutlineRadioButtonChecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    CCP
                  </span>
                </>
              ) : (
                <>
                  <MdOutlineRadioButtonUnchecked className="text-white" />
                  <span className="text-white text-base font-manrope font-normal">
                    CCP
                  </span>
                </>
              )}
            </button>
            <span className="text-white text-sm font-manrope pl-6">
              Certified Cheese Professional Certification
            </span>
          </div>
          <div>
            <h4 className="text-white text-xl font-manrope font-semibold pb-2">
              Attach Document &#42;
            </h4>
            <div className="border-dashed border-white border">
              <IoFolderSharp className="text-5xl text-[#B5B3B3] mx-auto mt-2" />
              <FileUploadButton onFileUpload={handleFileUpload} />
            </div>
            <List files={uploadedFiles} />
          </div>
          <div className="flex items-end gap-1">
            <h4 className="text-white text-xl font-manrope font-semibold mt-8">
              Share dates you do NOT contact from us
            </h4>
            <span className="text-white">(optional)</span>
          </div>
          <p className="text-white">
            Help us coordinate your potential evaluation.
          </p>
          <div>
            <CalendarButton />
            <div
              className={showCalendar ? "block" : "hidden"}
              onClick={display}
            >
              <Calendar />
            </div>
          </div>
        </form>
        <div className="mt-9">
          <Link to="/evaluator-page-2">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/evaluator-page-4">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
