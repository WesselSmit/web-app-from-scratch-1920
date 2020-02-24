import * as storage from './modules/storage.js'
import * as template from './modules/template.js'
import * as data from './modules/data.js'
import * as utils from './modules/utils.js'

//Handle filter functions/events
const filters = document.querySelectorAll('#filters p:not(:first-of-type)')
filters.forEach(target => target.addEventListener('click', () => data.filterContent(target, filters)))

const sortButtons = document.querySelectorAll('#sort p:not(:first-of-type)')
sortButtons.forEach(target => target.addEventListener('click', () => data.sortContent(target, sortButtons)))

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
        document.getElementById('new_first').classList.remove('activeSort')
        document.getElementById('old_first').classList.add('activeSort')
    },
    ':id': (id) => {
        const detailPage = document.getElementById('detail')
        template.createHTML(id, null, [detailPage, 'detail'])
        utils.scrollToElement(detailPage, 'end')
        document.querySelector('.loadingAnim').classList.add('hide')
    }
})




//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)