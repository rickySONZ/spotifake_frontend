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
        let addButton = document.createElement('button')
        addButton.classList.add('button', 'add-button')
        addButton.innerHTML = '-'
        newLi.append(addButton)
        addButton.addEventListener("click", () => {
           if (addButton.innerHTML === "-"){
               addButton.innerHTML = "&check;"
           } else {
               addButton.innerHTML = "-"
           }
        })
    }
}