/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import React from "react";
import { jsx, css } from "@emotion/react";

const InputDropdown = ({ label, options = [] }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        className="w-48 bg-beige-1 border-white border-2 "
      >
        <option value="" selected>
          Any
        </option>
        {options.map((option) => (
          <option
            onSelect={(option) => {
              console.log("selected");
            }}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
