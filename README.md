# Progetto SmartphoneShop

Applicazione web sviluppata con React che permette di consultare un catalogo di smartphone, effettuare ricerche, applicare filtri, visualizzare il dettaglio dei prodotti, salvarli tra i preferiti e confrontarne le caratteristiche.

L'utente può:

- Visualizzare la lista degli smartphone completa
- Cercare smartphone per nome
- Filtrare gli smartphone per categoria
- Ordinare gli smartphone in ordine alfabetico per titolo o categoria
- Visualizzare il dettaglio di uno smartphone
- Salvare smartphone nei preferiti
- Confrontare due smartphone tra loro

## Tecnologie utilizzate

### Frontend

- React
- React Router DOM
- Bootstrap
- JavaScript
- Fetch API
- Context API
- CSS Modules
- Vite

### Backend

Backend fornito dalla traccia del progetto finale Boolean.

## Struttura del progetto

### Risorsa principale

Smartphone 

Proprietà utilizzate:

- title
- category
- brand
- price
- operatingSystem
- description
- ram
- storage
- displaySize
- image

## Funzionalità implementate

### Lista smartphone

Visualizzazione di tutti gli smartphone presenti nel database.


## Scelte progettuali

- È stata utilizzata una variabile d'ambiente (.env) per centralizzare l'URL base delle API ed evitare duplicazioni nel codice.

- Ricerca e filtro vengono eseguiti tramite query string sugli endpoint del backend, riducendo il numero di dati elaborati lato client.

- L'ordinamento viene gestito lato frontend tramite useMemo, evitando ricalcoli inutili ad ogni render.

- La ricerca viene effettuata con un input controllato in modo da mostrare in tempo reale solo gli smartphone che corrispondono con la ricerca.  

- L'utilizzo del DefaultLayout permette di evitare la duplicazione della Navbar e del Footer nelle varie pagine dell'applicazione.

- Per il comparatore e per i preferiti sono stati utilizzati due Contexts dedicati, evitando prop drilling e permettendo la condivisione dello stato tra pagine differenti.


### Comparatore 

- mantenere gli smartphone selezionati durante la navigazione
- aggiungere smartphone al confronto
- rimuovere smartphone dal confronto
- impedire l'inserimento di duplicati
- limitare il confronto a un massimo di due smartphone

### Preferiti

L'utente può:

- aggiungere smartphone ai preferiti
- rimuoverli
- consultare la lista dei preferiti in una pagina dedicata

### Filtro

Filtro tramite query string:

```txt
/smartphones?category=...
```

### Ricerca + filtro

È possibile combinare entrambe le query:

```txt
/smartphones?search=iphone&category=Premium
```

### Ordinamento

L'ordinamento viene eseguito lato frontend utilizzando **useMemo**.

Sono disponibili:

- Titolo A-Z
- Titolo Z-A
- Categoria A-Z
- Categoria Z-A

### Pagina di dettaglio

Ogni smartphone dispone di una pagina dedicata che mostra:

- immagine
- titolo
- categoria
- descrizione
- prezzo
- sistema operativo
- RAM
- memoria interna
- brand
- dimensioni display

## Installazione

Installare le dipendenze


npm install

npm run dev


---

## 9. Database

```md
## Database

Il progetto include:

- file `types.ts`
- cartella `database`
- file `smartphone.json`

contenente almeno 10 record coerenti con la risorsa scelta.



