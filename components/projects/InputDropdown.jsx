/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import React from "react";
import { jsx, css } from "@emotion/react";

const InputDropdown = ({ placeholder }) => {
  return (
    <select
      id="cars"
      name="cars"
      className="w-48 bg-beige-1 border-white border-2 "
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
  );
};

export default InputDropdown;
