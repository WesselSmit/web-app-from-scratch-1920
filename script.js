import getData from './modules/getData.js'

let fetchedData,
    triviaSettings = {
        "limit": 10,
        "category": 9,
        "difficulty": "medium",
        "type": "multiple"
    }

document.querySelector('section:first-of-type button').addEventListener('click', () => {
    triviaSettings.limit = +document.getElementById('limit').value
    triviaSettings.category = +document.getElementById('category').value
    triviaSettings.difficulty = document.getElementById('difficulty').value
    fetchData(triviaSettings)
    document.getElementById('settings').classList.toggle('hidden')
    document.getElementById('questions').classList.toggle('hidden')
})

function fetchData(triviaSettings) {
    getData(triviaSettings)
        .then(jsonData => fetchedData = jsonData)
        .then(() => console.log(fetchedData))
        .catch(err => console.log(err))
}

document.querySelector('section:nth-of-type(2) button').addEventListener('click', () => {
    document.getElementById('questions').classList.toggle('hidden')
    document.getElementById('results').classList.toggle('hidden')
})