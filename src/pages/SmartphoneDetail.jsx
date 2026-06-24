import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const { VITE_APP_API_URL } = import.meta.env
//import SmartphoneCardDetails from "../components/SmartphoneCardDetails"
import { Link } from "react-router-dom"
import style from "../components/SmartphoneDetail.module.css"
import { CompareContext } from "../context/CompareContext"
import { FavoritesContext } from "../context/FavoritesContext"



function SmartphoneDetail() {

    const { id } = useParams()
    const { compareSmartphone, addToCompare } = useContext(CompareContext)
    const { addToFavorites } = useContext(FavoritesContext)

    function handleFavorites(e) {
        e.preventDefault()
        fetch(`${VITE_APP_API_URL}/smartphones/${id}`)
            .then(res => res.json())
            .then(data => {
                addToFavorites(data.smartphone)
            })
            .catch(err => console.error(err));
    }

    const [details, setDetails] = useState({})

    console.log(compareSmartphone)

    async function getData() {
        let url = `${VITE_APP_API_URL}/smartphones/${id}`;

        try {
            const res = await fetch(url);

            //Controlla se l'ID esiste sul server
            if (!res.ok) {
                throw new Error(`Smartphone non trovato (Status ${res.status})`);
            }

            const data = await res.json();
            setDetails(data.smartphone);

        } catch (err) {
            //Catturo QUALSIASI errore del processo della chiamata
            console.error("Errore nel recupero dei dati:", err);
        }
    }


    useEffect(() => {   //con useEffect voglio che la funzione getData (ovvero quella che prende i dati dal fetch), venga svolta alla creazione del componente. 
        getData()
    }, [id])



    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row bg-white text-dark p-4 rounded-3 shadow">
                    <div className="col col-12 col-md-6">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                            <img
                                src={details.image}
                                alt={details.title}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain"
                                }}
                            />
                        </div>

                    </div>
                    <div className="col col-12 col-md-6">
                        <div className="text-end">
                            <Link to={`/`} className="btn btn-dark mt-2 mb-2">← Torna alla lista prodotti</Link>
                        </div>
                        <h5>{details.brand}</h5>
                        <h2 className="fw-bold">{details.title} </h2>
                        <p className={`badge ${details.category === "Premium"
                            ? "bg-warning"
                            : details.category === "Gaming"
                                ? "bg-info"
                                : "bg-success"
                            }`}>{details.category}</p>

                        <p>{details.description}</p>
                        <p className="fw-bold fs-2">€ {details.price}</p>

                        <button className="btn btn-success me-2 " onClick={() => addToCompare(details)}>Confronta</button>
                        <button type="button" className="btn btn-primary" onClick={handleFavorites}>Preferiti</button>
                        <div className="mt-3">
                            {<Link to={`/smartphones/${parseInt(id) - 1}`} ><i className="fs-3 fa-solid fa-circle-arrow-left"></i> </Link>}
                            <span> </span>
                            {<Link to={`/smartphones/${parseInt(id) + 1}`} ><i className="fs-3 fa-solid fa-circle-arrow-right"></i> </Link>}
                        </div>



                    </div>
                </div>

            </div >
        </>
    )
}

export default SmartphoneDetail