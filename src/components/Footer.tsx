import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-left p-4 w-full text-gray-400 fixed bottom-0 bg-white">© 2023 — <NavLink to="/credits" className="underlined">Credits & Disclaimer</NavLink></footer>
    );
}