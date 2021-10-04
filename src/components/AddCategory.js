import React, { useState } from "react";
import propTypes from "prop-types";

export default function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputchange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //.trim() borra los espacion al inicio y al final
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputchange} />
    </form>
  );
}

AddCategory.prototype = {
  setCategories: propTypes.func.isRequired,
};
