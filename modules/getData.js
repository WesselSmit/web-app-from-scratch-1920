export default async function getData(triviaSettings) {
    const url = "https://opentdb.com/api.php?amount=" + triviaSettings.limit + "&category=" + triviaSettings.category +
        "&difficulty=" + triviaSettings.difficulty + "&type=" + triviaSettings.type
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    console.log(url, jsonData)
    return jsonData.results;
}