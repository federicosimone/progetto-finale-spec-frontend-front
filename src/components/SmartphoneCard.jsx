import { Link } from "react-router-dom"
import style from "../components/SmartphoneCard.module.css"

function SmartphoneCard(props) {
    return (
        <>
            <div className="card mb-2" style={{ width: '18rem' }}>

                <div className="card-body">

                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Categoria: {props.category}</p>
                    <div className="container ">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="btn btn-primary me-3" to={`/smartphones/${props.id}`}><span className="fw-semibold">Dettagli</span></Link>
                            <a href="#"><i className={`${style.heart} fa-solid fa-heart`}></i></a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SmartphoneCard