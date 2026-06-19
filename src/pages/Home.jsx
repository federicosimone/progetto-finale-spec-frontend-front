import { useEffect, useState, useMemo } from "react"
const { VITE_APP_API_URL } = import.meta.env
import SmartphoneCard from "../components/SmartphoneCard"






function Home() {

    const [smartphones, setSmartphones] = useState([])
    const [search, setSearch] = useState("") //imposto lo stato di search
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("")

    console.log(smartphones)
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



    const sortedSmartphones = useMemo(() => {          //uso usememo per memorizzare il risultato dell'ordinamento e ricalcolarlo solo quando cambiano le dipendenze
        //Non mi serve filtrare perchè l'array smartphones mi arriva già filtrato dal backend a causa dello useEffect precendente 
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
            <h1 className="fw-bold">Cerca il tuo prossimo smartphone!</h1>
            <div className="row mt-3">
                {/*creo l'input per il filtro*/}
                <div className="col-4">
                    <input
                        className="form-control mb-3 col-4"
                        type="text" placeholder="Cerca..."
                        value={search}
                        onChange={e => setSearch(e.target.value)
                        } />
                </div>


                {/*Creo la select per filtrare in base alla categoria*/}
                <div className="col-4">
                    <select className="form-select mb-3 col-4" aria-label="Select category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Scegli una categoria</option>
                        <option value="Entry-level">Entry-level</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>

                {/*Creo la select per ordinare in base a titolo o categoria*/}
                <div className="col-4">
                    <select className="form-select col-4" aria-label="Select order" value={sortBy} onChange={e => setSortBy(e.target.value)}> {/*qui seleziono il criterio secondo il quale ordinare*/}
                        <option value="">Ordina</option>
                        <option value="title-asc">A-Z Titolo</option>
                        <option value="title-desc">Z-A Titolo</option>
                        <option value="category-asc">A-Z Categoria</option>
                        <option value="category-desc">Z-A Categoria</option>
                    </select>
                </div>



                <p className="mt-3">{search ? `Stai cercando: ${search}` : ""}</p>
            </div>

            <div className="d-flex flex-wrap justify-content-center  gap-4">
                {sortedSmartphones.map((smartphone) => {   //ho sostituito l'array originale con la copia creata per l'ordinamento. 
                    return <SmartphoneCard
                        id={smartphone.id}
                        title={smartphone.title}
                        category={smartphone.category}
                    />
                })}
            </div>



        </>
    )
}

export default Home