import { NavLink, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SwitchTheme from '../switchTheme/SwitchTheme';

interface MenuLinkProps {
  text: string;
  path: string;
}

function MenuLink({ text, path }: MenuLinkProps): React.ReactElement {
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
    <NavLink
      onClick={clickHandler}
      className={`${styles.link} ${dotEnabled ? styles.linkActive : ''}`}
      to={path}
      title={text}
    >
      <span className={styles.dot}></span>
      {dotEnabled && dotActivated ? (
        <div className={`${styles.dot} ${styles.dotExpansion}`}></div>
      ) : null}
    </NavLink>
  );
}

export default function Menu() {
  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        aria-label="Juan Pablo Lozano"
        className={styles.brandName}
      >
        <TypeAnimation
          sequence={['Juan Pablo Lozano']}
          cursor={true}
        ></TypeAnimation>
      </NavLink>
      <MenuLink text="About" path="/" />
      <MenuLink text="Tech stack" path="/tech" />
      <MenuLink text="Contact" path="/contact" />
      <SwitchTheme />
    </nav>
  );
}
