import * as storage from './modules/storage.js'

//TODO: je moet minimaal: MAP, FILTER & REDUCE gebruiken in je code (je moet laten zien dat je dit beheerst)
//todo je hoeft deze methodes niet perse in je app te verwerken, als dat conceptueel moeilijk is dan mag je ook een
//todo stuk code schrijven dat aantoont dat je deze methodes begrijpt wat los staat van je applicatie

routie({
    '': () => {
        storage.checkStoredData()
    },
    'hiermoetietsmeteenIDkomen': () => {
        // dit moet naar de detail page linken
    }
})


//todo: gebruik :empty state om reflow animation te maken

//TODO LICENSE moet in de repo verstopt zijn (gitignore)

//todo: add error handling in fetch 

//todo: make something that gives 'feedback' to the users

//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)
//todo: maak een knop voor alleen: foto's, maak een knop voor alleen: video's