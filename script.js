import getData from './modules/getData.js'
import helper from './modules/helperFunctions.js'

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
    const quiz = document.getElementById('questions')
    let possibleAnswers = fetchedData[index].incorrect_answers.concat(fetchedData[index].correct_answer),
        answerBlocks = []

    quiz.querySelector('h2').innerHTML = fetchedData[index].question

    document.querySelectorAll('#questions div').forEach(block => answerBlocks.push(block))
    helper.randomizeArr(answerBlocks)

    answerBlocks.forEach((item, i) => {
        item.querySelector('p').innerHTML = possibleAnswers[i]
        item.classList.remove('correct')
        if (i === 3) { //this is the correct answer
            item.classList.add('correct')
        }
    })
}


document.querySelector('section:nth-of-type(2) button').addEventListener('click', () => {
    currentQuestion++

    // TODO moet nog een check komen of er een antwoord is gegeven
    if (currentQuestion > fetchedData.length - 1) {
        document.getElementById('questions').classList.toggle('hidden')
        document.getElementById('results').classList.toggle('hidden')
    } else {
        console.log(currentQuestion)
        updateContent(currentQuestion)
    }
})