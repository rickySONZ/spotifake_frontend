function appendLibraryAfterLogin(){
    let libraryDiv = document.createElement('div')
    libraryDiv.classList.add('library-div')
    let libraryTitle = document.createElement('h2')
    libraryTitle.classList.add('title')
    libraryTitle.innerText = `${localStorage.email}'s library`
    libraryDiv.append(libraryTitle)
    document.body.append(libraryDiv)

    let sessionID = sessionStorage.userID

    fetch(`http://localhost:3000/users/${sessionID}/libraries/${localStorage.library}/liked_songs`)
    .then(res => console.log(res.json()))
  
}

