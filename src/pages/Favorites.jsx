import { FavoritesContext } from "../context/FavoritesContext"
import FavoritesCard from "../components/FavoritesCard"
import { useContext } from "react"


function Favorites() {

    const { favoritesSmartphone } = useContext(FavoritesContext)
    return (
        <>
            <div className="darkDiv p-3 mb-3 text-white">
                <h1>Lista preferiti</h1>
                <h3>Qui puoi trovare i tuoi smartphone preferiti</h3>
            </div>

            <div className="container darkDiv pt-3 pb-2">
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