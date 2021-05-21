function appendLibraryAfterLogin(){
    let libraryDiv = document.createElement('div')
    libraryDiv.classList = 'library-div'
    document.body.append(libraryDiv)

    let sessionID = sessionStorage.userID

    fetch(`http://localhost:3000/users/${sessionID}/libraries/1/liked_songs`)
    .then(res => console.log(res.json()))
  
}

