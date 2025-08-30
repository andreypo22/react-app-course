import { useContext } from "react";
import { default as ThemeContext } from "../theme/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};
