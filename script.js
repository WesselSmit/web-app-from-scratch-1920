import getData from './modules/getData.js'

let fetchedData

// TODO in de triviaSettings mogen geen 'null' waardes voorkomen, alle waardes moeten een good-default hebben
let triviaSettings = {
    "numberOfQuestions": 10,
    "category": 20,
    "difficulty": "medium",
    "type": "multiple"
}

getData(triviaSettings)
    .then(data => fetchedData = data)
    .then(data => console.log(fetchedData))
    .catch(err => console.log(err))