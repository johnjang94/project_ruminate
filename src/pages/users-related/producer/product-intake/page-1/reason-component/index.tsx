// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

const options = [
  "Developing a new product",
  "Experimenting with new recipe",
  "Refining an old favorite",
  "Trying to figure out why the product isn’t selling as hoped",
  "Trying to break into a new geographic market",
  "Trying to jumpstart sales in a new part of the distribution chain (ex: independent retailers, grocery, distribution)",
  "Trying to get more information about how a product is perceived by industry professionals",
  "Other",
];

export default function Reason() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const [checkedOptions, setCheckedOptions] = useState(
    Array(options.length).fill(false)
  );

  const handleOptionClick = (index: number) => {
    const newCheckedOptions = [...checkedOptions];
    newCheckedOptions[index] = !newCheckedOptions[index];
    setCheckedOptions(newCheckedOptions);
  };

  return (
    <div>
      <div>
        <h3 className={inputTitle}>
          Which of the following certifications applies to your product?
        </h3>
        <span className="text-base text-white font-manrope font-normal">
          (Select all that apply)
        </span>
      </div>
      <div className="mt-4">
        {options.map((option, index) => (
          <div key={index} onClick={() => handleOptionClick(index)}>
            {checkedOptions[index] ? (
              <>
                <div className="flex gap-2 items-center my-5">
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
              <div className="flex gap-2 items-center my-5">
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
  );
}
