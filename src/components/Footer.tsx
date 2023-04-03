import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-left p-4 text-lg text-gray-400">© 2023 — <NavLink to="/credits" className="underlined">Credits & Disclaimer</NavLink></footer>
    );
}