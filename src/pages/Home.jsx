import { useEffect, useState } from "react"
const { VITE_APP_API_URL } = import.meta.env
import SmartphoneCard from "../components/SmartphoneCard"






function Home() {

    const [smartphones, setSmartphones] = useState([])
    const [search, setSearch] = useState("") //imposto lo stato di search
    //const [filteredSmartphones, setFilteredSmartphones] = useState(smartphones)

    console.log(search)


    useEffect(() => {
        let url = `${VITE_APP_API_URL}/smartphones`  //imposto variabile con url dove fare la chiamata api e recuperare TUTTI GLI SMARPHONE

        if (search) {  //se search è popolata si aggiunge il query parameter search all'url originario (tramite concatenzione di stringhe +=)
            url += `?search=${search}`  // sfruttando la logica del backend vado direttamente a chiamare solamente gli smartphone 
        }                               //che rispondono alle condizioni, ovvero che includono nel title la "search"

        fetch(url)
            .then(res => res.json())
            .then(data => setSmartphones(data))  //la chiamata API viene già fatta GIUSTA in base al filtraggio e quindi l'array smartphones verrà
            .catch(err => console.error(err))    //popolato correttamente 
    }, [search])

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

            <p className="mt-3">{search ? `Stai cercando: ${search}` : ""}</p>

            <ul className='list-unstyled'>
                {smartphones.map((smartphone) => {
                    return <SmartphoneCard
                        key={smartphone.id}
                        title={smartphone.title}
                        category={smartphone.category}
                    />
                })}
            </ul>


        </>
    )
}

export default Home