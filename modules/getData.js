export default async function getData() {
    const rawData = await fetch("https://opentdb.com/api.php?amount=10&category=25&difficulty=medium");
    const jsonData = await rawData.json();
    return jsonData;
}