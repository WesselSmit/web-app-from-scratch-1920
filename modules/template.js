import * as storage from '../modules/storage.js'
import * as data from '../modules/data.js'
import * as templateEngine from '../libraries/cantinflas.js';

export function createOverview() {
    const target = document.querySelector('#overview div:last-of-type')
    const dataObj = data.nestArrInObj(storage.getStoredData('data'))
    const tmpl = `{{#APODs}}
    <p>all titles: {{title}}</p>
 {{/APODs}}`

    target.innerHTML = templateEngine.cantinflas(tmpl, dataObj)
}

//todo: de data bevat beide images & video's; maak voor de video's een video element dat autoplayed en geen controls laat zien
//TODO: als het niet mogelijk is om met een template engine beide 'img' & 'video' tags aan te maken -> verwijder dan alle video's uit data 