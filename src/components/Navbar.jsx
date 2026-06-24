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
                            <img src={logo} alt="logo" style={{ width: 140, height: 120 }} />

                        </a>
                    </div>
                    <div className="d-flex gap-3">

                        <NavLink className="fs-2" to="/"><i className={`${style.icons} fa-solid fa-house`}></i></NavLink>
                        <NavLink className="fs-2" to="/favorites"><i className={` ${style.icons} text-white fa-solid fa-heart`}></i></NavLink>
                        <NavLink className="fs-2" to="/compare"><i className={`${style.icons} text-white fa-solid fa-scale-balanced`}></i></NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar