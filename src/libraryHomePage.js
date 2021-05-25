let sessionID = sessionStorage.userID

function fetchLibraryAfterLogin(){
    if (localStorage.library != ""){
    let libraryDiv = document.createElement('div')
    libraryDiv.classList.add('library-div')
    let libraryList = document.createElement('ul')
    libraryList.classList.add('library-list')
    let libraryTitle = document.createElement('h2')
    libraryTitle.classList.add('title')
    libraryTitle.innerText = `${localStorage.email}'s library`
    libraryDiv.append(libraryTitle, libraryList)
    document.body.append(libraryDiv)
    fetch(`http://localhost:3000/users/${sessionID}/libraries/${localStorage.library}/liked_songs`)
    .then(res => res.json())
    .then(object => {
        console.log(object)
        for (const i in object){
            s = new LikedSong(object[i].song)
            s.id = object[i].id
            s.addLikedSong()
        }
    })
    .catch(err => console.error(err))
 } 
}
