function SmartphoneCard(props) {
    return (
        <>
            <div className="card mb-2" style={{ width: '18rem' }}>

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Categoria: {props.category}</p>
                    <a href="#" className="btn btn-primary me-3">Mostra dettagli</a>
                    <a href="#" className="btn btn-success">Preferiti</a>
                </div>
            </div>
        </>
    )
}

export default SmartphoneCard