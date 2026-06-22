import { Link } from "react-router-dom"
import style from "../components/SmartphoneCard.module.css"
import { useContext, useState } from "react"
import { CompareContext } from "../context/CompareContext"
const { VITE_APP_API_URL } = import.meta.env

function SmartphoneCard(props) {

    const { compareSmartphone, setCompareSmartphone, addToCompare } = useContext(CompareContext)

    function handleCompare() {
        fetch(`${VITE_APP_API_URL}/smartphones/${props.id}`)
            .then(res => res.json())
            .then(data => {
                addToCompare(data.smartphone)
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <div className="card mb-2" style={{ width: '18rem' }}>

                <div className="card-body">

                    <Link className="card-title text-decoration-none" to={`/smartphones/${props.id}`}><h5> {props.title}</h5></Link>
                    <p className="badge bg-secondary">{props.category}</p>
                    <div className="">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className={`${style.btnColor} btn btn-primary me-3`} to={`/smartphones/${props.id}`}><span className="fw-semibold">Dettagli</span></Link>
                            <a href="#"><i className={`${style.heart} fa-solid fa-heart`}></i></a>
                        </div>
                        <div className="mt-2">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                onChange={handleCompare}
                                id={`compare-${props.id}`}
                            />

                            <label className="form-check-label" htmlFor={`compare-${props.id}`}>
                                Confronta
                            </label>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default SmartphoneCard