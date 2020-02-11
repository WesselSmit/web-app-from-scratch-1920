//Joins miltiple strings with a '-'
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
export function getLastDataDate(data) {
    return data[data.length - 1].date
}

export function createStartYearDate() {
    const year = new Date().getFullYear()
    return joinString('-', year, '01', '01')
}