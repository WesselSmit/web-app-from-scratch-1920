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
    data = filterDataMedia_types(data)
    return IDgenerator(data)
}

//Give each data object an unique ID
export function IDgenerator(data) {
    const storedData = storage.getStoredData('data')
    const startIndex = (storedData != null) ? storedData.length : 0 //Check what IDs already exist in storage data
    let index = startIndex

    //Give data-item unique ID
    data.map(item => {
        item.id = index
        index++
    })
    return data
}

//Filter out all non image media_types
export function filterDataMedia_types(data) {
    return data.filter(item => item.media_type === 'image')
}

//Nest passed object as array in bigger object
export function nestArrInObj(obj) {
    const dataObject = {
        APODs: obj
    }
    return dataObject
}