import cls from "./ThemeToggler.module.css";
import { useTheme } from "../../hooks/useTheme";
import { THEME_STORAGE } from "../../constants";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeHandler = (e) => {
    const isChecked = e.target.checked === true;
    const updatedTheme = isChecked ? "light" : "dark";

    setTheme(updatedTheme);
    isChecked
      ? document.body.classList.add("lightLayout")
      : document.body.classList.remove("lightLayout");

    localStorage.setItem(THEME_STORAGE, updatedTheme);
  };

  return (
    <label htmlFor="switch" className={cls.switch}>
      <input
        id="switch"
        type="checkbox"
        onChange={onChangeHandler}
        checked={theme === "light"}
      />
      <span className={cls.slider}></span>
      <span className={cls.decoration}></span>
    </label>
  );
};
