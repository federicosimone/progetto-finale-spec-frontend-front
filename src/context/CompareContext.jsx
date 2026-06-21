import { createContext, useState } from "react";




const CompareContext = createContext(null)


//definisco il custom provider


function CompareProvider({ children }) {


    const [compareSmartphone, setCompareSmartphone] = useState([])


    return (
        <CompareContext.Provider value={{ compareSmartphone, setCompareSmartphone }}>   {/*tutti i figli possono accedere ai dati (compareSmartphone) e a setCompareSmartphone per modificare l'array  tramite CompareContext.*/}
            {children}
        </CompareContext.Provider>
    );

}

export { CompareContext, CompareProvider }