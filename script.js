import * as storage from './modules/storage.js'
import * as utils from './modules/utils.js'

//TODO: je moet minimaal: MAP, FILTER & REDUCE gebruiken in je code (je moet laten zien dat je dit beheerst)
//todo je hoeft deze methodes niet perse in je app te verwerken, als dat conceptueel moeilijk is dan mag je ook een
//todo stuk code schrijven dat aantoont dat je deze methodes begrijpt wat los staat van je applicatie
// * map(), filter() zijn gebruikt

//Handle routing
routie({
    //Full credits to https://github.com/WesselSmit/web-app-from-scratch-1920 for the routie microJS library
    '': () => {
        storage.checkStoredData()
    },
    'overview': () => {
        const overviewPage = document.getElementById('overview')
        utils.scrollToElement(overviewPage, 'start')
        storage.checkStoredData()
    },
    ':id': (id) => {
        const detailPage = document.getElementById('detail')
        utils.scrollToElement(detailPage, 'end')

        console.log('load data from APOD: ', id)
    }
})


//TODO: het nieuwe concept is dat je kan filteren op "copyright" en "non-copyright"



//todo: add error handling in fetch 

//todo: make something that gives 'feedback' to the users

//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)
//todo: maak een filter functie -> knop voor copyright / non-copyright