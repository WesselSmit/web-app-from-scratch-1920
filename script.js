import * as storage from './modules/storage.js'

routie({
    '': () => {
        storage.checkStoredData()
    },
    'hiermoetietsmeteenIDkomen': () => {
        // dit moet naar de detail page linken
    }
})

//TODO: test of de API nog werkt, haalt hij van elke dag een object op?


//todo: breek de logica in 'storage' & 'api' ook weer op in utilsaparte functies als dat mogelijk is

//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)
//todo: maak een knop voor alleen: foto's, maak een knop voor alleen: video's



//todo: de API werkte s'nachts niet omdat het bij ons de volgende dag was maar in de USA nog niet,
//todo: de API is Amerikaans en dus werkt het met die timezone!
//todo: dus de API probeert van s'nachts in Europa een image extra op te halen die nog niet bestaat in de USA
//todo: verander in de code de timezone OF haal het verschil in tijdzoner ervan af
//todo: kan dit ook laten als die in de ochtend goed werkt (niemand gaat het s'nachts proberen)