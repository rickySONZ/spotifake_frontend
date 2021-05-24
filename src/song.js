class Song {
    constructor({name, artist, album, url, uid}){
        this.name = name
        this.artist = artist
        this.album = album
        this.url = url
        this.uid = uid
    }

    addLikedSong(){
        let newLi = document.createElement('li')
        newLi.innerText = `${this.name} - ${this.album} - ${this.artist}`
       const libraryList = document.getElementsByClassName('library-list')[0]
       libraryList.append(newLi)
    }
    
}