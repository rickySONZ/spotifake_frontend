class Song {
    constructor({name, artist, album, url, uid}){
        this.name = name
        this.artist = artist
        this.album = album
        this.url = url
        this.uid = uid
    }

    renderlikedSong(){
        return(`<li id="liked-song-${this.id}" data-id=${this.id}>
                <span>${this.name} - ${this.artist} - ${this.album}</span> 
                <button data-action='delete'>X</button>
            </li>`
        )
    } 

    appendLikedSong(){
        const libraryList = document.getElementsByClassName('library-list')
        libraryList.innerHTML += this.renderlikedSong()
    }
}