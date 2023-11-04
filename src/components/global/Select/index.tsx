import { useState } from "react";
import { SelectContainer } from "./styles";
import { DropdownIconSvg } from "../../../../public/DropdownIcon";

interface Props {
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export function Select({ values, selectedValue, setSelectedValue }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleSelect(value: string) {
    setSelectedValue(value);
    setIsFocused(false);
    handleBlur();
  }

  return (
    <SelectContainer
      tabIndex={0}
      onClick={() => setIsFocused(!isFocused)}
      onBlur={handleBlur}
      isOpen={isFocused}
    >
      <strong>{selectedValue}</strong>
      <div className="icon">
        <DropdownIconSvg width="1.5rem" />
      </div>
      <div className="options-container">
        {values.map((value) => (
          <div
            className="option"
            onClick={() => handleSelect(value.toString())}
          >
            {value}
          </div>
        ))}
      </div>
    </SelectContainer>
  );
}