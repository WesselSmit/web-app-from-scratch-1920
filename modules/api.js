import * as storage from '../modules/storage.js'
import * as utils from '../modules/utils.js'

//Fetch the data from API
export async function fetchData(equalDates, lastDataDate) {
    const startDate = (equalDates === false) ? lastDataDate : utils.createStartYearDate() //Determine how much data has to be loaded
    console.log('startDate: ', startDate, lastDataDate)
    const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startDate}`
    const response = await fetch(url)
    const jsonData = await response.json()

    //Store data in localStorage
    if (equalDates === false) { //Store localStorage data + newly fetched data
        let incompleteData = storage.getStoredItem('data')
        incompleteData.shift()
        let completeData = [incompleteData, jsonData].flat()
        storage.storeItem('data', completeData)
    } else { //Store fetched data
        storage.storeItem('data', jsonData)
    }
    return jsonData
}