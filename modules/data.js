import * as storage from '../modules/storage.js'
import * as template from '../modules/template.js'

//Create compact data object with only the necessary properties
export function createCompactObj(data, properties) {
    data.map(item => { //Loop through the data array
        Object.keys(item).map(prop => { //Loop through the individual data objects in the array
            if (!properties.includes(prop)) { //If prop isn't one of the necessary properties delete it
                delete item[prop]
            }
        })
    })
    data = filterDataMedia_types(data) //Filter out all videos
    data = copyrightGoodDefault(data) //Assign good-default copyright value
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

//Add "public domain" to object items without a copyright key
export function copyrightGoodDefault(data) {
    data.map(item => item.copyright = (item.copyright === undefined) ? "public domain" : item.copyright)
    return data
}

//Nest passed object as array in bigger object
export function nestArrInObj(obj) {
    const dataObject = {
        APODs: obj
    }
    return dataObject
}

//Count the number of APODs containing the key 'copyright' with the 'public domain' value
export function countObjValueNum(data) {
    return data.reduce((num, item) => num + (item.copyright === 'public domain'), 0)
}

//Filter data based on passed filter
export function filterContent(target, filters) {
    const filter = target.id
    const allAPODs = document.querySelectorAll('[copyright]')
    const copyright = document.querySelectorAll('[copyright]:not([copyright="public domain"])')
    const non_copyright = document.querySelectorAll('[copyright="public domain"]')

    //Fix active filter styling
    filters.forEach(item => item.classList.remove('activeFilter'))
    target.classList.toggle('activeFilter')

    //Reset filters
    allAPODs.forEach(APOD => APOD.classList.remove('filtered'))

    //Filter content
    if (filter === 'non_copyright') {
        copyright.forEach(el => el.classList.add('filtered'))
    } else if (filter === 'copyright') {
        non_copyright.forEach(el => el.classList.add('filtered'))
    } else if (filter === 'none') {
        allAPODs.forEach(el => el.classList.remove('filtered'))
    }
}

//Sort the overview page content
export function sortContent(target, sorters) {
    const data = storage.getStoredData('data')
    const sort = target.id
    const overviewTarget = document.querySelector('#overview > div:last-of-type')

    //Fix active filter styling
    sorters.forEach(item => item.classList.remove('activeSort'))
    target.classList.toggle('activeSort')

    let sortedData
    if (sort === 'new_first') {
        sortedData = data.sort((lowest, highest) => highest.id - lowest.id)
    } else {
        sortedData = data.sort((lowest, highest) => lowest.id - highest.id)
    }

    template.createHTML(null, sortedData, [overviewTarget, 'overview'])
}