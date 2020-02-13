//Joins multiple strings with a special-char
export function joinString(joinChar, ...strings) {
    return strings.join(joinChar)
}

//Prefixes numbers/string with a zero if they aren't double digit
export function prefixZero(item) {
    item = item.toString()
    return (item.length < 2) ? `0${item}` : item
}

//Checks if all passed arguments have the same value (returns bool)
export function compareValues(base, ...items) {
    return items.every(item => item === base)
}

//Get latest data date
//todo '.date' moet een argument zijn in de functie die je als string dynamisch kan meegeven
//todo functie kan je hernoemen naar 'getLastDataProperty' of 'getDataProperty' 
//todo: (kan je het ook nog zo maken dat je als argument meegeeft welke propertie je wilt van welk data-item index)
export function getLastDataDate(data) {
    return data[data.length - 1].date
}

export function createStartYearDate() {
    const year = new Date().getFullYear()
    return joinString('-', year, '01', '01')
}