import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-right p-4 w-full text-gray-400">© 2023 — <NavLink to="/credits" className="underlined">Credits & Disclaimer</NavLink></footer>
    );
}