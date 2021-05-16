/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import React from "react";
import { jsx } from "@emotion/react";
import { useRouter } from "next/router";

const InputDropdown = ({ label, options = [], queryKey = "" }) => {
  const router = useRouter();

  const selectedValue = router.query[queryKey] ? router.query[queryKey] : "";

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        onChange={(event) => {
          const newQuery = router.query;

          if (event.target.value === "") {
            delete newQuery[queryKey];

            router.replace({
              pathname: "/projects",
              query: newQuery,
            });
          } else {
            router.replace({
              pathname: "/projects",
              query: { ...newQuery, [queryKey]: event.target.value },
            });
          }
        }}
        className="w-48 bg-beige-1 border-white border-2 "
      >
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <option selected={isSelected} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputDropdown;
