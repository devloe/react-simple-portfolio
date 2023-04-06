import { NavLink, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SwitchTheme from '../switchTheme/SwitchTheme';
import styles from './Menu.module.css';

interface MenuLinkProps {
  text: string;
  path: string;
}

function MenuLink({ text, path }: MenuLinkProps): React.ReactElement {
  const location = useLocation();

  const [dotEnabled, setDotEnabled] = useState<boolean>(false);
  const [dotActivated, setDotActivated] = useState<boolean>(false);

  useEffect(() => {
    setDotEnabled(location.pathname === path);
  }, [location, path]);

  const clickHandler = useCallback(() => {
    setDotActivated(true);
  }, []);

  return (
    <NavLink
      onClick={clickHandler}
      className={`${styles.link} ${dotEnabled ? styles.linkActive : ''}`}
      to={path}
      title={text}
    >
      <span className={styles.dot} />
      {dotEnabled && dotActivated ? (
        <div className={`${styles.dot} ${styles.dotExpansion}`} />
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
        <TypeAnimation sequence={['Juan Pablo Lozano']} cursor />
      </NavLink>
      <MenuLink text="About" path="/" />
      <MenuLink text="Tech stack" path="/tech" />
      <MenuLink text="Contact" path="/contact" />
      <SwitchTheme />
    </nav>
  );
}
