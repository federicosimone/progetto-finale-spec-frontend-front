import { NavLink } from "react-router-dom"
import logo from "../assets/logo1.png"
import style from "../components/Navbar.module.css"
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"
import { CompareContext } from "../context/CompareContext"

function Navbar() {

    const { favoritesSmartphone } = useContext(FavoritesContext)
    const { compareSmartphone } = useContext(CompareContext)
    return (
        <>
            <nav className="navbar fixed-top darkDiv">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href={"/"}>
                            <img src={logo} alt="logo" style={{ width: 140, height: 120 }} />

                        </a>
                    </div>
                    <div className="d-flex gap-3">

                        <NavLink className="fs-2" to="/"><i className={`${style.icons} fa-solid fa-house`}></i></NavLink>
                        <NavLink className="fs-2 position-relative" to="/favorites"><i className={` ${style.icons} text-white fa-solid fa-heart`}></i>{favoritesSmartphone.length >= 1 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">{favoritesSmartphone.length}</span> : ""}</NavLink>
                        <NavLink className="fs-2 position-relative" to="/compare"><i className={`${style.icons} text-white fa-solid fa-scale-balanced`}></i>{compareSmartphone.length >= 1 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">{compareSmartphone.length}</span> : ""}</NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar