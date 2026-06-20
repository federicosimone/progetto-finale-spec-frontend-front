import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const { VITE_APP_API_URL } = import.meta.env
//import SmartphoneCardDetails from "../components/SmartphoneCardDetails"
import { Link } from "react-router-dom"
import style from "../components/SmartphoneDetail.module.css"

function SmartphoneDetail() {

    const { id } = useParams()


    const [details, setDetails] = useState({})

    console.log(details)

    function getData() {
        let url = `${VITE_APP_API_URL}/smartphones/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.smartphone))  //la struttura dell'oggetto non è direttamente smartphone, ma smartphone è una proprietà dei data della fetch.
            .catch(err => console.error(err))

    }

    useEffect(() => {
        getData()
    }, [id])  //con useEffect voglio che la funzione getData (ovvero quella che prende i dati dal fetch), venga svolta alla creazione del componente. 
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row bg-white text-dark p-4 rounded-3 shadow">
                    <div className="col col-12 col-md-6">

                        <img src={details.image} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col col-6">
                        <div>
                            <Link to={`/`} className="btn btn-primary mt-2 mb-2">Torna alla lista prodotti</Link>
                        </div>
                        <h2 className="fw-bold">{details.title} </h2>
                        <p className="badge bg-secondary">{details.category}</p>

                        <p>{details.description}</p>
                        <p className="fw-bold fs-2">€ {details.price}</p>
                        <button className="btn btn-success">Aggiungi i preferiti</button>
                        <div>
                            {/*<Link to={`/products/${parseInt(id) + 1}`} className="btn btn-primary mt-2 mb-2">Prossimo </Link>*/}
                        </div>



                    </div>
                </div>

            </div >
        </>
    )
}

export default SmartphoneDetail