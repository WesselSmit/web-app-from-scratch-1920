import * as api from '../modules/api.js'
import * as utils from '../modules/utils.js'

//Check if localStorage contains data
export function checkStoredData() {
    let result = getStoredItem('data')
    if (result != null) {
        //Get most recent date in data
        const lastDataDate = utils.getLastDataDate(result)

        //Get current date 
        const now = new Date()
        const currentDay = utils.prefixZero(now.getDate())
        const currentMonth = utils.prefixZero(now.getMonth() + 1)
        const currentYear = now.getFullYear()
        const currentDate = utils.joinString('-', currentYear, currentMonth, currentDay)

        //Check if the data in localStorage up is to date
        const equalDates = utils.compareValues(lastDataDate, currentDate)

        //Fetch missing data if localStorage is not up to date
        if (equalDates === false) {
            api.fetchData(equalDates, currentDate)
                .then(() => console.log('data was incomplete, following data was missing: ', getStoredItem('data')))
        } else {
            console.log('data was complete: ', getStoredItem('data'))
        }
    } else {
        api.fetchData(null)
            .then(() => console.log('data was empty, fetched the following data: ', getStoredItem('data')))
    }
}

//Set value in localStorage
export function storeItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
}

//Get value from localStorage
export function getStoredItem(item) {
    return JSON.parse(localStorage.getItem(item))
}