import React from "react";

function Header() {
  const darkModeHandler = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between h-20 p-4 shadow-md bg-white mb-6 lg:px-16 dark:bg-dark-mode-elements">
      <a href="" className="font-extrabold">
        Where in the world?
      </a>
      <button
        className="flex items-center gap-2 cursor-pointer text-sm font-semibold"
        onClick={darkModeHandler}
      >
        <i className="bx bx-moon text-base"></i>
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
