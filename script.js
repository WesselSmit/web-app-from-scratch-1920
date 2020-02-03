import getData from './modules/getData.js'

let fetchedData

getData()
    .then(data => fetchedData = data)
    .then(data => console.log(fetchedData))
    .catch(err => console.log(err))