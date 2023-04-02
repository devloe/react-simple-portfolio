import { NavLink, useLocation } from "react-router-dom";
import styles from './Menu.module.css'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import themeStore, { Skin } from "../../lib/stores/themeStore";
import { TypeAnimation } from 'react-type-animation';

interface MenuLinkProps {
  text: string,
  path: string
}

function MenuLink({text, path}: MenuLinkProps): React.ReactElement {
  const location = useLocation();
  
  let [dotEnabled, setDotEnabled] = useState<boolean>(false);
  let [dotActivated, setDotActivated] = useState<boolean>(false);

  useEffect(() => {
    setDotEnabled(location.pathname === path);
  }, [location, path]);

  function clickHandler() {
    setDotActivated(true);
  }
  
  return (
    <NavLink onClick={clickHandler} className={`${styles.link} ${dotEnabled ? styles.linkActive : ""}`} to={path} title={text}>
      <span className={styles.dot}></span>
      {dotEnabled && dotActivated ? <div className={`${styles.dot} ${styles.dotExpansion}`}></div> : null}
    </NavLink>
  );
}

function SwitchTheme(): React.ReactElement {
  const theme = useAppSelector(state => state.theme);
  const dispatcher = useAppDispatch();
  let [classes, setClasses] = useState<string[]>(["m-1"]);
  const iconSize = 22;
  const icon = theme.skin !== "dark" ? <SunIcon boxSize={iconSize} /> : <MoonIcon boxSize={iconSize} />;
  const buttonTitle = theme.skin === "dark" ? "Switch to light mode" : "Switch to dark mode";
  
  function clickHandler() {
    let skin:Skin = theme.skin === "dark" ? "light" : "dark";

    setClasses(classes.filter(item => item !== styles.animated));
    setTimeout(() => setClasses([...classes, styles.animated]), 0.2);

    dispatcher(themeStore.actions.setSkin(skin));
  }

  return (
    <IconButton title={buttonTitle} size="md" aria-label={buttonTitle} onClick={clickHandler} className={classes.join(" ")}>
          {icon}
        </IconButton>
  );
}

export default function Menu() {
    return (
      <nav className={styles.container}>
        <NavLink to="/" aria-label="Juan Pablo Lozano" className={styles.brandName}>
          <TypeAnimation sequence={["Juan Pablo Lozano"]} cursor={true}></TypeAnimation>
          </NavLink>
        <MenuLink text="About" path="/" />
        <MenuLink text="Tech stack" path="/tech" />
        <MenuLink text="Contact" path="/contact" />
        <SwitchTheme />
      </nav>
    );
}