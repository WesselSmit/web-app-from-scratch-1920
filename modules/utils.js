export default {
    createSettingsObj,
    createUserObj,
    randomizeArr
}

function createSettingsObj() {
    return {
        "limit": document.getElementById('limit').value,
        "category": document.getElementById('category').value,
        "difficulty": document.getElementById('difficulty').value,
        "type": "multiple"
    }
}

// TODO: de antwoorden moeten nog gerandomized worden voordat ze in de HTML gezet worden

function createUserObj(answer, index) {
    console.log(answer, index)
    // roep hier een functie aan die toevoegd of het antwoord goed was & wat het goede antwoord was
    // return hier het gehele object
}

// The randomizeArr() function is from Stackoverflow
// Used source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function randomizeArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)),
            temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}