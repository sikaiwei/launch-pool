"use client";
import style from "./styles.module.css";
import { motion } from "motion/react";
import { useEffect } from "react";
// import { themeChange } from "theme-change";

export default function Btn() {
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
  }

  const delay = -2 * 0.5 + "s";
  return (
    <>
      <div className="grid grid-cols-5 gap-5">
        <motion.button
          // whileHover={{ scale: 1.03 }}
          className={style.movingButton}
        >
          Hover me!
        </motion.button>
        <button
          className={style.movingButton}
          style={{ animationDelay: delay }}
        >
          Hover me!
        </button>
        <button className={style.movingButton}>Hover me!</button>
      </div>

      <div className="grid grid-cols-7 gap-5">
        <button className="btn btn-active">Default</button>
        <button className="btn btn-active btn-neutral">Neutral</button>
        <button className="btn btn-active btn-primary">Primary</button>
        <button className="btn btn-active btn-secondary">Secondary</button>
        <button className="btn btn-active btn-accent">Accent</button>
        <button className="btn btn-active btn-ghost">Ghost</button>
        <button className="btn btn-active btn-link">Link</button>

        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Hover
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">ON</div>
          <div className="swap-off">OFF</div>
        </label>

        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
          data-set-theme="dark"
        />

        <div className="dropdown mb-72">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
                onChange={changeTheme}
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
                value="retro" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                onClick={changeTheme}
                value="cyberpunk" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                onClick={changeTheme}
                value="valentine" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                onClick={changeTheme}
                value="aqua" />
            </li>
          </ul>
        </div>

      </div>


    </>
  );
}
