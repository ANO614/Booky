import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={
                theme === "dark"
                    ? "text-center py-3 bg-black text-white"
                    : "text-center py-3 bg-dark text-white"
            }>

            <p className="mb-0">
                © 2026 Book Explorer
            </p>

        </footer>
    );

}

export default Footer;