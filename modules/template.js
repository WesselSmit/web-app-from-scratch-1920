import * as storage from '../modules/storage.js'
import * as data from '../modules/data.js'
import * as templateEngine from '../libraries/cantinflas.js';

//Declare the templates 
const overviewTemplate = `
    {{#APODs}}
        {{#hdurl}}
            <a href="#{{id}}" copyright="{{copyright}}">
                <span>
                    <img src="{{hdurl}}" title="{{title}}" alt="NASA Astronomy Picture">
                </span>        
            </a>
        {{/hdurl}}
    {{/APODs}}
    
    {{^APODs}}
        <p>Loading the data has failed, please refresh the page to retry.</p>
    {{/APODs}}`

const detailsTemplate = `
    <img src="{{hdurl}}" id={{id}} title="{{title}}" alt="NASA Astronomy Picture"> 
    <a href="#overview"><img src="./media/images/white_arrow.svg" alt="Previous APOD arrow"></a>
    <h1>{{title}}</h1>
    <p>{{date}}</p>
    <p>{{explanation}}</p>

    {{#copyright}}
        <p>Copyright: {{copyright}}</p>
    {{/copyright}}

    {{^copyright}}
        <p>Copyright: public domain</p>
    {{/copyright}}`

//Create HTML for passed arguments (id, [target, templateName])
export function createHTML(id, ...instructions) {
    //Full credits to https://github.com/terkelg/cantinflas for the cantinflas microJS library
    const dataObj = data.nestArrInObj(storage.getStoredData('data'))

    instructions.forEach(instruction => {
        const target = instruction[0]
        const template = (instruction[1] === 'overview') ? overviewTemplate : detailsTemplate

        if (template === detailsTemplate) {
            const ID = (id != null) ? id : 0
            target.innerHTML = templateEngine.cantinflas(template, dataObj.APODs[ID])
        } else {
            target.innerHTML = templateEngine.cantinflas(template, dataObj)

            //Reset filters
            const filters = document.querySelectorAll('#filters p:not(:first-of-type)')
            filters.forEach(filter => filter.classList.remove('activeFilter'))
            document.getElementById('none').classList.add('activeFilter')
        }
    })

    updateFilterOptions()
}

//Update the filter section in the HTML
export function updateFilterOptions() {
    const APODdata = storage.getStoredData('data')
    const numberOfAPODs = APODdata.length
    const public_domain_APODs = data.countObjValueNum(APODdata)

    document.querySelector('#filters > p:nth-of-type(2) span').textContent = (numberOfAPODs - public_domain_APODs)
    document.querySelector('#filters > p:nth-of-type(3) span').textContent = public_domain_APODs
    document.querySelector('#filters > p:nth-of-type(4) span').textContent = numberOfAPODs
}