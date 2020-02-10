export default {
    questionsHTML
}

function questionsHTML(data) {
    const questionsArticle = document.getElementById('questions')
    const createH2 = document.createElement('h2')

    questionsArticle.append(createH2)
    createH2.innerHTML = data[0].question

    const answers = [...data[0].incorrect_answers, ...[data[0].correct_answer]]
    answers.forEach(answer => {
        const createDiv = document.createElement('div')
        const createP = document.createElement('p')

        // TODO: de antwoorden moeten nog gerandomized worden voordat ze in de HTML gezet worden

        questionsArticle.append(createDiv)
        createDiv.appendChild(createP)
        createDiv.classList.add('answer')
        createP.innerHTML = answer
    })
}