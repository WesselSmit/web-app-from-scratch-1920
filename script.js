import * as storage from './modules/storage.js'

routie({
    '': () => {
        storage.checkStoredData()
    },
    'hiermoetietsmeteenIDkomen': () => {
        // dit moet naar de detail page linken
    }
})




// roadmap:
// // storage word gecheckt
// // leeg --> data word opgehaald & opgeslagen

// // niet leeg --> meest recente datum van data word opgehaald
// // huidige datum word opgehaald

// // beide datums moeten met elkaar vergeleken worden
// // bepaal of de data hetzelfde zijn of dat ze verschillen

// datums verschillen --> haal de ontbrekende data op
//       - gebruik hiervoor de meest recente data datum als start punt
//                - maak hiervoor een var in de API module --> deze moet currentYear overschrijven (en er moet een betere var naam komen)
// datums zijn hetzelfde || data is gefetched --> roep een functie aan die de html gaat bouwen (deze moet in de HTML module komen)