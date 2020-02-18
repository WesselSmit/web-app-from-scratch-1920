import * as storage from '../modules/storage.js'
import * as data from '../modules/data.js'
import * as templateEngine from '../libraries/cantinflas.js';

//Create the overview HTML for the fetched data
export function createOverview() {
    // Full credits to https://github.com/terkelg/cantinflas for the cantinflas microJS library
    const target = document.querySelector('#overview div:last-of-type')
    const dataObj = data.nestArrInObj(storage.getStoredData('data'))
    const tmpl = `
    {{#APODs}}
        {{#hdurl}}
            <a href="#apod{{id}}">
                <span>
                    <img src="{{hdurl}}" title="{{title}}" alt="NASA Astronomy Picture">
                </span>        
            </a>
        {{/hdurl}}
    {{/APODs}}`

    console.log(dataObj)

    target.innerHTML = templateEngine.cantinflas(tmpl, dataObj)
}




//TODO: de href van de <a> tag moet het ID worden en in de routie function word automatisch met JS gescrolld