// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function CheeseStyle() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const options = [
    "Alpine-Style",
    "Blue",
    "Cheddar-like",
    "Creme",
    "Fresh",
    "Gouda-like",
    "Grana-Grating Cheese",
    "Pasta Filata (Mozzarella Type)",
    "Process (Cheese spread, American Cheese)",
    "Soft-Ripened (Brie-like)",
    "Washed-Rind",
    "Other",
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedOption(index === selectedOption ? null : index);
  };

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Cheese Style</h3>
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
        {selectedOption === options.length - 1 && (
          <>
            <input type="text" className={inputField} />
          </>
        )}
      </div>
    </div>
  );
}
