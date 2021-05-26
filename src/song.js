class Song {

    constructor({name, artist, album, url, uid}){
        this.name = name
        this.artist = artist
        this.album = album
        this.url = url
        this.uid = uid
    }

    addSearchedSong(){
        let newLi = document.createElement('li')
        newLi.id = `search-song-${this.id}`
        newLi.innerText = this.name
        const modalList = document.querySelector('.search-list')
        modalList.append(newLi)
    //     console.log(this)
    //     newLi.id = `liked-song-${this.id}`
    //     let deleteButton = document.createElement('button')
    //     deleteButton.innerText = 'X'
    //     deleteButton.setAttribute('data-action', 'delete')
    //     deleteButton.classList.add('button')
    //     deleteButton.addEventListener("click", this.deleteLikedSong.bind(this))
    //     newLi.innerHTML = `${this.name} - ${this.album} - ${this.artist}`
    //     newLi.appendChild(deleteButton)
    //    const libraryList = document.getElementsByClassName('library-list')[0]
    //    libraryList.append(newLi)
    }
}