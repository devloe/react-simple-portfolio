import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-left pt-10 text-sm w-full">
      © 2023 —{' '}
      <NavLink to="/credits" className="underlined">
        Credits & Disclaimer
      </NavLink>
    </footer>
  );
}
