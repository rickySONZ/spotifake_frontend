class LikedSong {
    constructor({name, artist, album, url, uid}){
        this.name = name
        this.artist = artist
        this.album = album
        this.url = url
        this.uid = uid
    }

    addLikedSong(){
        let newLi = document.createElement('li')
        console.log(this)
        // newLi.id = `liked-song-${this.id}`
        // newLi.setAttribute()
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'X'
        deleteButton.setAttribute('data-action', 'delete')
        newLi.appendChild(deleteButton)
        newLi.innerText = `${this.name} - ${this.album} - ${this.artist}`
       const libraryList = document.getElementsByClassName('library-list')[0]
       libraryList.append(newLi)
    }
    
}