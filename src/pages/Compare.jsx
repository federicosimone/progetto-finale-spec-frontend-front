import { useContext } from "react"
import { CompareContext } from "../context/CompareContext"
import CompareCard from "../components/CompareCard"

function Compare() {
    const { compareSmartphone } = useContext(CompareContext)


    return (
        <>
            <h1 className="text-center mb-5">Confronto </h1>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {compareSmartphone.map((smartphone) => {
                        return (
                            < CompareCard
                                title={smartphone.title}
                                category={smartphone.category}
                                price={smartphone.price}
                                image={smartphone.image}
                            />
                        )
                    })}
                </div >
                <div className="container">
                    <div className="row">
                        <h3 className="text-white text-center">Caratteristiche principali:</h3>
                        {compareSmartphone.map((smartphone) => {
                            return (

                                <div className="col col-6 ">
                                    <table class="table table-striped rounded">
                                        <thead>
                                            <tr>
                                                <th scope="row">Marca</th>
                                                <td scope="col">{smartphone.brand}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">OS</th>
                                                <td>{smartphone.operatingSystem}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Storage</th>
                                                <td>{smartphone.storage} GB</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">RAM</th>
                                                <td>{smartphone.ram} GB</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Schermo</th>
                                                <td>{smartphone.displaySize} pollici</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            )
                        })}
                    </div>


                </div>
            </div>

        </>
    )
}

export default Compare