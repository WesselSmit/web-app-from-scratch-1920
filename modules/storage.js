import * as api from '../modules/api.js'
import * as utils from '../modules/utils.js'
import * as html from './html.js'

//Check if localStorage contains data
export function checkStoredData() {
    let result = getStoredItem('data')
    if (result != null) {
        //Get most recent date in data
        const lastDataDate = utils.getLastDataDate(result)

        //Get current date 
        //todo: maak hier een util.createCurrentDate() function van
        //todo: return in de functie utils.joinString('-', currentYear, currentMonth, currentDay)
        const now = new Date()
        const currentDay = utils.prefixZero(now.getDate())
        const currentMonth = utils.prefixZero(now.getMonth() + 1)
        const currentYear = now.getFullYear()
        const currentDate = utils.joinString('-', currentYear, currentMonth, currentDay)

        //Check if the data in localStorage up is to date
        const equalDates = utils.compareValues(lastDataDate, currentDate)

        //Fetch missing data if localStorage is not up to dat
        //todo  maaks de if statements verschillende functions die aangeroepen worden in een ternary
        //todo geef GEEN data mee aan 'html.createOverview()' --> deze kan uit localStorage opgehaald worden in de 'html' module
        if (equalDates === false) {
            api.fetchData(equalDates, currentDate)
                .then(() => {
                    console.log('fetched missing -->', getStoredItem('data'))
                    html.createOverview(getStoredItem('data'))
                })
        } else {
            console.log('was already complete', getStoredItem('data'))
            html.createOverview(getStoredItem('data'))
        }
    } else {
        api.fetchData(null)
            .then(() => {
                console.log('was empty --> ', getStoredItem('data'))
                html.createOverview(getStoredItem('data'))
            })
    }
}

//todo: rename storeItem --> storeData
//Set value in localStorage
export function storeItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
}


//todo: rename getStoredItem --> getStoredData
//Get value from localStorage
export function getStoredItem(item) {
    return JSON.parse(localStorage.getItem(item))
}