import { FavoritesContext } from "../context/FavoritesContext"
import FavoritesCard from "../components/FavoritesCard"
import { useContext } from "react"


function Favorites() {

    const { favoritesSmartphone } = useContext(FavoritesContext)
    return (
        <>
            <h1>Ciao</h1>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {favoritesSmartphone.length === 0 && (
                        <p className="alert alert-info fs-2">
                            Nessun preferito salvato
                        </p>
                    )}
                    {favoritesSmartphone.map((smartphone) => {
                        return (
                            < FavoritesCard
                                title={smartphone.title}
                                category={smartphone.category}
                                price={smartphone.price}
                                image={smartphone.image}
                                id={smartphone.id}
                            />
                        )
                    })}
                </div >
            </div>
        </>
    )


}

export default Favorites