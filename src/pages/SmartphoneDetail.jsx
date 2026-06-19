import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const { VITE_APP_API_URL } = import.meta.env
//import SmartphoneCardDetails from "../components/SmartphoneCardDetails"
import { Link } from "react-router-dom"

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
            <div className="card mb-2" style={{ width: '18rem' }}>
                <img src={details.image} alt="" />
                <div className="card-body">
                    <h3>{details.brand}</h3>
                    <h5 className="card-title">{details.title}</h5>
                    <p className="card-text">Categoria: {details.category}</p>
                    <p className="card-text">{details.description}</p>
                    <p className="card-text fw-bold text-success ">€ {details.price}</p>
                    <Link className="btn btn-primary me-3" to={`/`}><span className="fw-semibold">Torna alla lista</span></Link>
                    <a href="#" className="btn btn-success">Preferiti</a>
                </div>
            </div>
        </>
    )
}

export default SmartphoneDetail