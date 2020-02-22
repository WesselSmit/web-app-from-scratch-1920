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
export function getLastDataDate(data, prop) {
    return data[data.length - 1][prop]
}

//Create date object for 'currentYear' January 1st 
export function createStartYearDate() {
    const year = new Date().getFullYear()
    return joinString('-', year, '01', '01')
}

//Create a YYYYMMDD obj of current date
export function createYYYYMMDDobj() {
    const now = new Date()
    return {
        currentDay: now.getDate(),
        currentMonth: now.getMonth() + 1,
        currentYear: now.getFullYear()
    }
}

//Scroll to "position" of "element"
export function scrollToElement(target, position) {
    target.scrollIntoView({
        behavior: "smooth",
        block: position
    })
}

//Filter data based on passed filter
export function filterContent(target, filters) {
    const filter = target.id
    const allAPODs = document.querySelectorAll('[copyright]')
    const copyright = document.querySelectorAll('[copyright]:not([copyright="public domain"])')
    const non_copyright = document.querySelectorAll('[copyright="public domain"]')

    //Fix active filter styling
    filters.forEach(item => item.classList.remove('activeFilter'))
    target.classList.toggle('activeFilter')

    //Reset filters
    allAPODs.forEach(APOD => APOD.classList.remove('filtered'))

    if (filter != 'copyright') {
        copyright.forEach(el => el.classList.add('filtered'))
    } else {
        non_copyright.forEach(el => el.classList.add('filtered'))
    }
}