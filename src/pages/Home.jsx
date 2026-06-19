import { useEffect, useState, useMemo } from "react"
const { VITE_APP_API_URL } = import.meta.env
import SmartphoneCard from "../components/SmartphoneCard"






function Home() {

    const [smartphones, setSmartphones] = useState([])
    const [search, setSearch] = useState("") //imposto lo stato di search
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("")


    console.log(search)
    console.log(category)




    useEffect(() => {
        let url = `${VITE_APP_API_URL}/smartphones`  //imposto variabile con url dove fare la chiamata api e recuperare TUTTI GLI SMARPHONE

        if (search && !category) {
            url += `?search=${search}`
        } else if (!search && category) {
            url += `?category=${category}`
        } else if
            (search && category) {
            url += `?search=${search}&category=${category}`
        }
        //che rispondono alle condizioni, ovvero che includono nel title la "search"

        fetch(url)
            .then(res => res.json())
            .then(data => setSmartphones(data))  //la chiamata API viene già fatta GIUSTA in base al filtraggio e quindi l'array smartphones verrà
            .catch(err => console.error(err))    //popolato correttamente 
    }, [search, category])



    const sorteredSmartphones = useMemo(() => {          //uso usememo per memorizzare il risultato dell'ordinamento e ricalcolarlo solo quando cambiano le dipendenze

        const copiaSmartphones = [...smartphones]

        if (sortBy === "title-asc") { // se il criterio corrisponde a "title-asc" allora tramite il metodo del localeCompare ordino alfabeticamente A-Z
            copiaSmartphones.sort((a, b) => a.title.localeCompare(b.title)) //in base al title
        } else if (sortBy === "title-desc") {
            copiaSmartphones.sort((a, b) => b.title.localeCompare(a.title))
        } else if (sortBy === "category-asc") {
            copiaSmartphones.sort((a, b) => a.category.localeCompare(b.category)) // se il criterio corrisponde a "category-asc" allora tramite il metodo del localeCompare ordino alfabeticamente A-Z
        } else if (sortBy === "category-desc") {
            copiaSmartphones.sort((a, b) => b.category.localeCompare(a.category)) //in base alla categoria 
        }





        return copiaSmartphones

    }, [smartphones, sortBy]);

    return (
        <>
            <h1>Questa è la homepage</h1>

            {/*creo l'input per il filtro*/}
            <input
                className="form-control mt-3 mb-3"
                type="text" placeholder="Cerca smartphones..."
                value={search}
                onChange={e => setSearch(e.target.value)
                } />

            <select className="form-select mb-3" aria-label="Select category" value={category} onChange={e => setCategory(e.target.value)}>
                <option selected>Scegli una categoria</option>
                <option value="Entry-level">Entry-level</option>
                <option value="Gaming">Gaming</option>
                <option value="Premium">Premium</option>
            </select>
            <select className="form-select" aria-label="Select order" value={sortBy} onChange={e => setSortBy(e.target.value)}> {/*qui seleziono il criterio secondo il quale ordinare*/}
                <option value="">Ordina</option>
                <option value="title-asc">A-Z Titolo</option>
                <option value="title-desc">Z-A Titolo</option>
                <option value="category-asc">A-Z Categoria</option>
                <option value="category-desc">Z-A Categoria</option>
            </select>

            <p className="mt-3">{search ? `Stai cercando: ${search}` : ""}</p>
            <div className="d-flex flex-wrap gap-4">
                {sorteredSmartphones.map((smartphone) => {
                    return <SmartphoneCard
                        key={smartphone.id}
                        title={smartphone.title}
                        category={smartphone.category}
                    />
                })}
            </div>



        </>
    )
}

export default Home