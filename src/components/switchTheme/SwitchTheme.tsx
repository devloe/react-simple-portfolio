import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import themeStore, { Skin } from "../../lib/stores/themeStore";
import styles from "./SwitchTheme.module.css";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function SwitchTheme(): React.ReactElement {
    const theme = useAppSelector(state => state.theme);
    const dispatcher = useAppDispatch();

    let [classes, setClasses] = useState<string[]>(["ml-0 mt-4 p-1"]);
    
    const icon = theme.skin !== "dark" ? <SunIcon className="h-6 w-6 text-black" /> : <MoonIcon className="h-6 w-6 text-white" />;
    const buttonTitle = theme.skin === "dark" ? "Switch to light mode" : "Switch to dark mode";
    
    function clickHandler() {
      let skin:Skin = theme.skin === "dark" ? "light" : "dark";
  
      setClasses(classes.filter(item => item !== styles.animated));
      setTimeout(() => setClasses([...classes, styles.animated]), 0.2);
  
      dispatcher(themeStore.actions.setSkin(skin));
    }
  
    return (
      <button title={buttonTitle} aria-label={buttonTitle} onClick={clickHandler} className={classes.join(" ")}>
            {icon}
          </button>
    );
  }