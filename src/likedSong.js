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
        newLi.id = `liked-song-${this.id}`
        // let deleteButton = document.createElement('button')
        // deleteButton.value = 'X'
        // deleteButton.setAttribute('data-action', 'delete')
        
        newLi.innerHTML = `${this.name} - ${this.album} - ${this.artist}  <button data-action='delete'>X</button>`
       const libraryList = document.getElementsByClassName('library-list')[0]
       libraryList.append(newLi)
    }
    
}