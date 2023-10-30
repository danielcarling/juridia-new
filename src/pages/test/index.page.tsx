import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(true);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {isFocused ? <p>Element is focused</p> : <p>Element has lost focus</p>}
    </div>
  );
};

export default MyComponent;
