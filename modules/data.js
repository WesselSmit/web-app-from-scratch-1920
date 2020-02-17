import * as storage from '../modules/storage.js'

//Create compact data object with only the necessary properties
export function createCompactObj(data, properties) {
    data.map(item => { //Loop through the data array
        Object.keys(item).map(prop => { //Loop through the individual data objects in the array
            if (!properties.includes(prop)) { //If prop isn't one of the necessary properties delete it
                delete item[prop]
            }
            if (prop === 'media_type') {
                addMediaTypeKey(item)
            }
        })
    })
    return IDgenerator(data)
}

//Determine media_type & create data key/value pair in object
export function addMediaTypeKey(item) {
    if (item.media_type === 'image') {
        item.image = true
        delete item.url
    } else {
        item.video = true
    }
    return item.media_type
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

//Nest passed object as array in bigger object
export function nestArrInObj(obj) {
    const dataObject = {
        APODs: obj
    }
    return dataObject
}