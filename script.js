import * as storage from './modules/storage.js'

//TODO: je moet minimaal: MAP, FILTER & REDUCE gebruiken in je code (je moet laten zien dat je dit beheerst)
//todo je hoeft deze methodes niet perse in je app te verwerken, als dat conceptueel moeilijk is dan mag je ook een
//todo stuk code schrijven dat aantoont dat je deze methodes begrijpt wat los staat van je applicatie

routie({
    // Full credits to https://github.com/WesselSmit/web-app-from-scratch-1920 for the routie microJS library
    '': () => {
        storage.checkStoredData()
    },
    'overview': () => {
        storage.checkStoredData()
    },
    'detail': () => {
        console.log('the user has navigated to the detail page')
        //todo: deze moet niet 'detail' zijn maar hier moet iets als ':id' staan (zie slack joost, sjors, stefan en dergelijke voor voorbeelden)
        //todo: vervolgens moet er in dit code block de template functie aan geroepen worden en een scrollIntoView() functie die naar #detail scrollt
    }
})



//todo: zorg dat de images er mooi geformatteerd uitzien/de juiste dimensies hebben


//TODO LICENSE moet in de repo verstopt zijn (gitignore)

//todo: add error handling in fetch 

//todo: make something that gives 'feedback' to the users

//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)
//todo: maak een knop voor alleen: foto's, maak een knop voor alleen: video's