// React Icons
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useState } from "react";

export default function Region() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const options = [
    "The Northeast (ME, NH, VT, MA, RI, CT, NY, NJ, & PA)",
    "The Midwest (OH, MI, IN, WI, IL, MN, IA, MO, ND, SD, NE, & KS)",
    "The South (DE, MD, VA, WV, KY, NC, SC, TN, GA, FL, AL, MI, AK, LA, TX, & OK)",
    "The West (MT, ID, WY, CO, NM, AZ, UT, NV, CA, OR, WA)",
    "Fair Labor Practices and Community Benefits",
    "Other",
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedOption(index === selectedOption ? null : index);
  };

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Milk Type</h3>
      </div>
      <div className="mt-4">
        {options.map((option, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            {selectedOption === index ? (
              <div className="flex gap-1 items-center mb-4 -ml-1">
                <MdOutlineRadioButtonChecked className="text-white rounded text-base" />
                <span className="text-white text-base font-manrope font-normal">
                  {option}
                </span>
              </div>
            ) : (
              <div className="flex gap-2 items-center mb-4">
                <MdOutlineRadioButtonUnchecked className="text-white rounded" />
                <span className="text-white text-base font-manrope font-normal">
                  {option}
                </span>
              </div>
            )}
          </div>
        ))}
        {selectedOption === options.length - 1 && (
          <>
            <input type="text" className={inputField} />
          </>
        )}
      </div>
    </div>
  );
}
