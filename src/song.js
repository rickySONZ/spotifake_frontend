class Song {

    constructor({name, artist, album, url, uid, id}){
        this.name = name
        this.artist = artist
        this.album = album
        this.url = url
        this.uid = uid
        this.id = id
        this.addSearchedSong = this.addSearchedSong.bind(this)
    }

    addSearchedSong(){
        let newLi = document.createElement('li')
        newLi.id = `search-song-${this.id}`
        newLi.setAttribute('data-id', `${this.id}`)
        newLi.innerText = `${this.name} - ${this.album} - ${this.artist}`
        const modalList = document.querySelector('.search-list')
        modalList.append(newLi)
        let playerButton = document.createElement('a')
        playerButton.innerText = "►"
        playerButton.classList.add('button')
        playerButton.setAttribute("href", this.url)
        playerButton.setAttribute('target', "_blank")
        let addButton = document.createElement('button')
        addButton.classList.add('button', 'add-button')
        addButton.innerHTML = '-'
        newLi.append(playerButton, addButton)
        addButton.addEventListener("click", () => {
           if (addButton.innerHTML === "-"){
               addButton.innerHTML = "&check;"
           } else {
               addButton.innerHTML = "-"
           }
        })
    }
}
