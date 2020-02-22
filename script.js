import * as storage from './modules/storage.js'
import * as template from './modules/template.js'
import * as data from './modules/data.js'
import * as utils from './modules/utils.js'

//Handle routing
routie({
    //Full credits to https://github.com/jgallen23/routie for the routie microJS library
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
        template.createHTML(id, [detailPage, 'detail'])
        utils.scrollToElement(detailPage, 'end')
        document.querySelector('.loadingAnim').classList.add('hide')
    }
})


const filters = document.querySelectorAll('#filters p:not(:first-of-type)')
filters.forEach(target => target.addEventListener('click', () => data.filterContent(target, filters)))



//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)