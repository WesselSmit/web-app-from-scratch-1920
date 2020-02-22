import * as storage from '../modules/storage.js'
import * as data from '../modules/data.js'
import * as utils from '../modules/utils.js'

//Fetch the data from API
export async function fetchData(equalDates, lastDataDate) {
    //Fetch missing data
    const startDate = (equalDates === false) ? lastDataDate : utils.createStartYearDate() //Determine how much data has to be loaded
    const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startDate}`
    const jsonData = await fetch(url)
        .then(res => {
            //Check if call was succesful
            if (res.ok && res.status === 200 && res.statusText === "OK") {
                return res
            }
            throw "Couldn't fetch data, fetch call failed"
        })
        .then(response => response.json())
        .catch(err => console.error(err))

    //Clean/filter up data
    const necessaryProperties = ['date', 'hdurl', 'title', 'explanation', 'copyright', 'media_type']
    const preparedData = data.createCompactObj(jsonData, necessaryProperties)

    //Store data in localStorage
    if (equalDates === false) { //Store localStorage data + newly fetched data
        let incompleteData = storage.getStoredData('data')
        incompleteData.shift()
        let completeData = [incompleteData, preparedData].flat()
        storage.storeData('data', completeData)
    } else { //Store fetched data
        storage.storeData('data', preparedData)
    }
    return jsonData
}