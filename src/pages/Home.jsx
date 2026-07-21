import { useEffect, useState, useMemo, useCallback } from "react"
const { VITE_APP_API_URL } = import.meta.env
import SmartphoneCard from "../components/SmartphoneCard"






function Home() {

    const [smartphones, setSmartphones] = useState([])
    const [search, setSearch] = useState(() => sessionStorage.getItem("search") || "") //qui sto dicendo di leggere il valore salvato nella chiave "search" oppure di restituire stringa vuota
    //imposto lo stato di search, che utilizzo per vedere quello scrivo nell'input 
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("")
    const [error, setError] = useState(""); //stato dell'errore che di default è vuoto 
    const [debouncedSearch, setDebouncedSearch] = useState("") // creo lo stato debouncato per la fetch

    console.log(smartphones)
    console.log(search)
    console.log(category)

    // questo useEffect ha la funzione di scrivere nella chiave "search" il valore recuperato dall'input, al variare della dipendenza search.
    useEffect(() => {
        sessionStorage.setItem("search", search)
    }, [search])

    function debounce(callback, delay) {
        let timer
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(value);   //value è ciò che scrive l'utente 
            }, delay);
        };
    };

    function notDebouncedSearch(value) {  //creo una funzione che svolge il solo compito di settare lo stato 
        return setDebouncedSearch(value)
    }


    const updateDebouncedSearch = useCallback(   //uso useCallback per creare  updateDebouncedSearch solo una volta alla creazione del componente
        debounce(notDebouncedSearch, 1000), [])   //la callback che passo alla debounce è notDebouncedSearch che ha inplicito il parametro value che setta debouncedSearch in base a cosa scrive 
    //l'utente, ma lo fa un secondo dopo che l'utente ha smesso di scrivere ,




    useEffect(() => {

        async function getSmartphones() {

            let url = `${VITE_APP_API_URL}/smartphones`;

            if (debouncedSearch && !category) {  //qui utilizzo debouncedSearch, in modo da avere già la query debouncata per fare una chiamata api precisa
                url += `?search=${debouncedSearch}`;
            } else if (!debouncedSearch && category) {
                url += `?category=${category}`;
            } else if (debouncedSearch && category) {
                url += `?search=${debouncedSearch}&category=${category}`;
            }

            try {

                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error(`Errore ${res.status}`);
                }

                const data = await res.json();

                setSmartphones(data);

            } catch (err) {
                console.error(err);
                setError("Errore nel caricamento dei dati")
            }
        }

        getSmartphones();   //invoco getSmartphones dentro lo useEffect perchè lo useEffect non può essere dichiarato async
        //PERCHE'? perchè useEffect deve sempre restituire undefined 
        //ma una funzione asincrona restituisce SEMPRE una promise.
        //Quindi ho definito una funzione asincrona e l'ho invocata per eseguire la fetch. 
    }, [debouncedSearch, category]);





    const sortedSmartphones = useMemo(() => { //uso usememo per memorizzare il risultato dell'ordinamento e ricalcolarlo solo quando cambiano le dipendenze
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

    }, [smartphones, sortBy]); //sortBy è lo stato che cambia in base alla value del select, quindi SOLO quando cambia, vado a ricalcolare al funzione
    //oppure, quando cambia "smartphones", ovvero l'array originale perchè magari viene già filtrato. 
    return (
        <>
            <div className="darkDiv text-white text-center p-2">
                <h1 className="fw-bold">Il tuo prossimo smartphone è qui!</h1>
                <h3 className="">Cerca, confronta e salva i tuoi smartphones preferiti
                    fra tanti modelli, sempre in aggiornamento!</h3>
            </div>
            <div className="container">
                <div className="darkDiv row mt-3 pt-3 mb-3">

                    {/*creo l'input per il filtro*/}
                    <div className="col-4">
                        <label className="text-white mb-1">Cerca modello:</label>
                        <input
                            className="form-control mb-3 "
                            type="text" placeholder="Cerca..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                updateDebouncedSearch(e.target.value);  //usp updateDebouncedSearch perchè contiene il set debouncato
                                //se usassi direttamente setDebouncedSearch, mi farebbe la chiamata Api ad ogni lettera e non servirebbe a nulla. 
                            }} />
                    </div>


                    {/*Creo la select per filtrare in base alla categoria*/}
                    <div className="col-4">
                        <label className="text-white mb-1">Scegli la categoria:</label>
                        <select className="form-select " aria-label="Select category" value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="">Scegli una categoria</option>
                            <option value="Entry-level">Entry-level</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>

                    {/*Creo la select per ordinare in base a titolo o categoria*/}
                    <div className="col-4">
                        <label className="text-white mb-1">Ordina:</label>
                        <select className="form-select " aria-label="Select order" value={sortBy} onChange={e => setSortBy(e.target.value)}> {/*qui seleziono il criterio secondo il quale ordinare*/}
                            <option value=""></option>
                            <option value="title-asc">A-Z Titolo</option>
                            <option value="title-desc">Z-A Titolo</option>
                            <option value="category-asc">A-Z Categoria</option>
                            <option value="category-desc">Z-A Categoria</option>
                        </select>
                    </div>



                    <p className="mt-1 text-white">{search ? `Stai cercando: ${search}` : "Non hai ancora cercato nulla..."}</p>

                </div>
            </div>



            <div className="darkDiv d-flex flex-wrap justify-content-center gap-4 pt-3 pb-2`">
                {error && <p className="alert alert-danger">{error}</p>}
                {sortedSmartphones.length === 0 && (
                    <p className="alert alert-warning mt-3">
                        Nessuno smartphone trovato
                    </p>
                )}
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