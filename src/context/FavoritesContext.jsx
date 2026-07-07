import { createContext, useState } from "react";




const FavoritesContext = createContext(null)


//definisco il custom provider


function FavoritesProvider({ children }) {


    const [favoritesSmartphone, setFavoritesSmartphone] = useState(() => {
        // 1. Chiedo al browser cosa c'è salvato nella chiave "favourites"
        const datiSalvati = localStorage.getItem("favourites");

        // 2. Se "favourites" è popolato, lo "spacchetto" (parse) PERCHE'?? Perchè chiave e valore devono esser stringhe e non oggetti o array  
        // Se è null, ritorno un array vuoto [].
        return datiSalvati ? JSON.parse(datiSalvati) : []; //con il ternario gli dico che se dati salvati esiste, allora deve parsarmi i dati oppure restituire array vuoto
    });

    function addToFavorites(smartphone) {

        const alreadyExists = favoritesSmartphone.some(currentPhone => currentPhone.id === smartphone.id);   //controlla che nell'array aggiornato 
        //non ci sia un phone con l'id uguale a quello da aggiungere
        if (alreadyExists) {  //se alredyExist è vera, siginifica che esiste già
            alert("Hai già aggiunto questo smartphone")
            return;       //quindi deve ritornare l'array precedente senza aggiungere nulla e ferma la funzione
        }

        // 1. Creo un nuovo array e lo salvo in newFavourites, invece di fare [...prev, smarphone] per separare la logica. 
        const newFavorites = [...favoritesSmartphone, smartphone];

        // 2. Aggiorno lo stato (per la UI)
        setFavoritesSmartphone(newFavorites);

        // 3. Salvo nel localStorage (per la persistenza)
        localStorage.setItem("favourites", JSON.stringify(newFavorites)); //se le due condizioni precendenti non si verificano, allora ritorna una copia dell'array 
        //aggiungendo lo smartphone. 
        ;
    }

    function removeFromFavorites(id) {
        // 1. Calcolo il nuovo array filtrato
        const newFavorites = favoritesSmartphone.filter(phone => phone.id !== id);

        // 2. Aggiorno lo stato (per la UI)
        setFavoritesSmartphone(newFavorites);

        // 3. Aggiorno il localStorage (per la persistenza)
        localStorage.setItem("favourites", JSON.stringify(newFavorites));
    }


    return (
        <FavoritesContext.Provider value={{ favoritesSmartphone, setFavoritesSmartphone, addToFavorites, removeFromFavorites }}>   {/*tutti i figli possono accedere ai dati (favoritesSmartphone) e a setFavoritesSmartphone per modificare l'array  tramite FavoritesContext.*/}
            {children}
        </FavoritesContext.Provider>
    );

}

export { FavoritesContext, FavoritesProvider }