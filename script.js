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
    fetchData()
    document.getElementById('settings').classList.toggle('hidden')
    document.getElementById('questions').classList.toggle('hidden')
})

function fetchData() {
    getData(triviaSettings)
        .then(jsonData => fetchedData = jsonData)
        .then(() => renderQuestions())
        .catch(err => console.log(err))
}

function renderQuestions() {
    console.log(fetchedData)
    for (const question of fetchedData) {
        console.log(question)
    }
}

document.querySelector('section:nth-of-type(2) button').addEventListener('click', () => {
    // if (
    //TODO hier moet een check komen die kijkt of alle vragen beantwoord zijn
    // ) {
    document.getElementById('questions').classList.toggle('hidden')
    document.getElementById('results').classList.toggle('hidden')
    // }
})