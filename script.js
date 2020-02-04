import getData from './modules/getData.js'

let fetchedData,
    triviaSettings = {
        "limit": 10,
        "category": 9,
        "difficulty": "medium",
        "type": "multiple"
    }

getData(triviaSettings)
    // .then(response => {
    //     if (response.ok) {
    //         console.log(response)
    //     } else {
    //         return Promise.reject(response)
    //     }
    // })
    .then(jsonData => fetchedData = jsonData)
    .then(() => console.log(fetchedData))
    .catch(err => console.log(err))