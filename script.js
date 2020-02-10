import getData from './modules/getData.js'
import create from './modules/create.js'
import utils from './modules/utils.js'

let fetchedData
let settings
let currentQuestion = 0

// Routing (uses the Routie microJS library)
routie({
    'questionsVP': () => {
        settings = utils.createSettingsObj()

        getData(settings)
            .then(data => fetchedData = data)
            .then(data => create.questionsHTML(data))
            .then(() => document.querySelectorAll('.answer').forEach(card => card.addEventListener('click', () => handleAnswer())))
            .catch(err => console.log(err))
    },
    'resultsVP': () => {
        console.log('TODO: maak hier een results viewport')
    }
})

// TODO: de antwoorden moeten nog gerandomized worden voordat ze in de HTML gezet worden

function handleAnswer() {
    console.log('the user has clicked on an answer card', 'currentQuestion index: ', currentQuestion)
    // todo de addeventlistener function call moet hetzelfde element meegeven of je nou op de "DIV" of op de "P" klikt
    // console.log(event.target)
    // console.log(event.target, event.target.children[0], event.target.children[0].textContent)
    // utils.createUserObj(event.target, currentQuestion)

    // TODO:
    // - antwoord opslaan [moet een functie worden (UTILS module)]
    // - nieuwe vraag + antwoorden inladen [moet een functie worden (RENDER module)]
    // - checken of het de laatste vraag is. JA -> laad de knop zien om naar 'results' te gaan (deze moet het "resultsVP" ID hebben) (UTILS module)
    currentQuestion++
}

// TODO: haal de next button uit de #question section --> als iemand op een antwoord klikt moet je naar de volgende vraag gaan

/*
let currentQuestion = 0

// * Dit is code die de 'settings' viewport  html maakt
// const htmlBody = document.querySelector('body')
// htmlBody.insertAdjacentHTML('afterbegin', createHTML.createSettings())


// TODO: error --> soms krijg je geen data binnen (ligt miss aan ART moet je ff checken)


// TODO: haal de knop weg in de questions viewport --> ga naar de volgende vraag wanneer de gebruiker op een antwoord klikt

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
        // TODO maak een statuscode checker die of een error gooit of de functie verder uitvoert -> vb is in Joost's uitleg te zien (ook op slack)
        .then(jsonData => fetchedData = jsonData)
        .then(() => updateContent(0))
        .catch(err => console.log(err))
}

// TODO voeg alle categorieen toe die mogelijk zijn (ook 'any')

function updateContent(index) {
    const quiz = document.getElementById('questions')
    let possibleAnswers = [...fetchedData[index].incorrect_answers, ...[fetchedData[index].correct_answer]]
    let answerBlocks = []
    console.log(possibleAnswers)

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
// TODO voeg answered class toe aan het antwoord waar op geklikt is



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

// TODO: laatste viewport (results) --> per vraag aangeven of die correct/incorrect was, wat de vraag was, 
// TODO: wat het gegeven antwoord was (indien nodig; wat het correcte antwoord was)
// TODO: laat de gebruiker filteren op (in)correcte antwoorden --> op deze manier heb je een filter & sort in de applicatie zitten
*/