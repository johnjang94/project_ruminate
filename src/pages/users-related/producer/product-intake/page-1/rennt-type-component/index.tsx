// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function RenntType() {
  const inputTitle = "text-white text-xl font-manrope font-bold";

  const options = ["Plant-based", "Animal-based", "Microbial"];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedOption(index === selectedOption ? null : index);
  };

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Rennt Type</h3>
      </div>
      <div className="mt-4">
        {options.map((option, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            {selectedOption === index ? (
              <div className="flex gap-1 items-center mb-4 -ml-1">
                <BiSolidCheckboxChecked className="text-white rounded text-2xl" />
                <span className="text-white text-base font-manrope font-normal">
                  {option}
                </span>
              </div>
            ) : (
              <div className="flex gap-2 items-center mb-4">
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
