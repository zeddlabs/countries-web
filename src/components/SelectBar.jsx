import React from "react";
import { useState } from "react";

function SelectBar({ setRegion }) {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const clickSelectHandler = () => {
    setDropdownStatus(!dropdownStatus);
  };

  return (
    <div className="w-48 flex flex-col gap-2 font-semibold transition-all relative">
      <div
        className="bg-white py-4 px-6 rounded w-full text-sm flex items-center justify-between shadow-lg shadow-slate-100 cursor-pointer dark:bg-dark-mode-elements dark:shadow-slate-800"
        onClick={clickSelectHandler}
      >
        Filter by region{" "}
        {dropdownStatus ? (
          <i className="bx bx-chevron-up text-base"></i>
        ) : (
          <i className="bx bx-chevron-down text-base"></i>
        )}
      </div>
      {dropdownStatus ? (
        <ul
          className="bg-white px-6 rounded py-4 shadow-lg flex flex-col gap-2 text-sm overflow-hidden z-50 absolute -bottom-52 w-48 dark:bg-dark-mode-elements"
          id="dropdown"
        >
          <a
            className="w-full cursor-pointer"
            onClick={() => {
              setRegion("");
              clickSelectHandler();
            }}
          >
            All
          </a>

          <a
            className="w-full cursor-pointer"
            onClick={(e) => {
              setRegion(e.target.textContent);
              clickSelectHandler();
            }}
          >
            Africa
          </a>

          <a
            className="w-full cursor-pointer"
            onClick={(e) => {
              setRegion(e.target.textContent);
              clickSelectHandler();
            }}
          >
            America
          </a>

          <a
            className="w-full cursor-pointer"
            onClick={(e) => {
              setRegion(e.target.textContent);
              clickSelectHandler();
            }}
          >
            Asia
          </a>

          <a
            className="w-full cursor-pointer"
            onClick={(e) => {
              setRegion(e.target.textContent);
              clickSelectHandler();
            }}
          >
            Europe
          </a>

          <a
            className="w-full cursor-pointer"
            onClick={(e) => {
              setRegion(e.target.textContent);
              clickSelectHandler();
            }}
          >
            Oceania
          </a>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default SelectBar;
