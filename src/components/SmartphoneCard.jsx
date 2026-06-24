import { Link } from "react-router-dom"
import style from "../components/SmartphoneCard.module.css"
import { useContext, useState } from "react"
import { CompareContext } from "../context/CompareContext"
import { FavoritesContext } from "../context/FavoritesContext"
const { VITE_APP_API_URL } = import.meta.env

function SmartphoneCard(props) {

    const { addToCompare } = useContext(CompareContext)
    const { addToFavorites } = useContext(FavoritesContext)

    function handleCompare() {
        fetch(`${VITE_APP_API_URL}/smartphones/${props.id}`)
            .then(res => res.json())
            .then(data => {
                addToCompare(data.smartphone)
            })
            .catch(err => console.error(err));
    }

    function handleFavorites(e) {
        e.preventDefault()
        fetch(`${VITE_APP_API_URL}/smartphones/${props.id}`)
            .then(res => res.json())
            .then(data => {
                addToFavorites(data.smartphone)
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <div className="card mb-2" style={{ width: '18rem' }}>

                <div className="card-body">
                    <div className="mb-3">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            onChange={handleCompare}
                            id={`compare-${props.id}`}
                        />

                        <label className="form-check-label" htmlFor={`compare-${props.id}`}>
                            <span className={`${style.compare}`}>Confronta</span>
                        </label>
                    </div>

                    <Link className="card-title text-decoration-none" to={`/smartphones/${props.id}`}><h4> {props.title}</h4></Link>
                    <p className={`badge ${props.category === "Premium"
                        ? "bg-warning"
                        : props.category === "Gaming"
                            ? "bg-info"
                            : "bg-success"
                        }`}>{props.category}</p>
                    <div className="">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className={`${style.btnColor} btn btn-primary me-3`} to={`/smartphones/${props.id}`}><span className="fw-semibold">Dettagli</span></Link>
                            <button type="button" className="btn p-0 border-0 bg-transparent" onClick={handleFavorites}>
                                <i className={`${style.heart} fa-solid fa-heart`}></i>
                            </button>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default SmartphoneCard