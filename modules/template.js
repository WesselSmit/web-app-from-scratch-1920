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
            <a href="#detail">
                <span>
                    <iframe src="{{url}}&autoplay=1&cc_load_policy=0&color=white&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1"></iframe>
                </span>
            </a>
        {{/video}}
    {{/APODs}}`

    console.log(dataObj)

    target.innerHTML = templateEngine.cantinflas(tmpl, dataObj)
}



//todo: kijk of de <span> uit de template kunnen (of verpest dit het image reflow effect?)

//TODO: de href van de <a> tag moet het ID worden en in de routie function word automatisch met JS gescrolld