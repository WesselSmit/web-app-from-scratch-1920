import getData from './modules/getData.js'

let fetchedData,
    triviaSettings = {
        "limit": 10,
        "category": 9,
        "difficulty": "medium",
        "type": "multiple"
    },
    currentQuestion = 0

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
        .then(() => updateContent(0))
        .catch(err => console.log(err))
}

function updateContent(index) {
    console.log(index, fetchedData[index])

    const quiz = document.getElementById('questions')
    quiz.querySelector('h2').innerHTML = fetchedData[index].question

}

document.querySelector('section:nth-of-type(2) button').addEventListener('click', () => {
    currentQuestion++

    if (currentQuestion > fetchedData.length - 1) {
        document.getElementById('questions').classList.toggle('hidden')
        document.getElementById('results').classList.toggle('hidden')
    } else {
        updateContent(currentQuestion)
    }
})