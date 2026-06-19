# Smartphone Compare

Applicazione web sviluppata con React che permette di confrontare smartphone appartenenti a diverse categorie.

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

### Ricerca

Ricerca per titolo tramite query string:

```txt
/smartphones?search=...

## Scelte progettuali

- si è deciso di salvare la url di base in un file .env per ridurre al minimo le possibilità di errore
- per l'ordinamento si è deciso di utilizzare useMemo, per memorizzare il risultato dell'ordinamento e ricalcolarlo solo quando cambiano le dipendenze
- Si è utilizzato un DefaultLayout. Questa scelta permette di mantenere elementi comuni dell'interfaccia, come la Navbar e il Footer, sempre presenti durante la navigazione tra le diverse pagine dell'applicazione ed evitare il loro inutile re-render 

