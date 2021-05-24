class Song {
    constructor({name, artist, album, url, uid}){
        this.name = name
        this.artist = artist
        this.album = album
        this.url = url
        this.uid = uid
    }

    appendLibrarySong(song){
        let likedSongDiv = document.createElement('div')
        likedSongDiv.classList.add('liked-song-div')
        let newSong = new Song(song)
        let newSongInfo = document.createElement('title')
        newSongInfo.innerText = `${newSong.name}`
        let libraryDiv = document.querySelector('.library-div')
        libraryDiv.append(likedSongDiv)
        likedSongDiv.append(newSongInfo)
    }   
}