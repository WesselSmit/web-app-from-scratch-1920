export default async function getData(triviaSettings) {
    const url = "https://opentdb.com/api.php?amount=" + triviaSettings.numberOfQuestions + "&category=" + triviaSettings.category +
        "&difficulty=" + triviaSettings.difficulty + "&type=" + triviaSettings.type,
        rawData = await fetch(url),
        jsonData = await rawData.json();
    return jsonData.results;
}