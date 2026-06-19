import { Link } from "react-router-dom"

function SmartphoneCard(props) {
    return (
        <>
            <div className="card mb-2" style={{ width: '18rem' }}>

                <div className="card-body">

                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Categoria: {props.category}</p>
                    <Link className="btn btn-primary me-3" to={`/smartphones/${props.id}`}><span className="fw-semibold">Dettagli</span></Link>
                    <a href="#" className="btn btn-success">Preferiti</a>
                </div>
            </div>
        </>
    )
}

export default SmartphoneCard