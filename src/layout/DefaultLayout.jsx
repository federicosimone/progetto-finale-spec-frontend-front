import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "../layout/main.module.css"



function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">

            <Navbar />



            <main className={`${style.mainContent} container flex-grow-1 `}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default DefaultLayout