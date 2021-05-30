
function fetchLibraryAfterLogin(){
    if (localStorage.library != ""){
        let libraryDiv = document.createElement('div')
        libraryDiv.classList.add('library-div', 'container')
        let libraryList = document.createElement('ul')
        libraryList.classList.add('library-list')
        let libraryTitle = document.createElement('h2')


        libraryTitle.classList.add('title')
        libraryTitle.innerText = `${localStorage.email}'s library`
        libraryDiv.append(libraryTitle, libraryList)
        let sessionID = sessionStorage.userID

    document.body.append(libraryDiv)
    fetch(`http://localhost:3000/users/${sessionID}/libraries/${localStorage.library}/liked_songs`)
    .then(res => res.json())
    .then(object => {
        console.log(object)
        createLikedSongsFromArray(object)
        
    })
  
    .catch(err => console.error(err))
    }
}
