import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
    const { theme } = useContext(ThemeContext);

    return (

        <div className={`app ${theme}`}>
            <Header />
            <Navbar />

            <main className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;