import { useContext } from "react"
import { CompareContext } from "../context/CompareContext"


function CompareCard(props) {

    const { removeFromCompare } = useContext(CompareContext)

    return (
        <>

            <div className="card mb-2" style={{ width: '18rem' }}>

                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                        <img
                            src={props.image}
                            alt={props.title}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain"
                            }}
                        />
                    </div>
                    <h5> {props.title}</h5>
                    <p className="card-text">Categoria: {props.category}</p>
                    <p className="card-text fw-bold text-success ">€ {props.price.toFixed(2)}</p>
                    <button className="btn btn-danger" onClick={() => removeFromCompare(props.id)}>Rimuovi</button>


                </div>
            </div>

        </>
    )
}

export default CompareCard