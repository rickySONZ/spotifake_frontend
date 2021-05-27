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
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'X'
        deleteButton.setAttribute('data-action', 'delete')
        deleteButton.classList.add('button')
        deleteButton.addEventListener("click", this.deleteLikedSong.bind(this))
        let playButton = document.createElement('button')
        playButton.innerText = "►"
        playButton.classList.add('button')
        playButton.setAttribute("href", this.url)
        playButton.addEventListener("click", () => {
            window.location = `${this.url}`
        })
        newLi.innerHTML = `${this.name} - ${this.album} - ${this.artist}`
        newLi.append(playButton, deleteButton)
       const libraryList = document.getElementsByClassName('library-list')[0]
       libraryList.append(newLi)
       
    }
    


    deleteLikedSong(){
        let sessionID = sessionStorage.userID

        fetch(`http://localhost:3000/users/${sessionID}/libraries/${localStorage.library}/liked_songs/${this.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(song =>{
            if (song.message === "The song has been removed from your library."){
                let li = document.getElementById(`liked-song-${this.id}`)
                alert(song.message)
                li.remove()
            } else {
                alert(song.message)
            }
        })
        .catch(err => console.error(err))
    }


    
}