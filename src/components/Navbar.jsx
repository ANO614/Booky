import { NavLink } from "react-router-dom";

function Navbar() {
return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

            <NavLink
                className="navbar-brand"
                to="/"
            >
                Booky
            </NavLink>

            <div className="navbar-nav">

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
            </div>
        </div>
    </nav>
);
}

export default Navbar;
