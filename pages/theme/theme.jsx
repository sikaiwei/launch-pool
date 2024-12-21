"use client";
import { useEffect } from "react";
// import { themeChange } from "theme-change";

export default function Theme() {
  useEffect(() => {
    /* Sets the data-theme attribute on html tag */
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
  }, []);

  const changeTheme = (e) => {
    let newTheme = e.target.value;
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div className="dropdown mb-72">
        <div tabIndex={0} role="button" className="btn">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
              onClick={changeTheme}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dark"
              value="dark"
              onClick={changeTheme}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Retro"
              onClick={changeTheme}
              value="retro"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Cyberpunk"
              onClick={changeTheme}
              value="cyberpunk"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Valentine"
              onClick={changeTheme}
              value="valentine"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Aqua"
              onClick={changeTheme}
              value="aqua"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
