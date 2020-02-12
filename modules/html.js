export function createOverview(data) {
    console.log('maak hier de html voor de overview page', data)

    //todo vervang alle logica hier met een template engine (MUSTACHE)
    data.forEach(item => {
        const createImg = document.createElement('img')
        document.querySelector('#overview > div:last-of-type').append(createImg)
        createImg.src = item.hdurl

        console.log(item.media_type)
    })

    //todo: de data bevat beide images & video's; maak voor de video's een video element dat autoplayed en geen controls laat zien
    //todo: dit moet met een template engine gebeuren (EJS??? of mag dit niet omdat het een library is)
}