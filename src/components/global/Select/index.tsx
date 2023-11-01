import { useState } from "react";
import { SelectContainer } from "./styles";
import { DropdownIconSvg } from "../../../../public/DropdownIcon";

interface Props {
  values: string[];
}

export function Select({ values }: Props) {
  const [selectedValue, setSelectedValue] = useState("Clique Aqui e Escolha");
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleSelect(value: string) {
    setSelectedValue(value);
    setIsFocused(false);
    const saveCard = document.getElementById("saveCard");
    saveCard?.focus();
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
