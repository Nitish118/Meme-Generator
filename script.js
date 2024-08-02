const memeCard = document.getElementById('meme-card')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('img')
const memeAuthor = document.querySelector('.meme-author')
const generateButton = document.querySelector('.generate-meme-btn')

async function generateMeme() {
    const url = 'https://meme-api.com/gimme'
    const response = await fetch(url)
    const data = await response.json()

    createMeme(data.title, data.url, data.author)


}

function createMeme(title, url, author) {
    memeCard.innerHTML = ""

    const mainDiv = document.createElement('div')
    const titleH2 = document.createElement('h2')
    titleH2.textContent = title
    const image = document.createElement('img')
    image.src = url
    const memeAuthor = document.createElement('div')
    memeAuthor.textContent = author

    mainDiv.appendChild(titleH2)
    mainDiv.appendChild(image)
    mainDiv.appendChild(memeAuthor)

    memeCard.appendChild(mainDiv)

}

generateButton.addEventListener('click', () => {
    generateMeme();
})