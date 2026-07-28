import { createContext, useState } from "react";




const CompareContext = createContext(null)


//definisco il custom provider


function CompareProvider({ children }) {


    const [compareSmartphone, setCompareSmartphone] = useState(() => {
        const datiSalvati = localStorage.getItem("comparatore");

        return datiSalvati ? JSON.parse(datiSalvati) : []
    })

    function addToCompare(smartphone) {

        const alreadyExists = compareSmartphone.some(currentPhone => currentPhone.id === smartphone.id);   //controlla che nell'array aggiornato 
        //non ci sia un phone con l'id uguale a quello da aggiungere
        if (alreadyExists) {  //se alredyExist è vera, siginifica che esiste già
            alert("Hai già aggiunto questo smartphone")
            return;       //quindi deve ritornare l'array precedente senza aggiungere nulla e ferma la funzione
        }

        if (compareSmartphone.length >= 2) { //idem, se l'array esistente ha 2 o più elementi,
            alert("Non puoi confrontare più di 2 smartphone alla volta")
            return;        //deve ritornare l'array precendente senza aggiungere nulla e ferma la funzione
        }

        const newCompare = [...compareSmartphone, smartphone]

        setCompareSmartphone(newCompare) //per renderizzare il componente

        localStorage.setItem("comparatore", JSON.stringify(newCompare))
            ;
    }

    function removeFromCompare(id) {

        const newCompare = compareSmartphone.filter(phone => phone.id !== id);
        setCompareSmartphone(newCompare) //Uso filter per creare un nuovo array che contiene tutti gli smartphone tranne quello che voglio rimuovere. Confronto gli id perché identificano univocamente ogni smartphone.
        // Passo una callback a setCompareSmartphone così lavoro sempre sull'ultima versione aggiornata dello state.

        localStorage.setItem("comparatore", JSON.stringify(newCompare))
    }


    return (
        <CompareContext.Provider value={{ compareSmartphone, setCompareSmartphone, addToCompare, removeFromCompare }}>   {/*tutti i figli possono accedere ai dati (compareSmartphone) e a setCompareSmartphone per modificare l'array  tramite CompareContext.*/}
            {children}
        </CompareContext.Provider>
    );

}

export { CompareContext, CompareProvider }