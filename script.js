import getData from './modules/getData.js'

let fetchedData,
    triviaSettings = {
        "numberOfQuestions": 10,
        "category": 20,
        "difficulty": "medium",
        "type": "multiple"
    }

getData(triviaSettings)
    .then(data => fetchedData = data)
    .then(data => console.log(fetchedData))
    .catch(err => console.log(err))