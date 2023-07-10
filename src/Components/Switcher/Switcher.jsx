import React from "react";
import useDarkSide from "../../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useDarkSide(
    colorTheme == "light" ? true : false
  );
  const toggleDarkMode = (checked) =>{
    setTheme(colorTheme)
    setDarkSide(checked)
  }
  return(
    <div>
        <DarkModeSwitch
        checked = {darkSide}
        onChange={toggleDarkMode}
        size={40}
        className="dark:bg-[black] md:bg-[blue]"
        />
    </div>
  )
};

export default Switcher;
