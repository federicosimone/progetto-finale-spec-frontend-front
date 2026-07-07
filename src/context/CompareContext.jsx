import { createContext, useState } from "react";




const CompareContext = createContext(null)


//definisco il custom provider


function CompareProvider({ children }) {


    const [compareSmartphone, setCompareSmartphone] = useState([])

    function addToCompare(smartphone) {
        setCompareSmartphone(prev => {
            const alreadyExists = prev.some(currentPhone => currentPhone.id === smartphone.id);   //controlla che nell'array aggiornato 
            //non ci sia un phone con l'id uguale a quello da aggiungere
            if (alreadyExists) {  //se alredyExist è vera, siginifica che esiste già
                alert("Hai già aggiunto questo smartphone")
                return prev;       //quindi deve ritornare l'array precedente senza aggiungere nulla e ferma la funzione
            }

            if (prev.length >= 2) { //idem, se l'array esistente ha 2 o più elementi,
                alert("Non puoi confrontare più di 2 smartphone alla volta")
                return prev;        //deve ritornare l'array precendente senza aggiungere nulla e ferma la funzione
            }

            return [...prev, smartphone]; //se le due condizioni precendenti non si verificano, allora ritorna una copia dell'array 
            //aggiungendo lo smartphone per concatenazione. 
        });
    }

    function removeFromCompare(id) {
        setCompareSmartphone(prev => prev.filter(phone => phone.id !== id)) //Uso filter per creare un nuovo array che contiene tutti gli smartphone tranne quello che voglio rimuovere. Confronto gli id perché identificano univocamente ogni smartphone.
        // Passo una callback a setCompareSmartphone così lavoro sempre sull'ultima versione aggiornata dello state.
    }


    return (
        <CompareContext.Provider value={{ compareSmartphone, setCompareSmartphone, addToCompare, removeFromCompare }}>   {/*tutti i figli possono accedere ai dati (compareSmartphone) e a setCompareSmartphone per modificare l'array  tramite CompareContext.*/}
            {children}
        </CompareContext.Provider>
    );

}

export { CompareContext, CompareProvider }