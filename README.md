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

- È stata utilizzata una variabile d'ambiente (.env) per centralizzare l'URL base delle API ed evitare duplicazioni nel codice.

- Ricerca e filtro vengono eseguiti tramite query string sugli endpoint del backend, riducendo il numero di dati elaborati lato client.

- L'ordinamento viene gestito lato frontend tramite useMemo, evitando ricalcoli inutili ad ogni render.

- Navbar e Footer sono stati inseriti in un DefaultLayout con Outlet per mantenerli persistenti durante la navigazione.

- Per il comparatore è stato utilizzato un Context dedicato, evitando prop drilling e permettendo la condivisione dello stato tra pagine differenti.


Il Context consente di:

- mantenere gli smartphone selezionati durante la navigazione
- aggiungere smartphone al confronto
- rimuovere smartphone dal confronto
- impedire l'inserimento di duplicati
- limitare il confronto a un massimo di due smartphone