import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";
function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const cartItems =
        useSelector(
            (state) =>
                state.cart.items
        );
    return (

        <nav
            className={
                theme === "dark"
                    ? "navbar navbar-expand-lg navbar-dark bg-black"
                    : "navbar navbar-expand-lg navbar-dark bg-dark"
            } >
            <div className="container">
                <NavLink
                    className="navbar-brand"
                    to="/"
                >
                    Booky
                </NavLink>

                <div className="navbar-nav d-flex flex-row gap-3">

                    <NavLink
                        className="nav-link"
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className="nav-link"
                        to="/about"
                    >
                        About
                    </NavLink>

                    <NavLink
                        className="nav-link"
                        to="/contact"
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        className="nav-link"
                        to="/cart"
                    >
                        🛒 Cart ({cartItems.length})
                    </NavLink>
                </div>

                <button
                    className="btn btn-outline-light"
                    onClick={toggleTheme}
                >
                    {theme === "light"
                        ? "🌙 Dark"
                        : "☀️ Light"}

                </button>
            </div>
        </nav>
    );
}

export default Navbar;