import * as storage from '../modules/storage.js'

//Create compact data object with only the necessary properties
export function createCompactObj(data, properties) {
    data.map(item => { //Loop through the data array
        Object.keys(item).map(prop => { //Loop through the individual data objects in the array
            if (!properties.includes(prop)) { //If prop isn't one of the necessary properties delete it
                delete item[prop]
            }
        })
    })
    return IDgenerator(data)
}

//Give each data object an unique ID
export function IDgenerator(data) {
    const storedData = storage.getStoredData('data')
    const startIndex = (storedData != null) ? storedData.length : 1 //Check what IDs already exist in storage data
    let index = startIndex

    data.map(item => {
        item.id = index
        index++
    })
    return data
}