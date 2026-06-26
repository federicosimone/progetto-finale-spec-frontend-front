import style from "../components/Footer.module.css"


function Footer() {
    return (
        <>
            <div className="bg-dark text-white">
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-3">
                            <h4 className="fw-bold">COMPANY</h4>
                            <ul className="p-0">
                                <li className="list-group-item"><a className="text-decoration-none text-reset" href="#">About Us</a></li>
                                <li className="list-group-item"><a className="text-decoration-none text-reset" href="#">Credits</a></li>
                                <li className="list-group-item"><a className="text-decoration-none text-reset" href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h4 className="fw-bold">CUSTOMER CARE</h4>
                            <ul className="p-0">
                                <li className="list-group-item"><a className="text-decoration-none text-reset" href="#">Problemi tecnici</a></li>
                                <li className="list-group-item"><a className="text-decoration-none text-reset" href="#">Reclami</a></li>
                                <li className="list-group-item"><a className="text-decoration-none text-reset" href="#">Info</a></li>
                            </ul>
                        </div>
                        <div className={`${style.logoFooter} col-3`}>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Footer 