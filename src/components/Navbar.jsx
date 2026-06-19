import { NavLink } from "react-router-dom"
import logo from "../assets/logo1.png"
import style from "../components/Navbar.module.css"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href={"/"}>
                            <img src={logo} alt="logo" style={{ width: 140, height: 80 }} />

                        </a>
                    </div>
                    <div className="d-flex gap-3">

                        <NavLink className="btn btn-secondary" to="/">Home</NavLink>
                        <NavLink className="btn btn-secondary" to="/favorites">Preferiti</NavLink>
                        <NavLink className="btn btn-secondary" to="/compare">Confronta</NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar