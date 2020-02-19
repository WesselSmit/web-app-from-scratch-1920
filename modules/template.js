import * as storage from '../modules/storage.js'
import * as data from '../modules/data.js'
import * as templateEngine from '../libraries/cantinflas.js';

//Declare the templates 
const overviewTemplate = `
{{#APODs}}
    {{#hdurl}}
        <a href="#apod{{id}}">
            <span>
                <img src="{{hdurl}}" title="{{title}}" alt="NASA Astronomy Picture">
            </span>        
        </a>
    {{/hdurl}}
{{/APODs}}`


const detailsTemplate = `
{{#APODs}}
    dit is een test voor de details
{{/APODs}}`


//Create HTML for passed instructions ([target, templateName])
export function createHTML(...instructions) {
    //Full credits to https://github.com/terkelg/cantinflas for the cantinflas microJS library
    const dataObj = data.nestArrInObj(storage.getStoredData('data'))

    instructions.forEach(instruction => {
        const target = instruction[0]
        const template = (instruction[1] === 'overview') ? overviewTemplate : detailsTemplate

        target.innerHTML = templateEngine.cantinflas(template, dataObj)
    })
}

//TODO: add a error state ({{^APODs}})