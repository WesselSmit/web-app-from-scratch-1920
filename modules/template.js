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
    <img src="{{hdurl}}" title="{{title}}" alt="NASA Astronomy Picture"> 
    <a href="#overview"><img src="./media/images/white_arrow.svg" alt="Previous APOD arrow"></a>
    <h1>{{title}}</h1>
    <p>{{date}}</p>
    <p>{{explanation}}</p>

    {{#copyright}}
        <p>copyright: {{copyright}}</p>
    {{/copyright}}

    {{^copyright}}
        <p>copyright: public domain</p>
    {{/copyright}}
    
    <div>
        <a href=""><img src="./media/images/white_arrow.svg" alt="Previous APOD arrow"></a>
        <a href=""><img src="./media/images/white_arrow.svg" alt="Next APOD arrow"></a>
    </div>`

//Create HTML for passed instructions ([target, templateName])
export function createHTML(...instructions) {
    //Full credits to https://github.com/terkelg/cantinflas for the cantinflas microJS library
    const dataObj = data.nestArrInObj(storage.getStoredData('data'))

    console.log(dataObj)

    instructions.forEach(instruction => {
        const target = instruction[0]
        const template = (instruction[1] === 'overview') ? overviewTemplate : detailsTemplate

        if (template === detailsTemplate) {
            target.innerHTML = templateEngine.cantinflas(template, dataObj.APODs[0])
        } else {
            target.innerHTML = templateEngine.cantinflas(template, dataObj)
        }
    })
}

//TODO: add a error state ({{^APODs}})