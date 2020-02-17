import * as api from '../modules/api.js'
import * as utils from '../modules/utils.js'
import * as template from '../modules/template.js'

//Check if localStorage contains data
export function checkStoredData() {
    const result = getStoredData('data')
    if (result != null) {
        //Get most recent date in data
        const lastDataDate = utils.getLastDataDate(result, 'date')

        //Get current date 
        const date = utils.createYYYYMMDDobj()
        const currentDate = utils.joinString('-', date.currentYear, utils.prefixZero(date.currentMonth), utils.prefixZero(date.currentDay))

        //Check if the data in localStorage is up to date
        const equalDates = utils.compareValues(lastDataDate, currentDate)

        //Fetch missing data if localStorage is not up to date & create HTML
        if (equalDates === false) {
            api.fetchData(equalDates, currentDate)
                .then(() => template.createOverview())
        } else {
            template.createOverview()
        }
    } else {
        //Fetch data from API
        api.fetchData(null)
            .then(() => template.createOverview())
    }
}

//Set value in localStorage
export function storeData(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
}

//Get value from localStorage
export function getStoredData(item) {
    return JSON.parse(localStorage.getItem(item))
}