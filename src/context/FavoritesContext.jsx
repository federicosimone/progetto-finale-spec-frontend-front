import { createContext, useState } from "react";




const FavoritesContext = createContext(null)


//definisco il custom provider


function FavoritesProvider({ children }) {


    const [favoritesSmartphone, setFavoritesSmartphone] = useState([])

    function addToFavorites(smartphone) {
        setFavoritesSmartphone(prev => {
            const alreadyExists = prev.some(currentPhone => currentPhone.id === smartphone.id);   //controlla che nell'array aggiornato 
            //non ci sia un phone con l'id uguale a quello da aggiungere
            if (alreadyExists) {  //se alredyExist è vera, siginifica che esiste già
                alert("Hai già aggiunto questo smartphone")
                return prev;       //quindi deve ritornare l'array precedente senza aggiungere nulla e ferma la funzione
            }

            return [...prev, smartphone]; //se le due condizioni precendenti non si verificano, allora ritorna una copia dell'array 
            //aggiungendo lo smartphone. 
        });
    }

    function removeFromFavorites(id) {
        setFavoritesSmartphone(prev => prev.filter(phone => phone.id !== id)) //Uso filter per creare un nuovo array che contiene tutti gli smartphone tranne quello che voglio 
        //rimuovere. Confronto gli id perché identificano univocamente ogni smartphone.
        // Passo una callback a setCompareSmartphone così lavoro sempre sull'ultima versione aggiornata dello state.
    }


    return (
        <FavoritesContext.Provider value={{ favoritesSmartphone, setFavoritesSmartphone, addToFavorites, removeFromFavorites }}>   {/*tutti i figli possono accedere ai dati (favoritesSmartphone) e a setFavoritesSmartphone per modificare l'array  tramite FavoritesContext.*/}
            {children}
        </FavoritesContext.Provider>
    );

}

export { FavoritesContext, FavoritesProvider }