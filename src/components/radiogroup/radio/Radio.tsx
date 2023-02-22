import React, { useState } from "react";
import { RadioProps } from "./Radio.type";

const Radio = ({
  label,
  Disable,
  theme = "primary",
  isError,
  emsg,
  value,
  onChange,
}: RadioProps) => {
  return (
    <div className={`${isError === true ? `radio--error` : ``}`}>
      <div
        className={`radio-component radio--${theme} ${
          Disable === true ? `radio--disable` : ``
        }  ${isError === true ? `radio--danger` : ``} `}
      >
        <input
          type="radio"
          name="radio"
          className="radio-input"
          disabled={Disable}
          value={value}
          id={label}
          onChange={onChange}
        />
        <label className="radio-label" htmlFor={label}>
          {label}
        </label>
      </div>
      {isError ? (
        <div
          className={`radio-emsg ${
            Disable === true ? `radio-emsg-disable` : ``
          }`}
        >
          {emsg}
        </div>
      ) : null}
    </div>
  );
};

export default Radio;
