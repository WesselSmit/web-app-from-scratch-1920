import * as storage from '../modules/storage.js'
import * as data from '../modules/data.js'
import * as templateEngine from '../libraries/cantinflas.js';

export function createOverview() {
    // Full credits to https://github.com/terkelg/cantinflas for the cantinflas microJS library
    const target = document.querySelector('#overview div:last-of-type')
    const dataObj = data.nestArrInObj(storage.getStoredData('data'))
    const tmpl = `
    {{#APODs}}
        {{#image}}
            <a href="#detail">
                <span>
                    <img src="{{hdurl}}" title="{{title}}" alt="NASA Astronomy Picture">
                </span>        
            </a>
        {{/image}}

        {{#video}}
            <p>{{id}} video {{url}}</p>
        {{/video}}
    {{/APODs}}`

    console.log(dataObj)

    target.innerHTML = templateEngine.cantinflas(tmpl, dataObj)
}


//TODO: de href van de <a> tag moet het ID worden en in de routie function word automatisch met JS gescrolld

//todo: de data bevat beide images & video's; maak voor de video's een video element dat autoplayed en geen controls laat zien