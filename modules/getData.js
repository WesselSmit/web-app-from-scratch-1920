export default async function getData(settings) {
    const url = `https://opentdb.com/api.php?amount=${settings.limit}&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    return jsonData.results
}